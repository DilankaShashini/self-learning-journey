import { calculateCartQuantity } from '../../data/cart.js';

// 15j, 15k: MVC View component for rendering checkout header dynamically
export function renderCheckoutHeader() {
  const cartQuantity = calculateCartQuantity();

  const checkoutHeaderHTML = `
    Checkout (<a class="return-to-home-link" href="amazon.html">${cartQuantity} items</a>)
  `;

  document.querySelector('.js-checkout-header-middle-section')
    .innerHTML = checkoutHeaderHTML;
}