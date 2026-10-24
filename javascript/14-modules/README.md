# Lesson 14: JavaScript Modules & Checkout Page

## 1. JavaScript Modules
* **The Problem with Traditional Scripts:** Loading multiple `<script>` tags sequentially into global scope causes **naming conflicts** (e.g., duplicate variable declarations like `const cart = []` across files without browser warnings).
* **What is a Module?** A module is a self-contained JS file where all variables and functions are scoped locally by default, preventing pollution of the global namespace.
* **How to Use Modules:**
  1. **Add `type="module"` attribute** in the HTML script tag:
     ```html
     <script type="module" src="scripts/amazon.js"></script>
     ```
  2. **Export variables/functions** from data/utility files:
     ```javascript
     export const cart = [];
     export function addToCart(productId) { ... }
     ```
  3. **Import modules** in entry-point files:
     ```javascript
     import { cart, addToCart } from '../data/cart.js';
     ```
  4. **Rename during import (Alias):** To avoid local naming clashes:
     ```javascript
     import { cart as myCart } from '../data/cart.js';
     ```
  5. **Import everything as an object:**
     ```javascript
     import * as cartModule from '../data/cart.js';
     cartModule.addToCart('id');
     ```
* **Crucial Rule:** Modules **must** be run via a local web server (such as VS Code **Live Server** extension) due to browser CORS security policies restricting local `file://` module imports.

## 2. E-Commerce Data Architecture & Normalization
* **Data Normalization:** Storing only the unique product identifier (`productId`) and `quantity` in the `cart` array rather than duplicating entire product objects. 
* To render the checkout page, the cart items are cross-referenced with the product catalog (`products.js`) using their IDs.

## 3. UI Interactions & DOM Manipulation
* **Radio Selectors:** Grouping radio buttons with the same `name` attribute ensures only one option can be selected at a time within that group.
* **Removing Elements via DOM:**
  ```javascript
  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.remove();
  ```
* **Inline Quantity Editing State:** Using CSS classes (e.g., `.is-editing-quantity`) combined with `display: none` and `display: initial` to toggle between static view mode and interactive input mode.