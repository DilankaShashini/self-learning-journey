let productsHTML = '';

// Object map to store timeout IDs per product for resetting the 2-second message duration (13m)
const addedMessageTimeouts = {};

// Iterate through products array and generate dynamic HTML
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <!-- 13b: Added unique product JS class to identify quantity dropdown selector -->
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <!-- 13i: Added unique product JS class for 'Added' message -->
      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;

// Attach click event listeners to all 'Add to Cart' buttons
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      // 13h: Destructuring shortcut for productId
      const { productId } = button.dataset;

      // 13c & 13d: Get DOM element for selected quantity and extract string value
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      
      // 13e: Convert DOM string value to Number
      const quantity = Number(quantitySelector.value);

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        // 13e: Add selected dropdown quantity instead of hardcoded 1
        matchingItem.quantity += quantity;
      } else {
        // 13h: Shorthand property notation
        cart.push({
          productId,
          quantity
        });
      }

      // Calculate total cart quantity
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

      // 13j & 13k: Show 'Added' message by adding visibility CSS class
      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
      addedMessage.classList.add('added-to-cart-visible');

      // 13m: Clear previous timeout if already running for this product
      const previousTimeoutId = addedMessageTimeouts[productId];
      if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
      }

      // 13l: Hide 'Added' message after 2 seconds and store timeout ID
      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);

      // Save active timeout ID to object map
      addedMessageTimeouts[productId] = timeoutId;
    });
  });