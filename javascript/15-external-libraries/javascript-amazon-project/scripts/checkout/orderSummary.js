import { cart, removeFromCart, updateQuantity, updateDeliveryOption } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { deliveryOptions, getDeliveryOption, calculateDeliveryDate } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js'; // 15j, 15k

export function renderOrderSummary() {
  // 15j, 15k: Render checkout header via MVC
  renderCheckoutHeader();

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    
    // 15l: Use centralized calculateDeliveryDate function
    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">$${formatCurrency(matchingProduct.priceCents)}</div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                Update
              </span>
              <input class="quantity-input js-quantity-input-${matchingProduct.id}" type="number" value="${cartItem.quantity}">
              <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">
                Save
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      // 15l: Calculate delivery option date
      const dateString = calculateDeliveryDate(deliveryOption);
      const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">${dateString}</div>
            <div class="delivery-option-price">${priceString} Shipping</div>
          </div>
        </div>
      `;
    });

    return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  // 15h: Delete Link Functionality using MVC (Re-render order summary & payment summary)
  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        // MVC: Re-render components instead of direct DOM manipulation (.remove())
        renderOrderSummary();
        renderPaymentSummary();
      });
    });

  // Update Link Interaction (14f, 14h, 14i)
  document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.classList.add('is-editing-quantity');
      });
    });

  // Save Link Interaction & Validation + Enter Key Support (15n: MVC Re-render)
  const saveQuantity = (productId) => {
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');

    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
    const newQuantity = Number(quantityInput.value);

    if (newQuantity < 0 || newQuantity >= 1000) {
      alert('Quantity must be at least 0 and less than 1000');
      return;
    }

    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }

    // 15n: MVC Re-render order summary, payment summary, and header
    renderOrderSummary();
    renderPaymentSummary();
  };

  document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        saveQuantity(productId);
      });
    });

  document.querySelectorAll('.quantity-input')
    .forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const productId = input.classList[1].replace('js-quantity-input-', '');
          saveQuantity(productId);
        }
      });
    });

  // Delivery Option Change Listener
  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const { productId, deliveryOptionId } = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);

        // MVC: Re-render UI views instantly
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
}