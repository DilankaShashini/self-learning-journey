# Lesson 13: Start the Amazon Project and Intro to Git

## 1. Introduction to Version Control (Git)
* **What is Git?** Git is a Version Control System (VCS) that tracks code changes over time, allowing developers to revert to previous working states, review project history, and collaborate without overwriting each other's code.
* **Key Benefits:**
  * **Safety Net:** Easily undo mistakes or revert to a stable working version.
  * **Version History:** Tracks who changed what, when, and why.
  * **Branching & Collaboration:** Enables multiple developers to work on different features simultaneously.

### Core Terminology
* **Repository (Repo):** A project folder initialized to track file modifications and version history.
* **Commit:** A saved snapshot of changes recorded in the repository history with a descriptive commit message.

## 2. Git Setup and Configuration Workflows

### Approach A: Local Repository Setup
1. **Initialize Git in a Local Project Folder:**
   ```bash
   git init
   ```
2. **Configure Author Credentials (One-time Setup per device or project):**
   ```bash
   git config user.name "UserName"
   git config user.email "email"
   ```
3. **Stage and Commit Local Changes:**
   ```bash
   git add .
   git commit -m "feat(lesson-13): initial amazon project setup and data grid rendering"
   ```

### Approach B: GitHub Remote Integration Workflow (Standard Industry Practice)
1. **Create Repository on GitHub:**
  * Go to GitHub -> Click **New Repository** -> Set name (e.g., `self-learning-journey`).
  * Optionally choose to initialize with a `README.md` or `.gitignore`.
2. **Clone Remote Repository to Local Machine:**
   ```bash
   git clone <REMOTE_REPOSITORY_URL>
   ```
3. **Link Existing Local Repo to GitHub (If initialized locally first):**
   ```bash
   git remote add origin [https://github.com/DilankaShashini/](https://github.com/DilankaShashini/)<REPOSITORY_NAME>.git
   git branch -M main
   git push -u origin main
   ```
4. **Daily Git Command Flow:**
   ```bash
   git add <file-or-folder-path>
   git commit -m "commit message describing exact changes"
   git push origin main
   ```

## 3. Web Application Development Architecture
Building real-world web applications follows a 3-step structured process:
1. **Save Data (Data Layer):** Structure raw application data in JS Arrays/Objects (`products.js`, `cart.js`).
2. **Generate HTML (Presentation Layer):** Dynamically convert data arrays into structured HTML strings using loops (`.forEach()`) and render them to the DOM.
3. **Make it Interactive (Logic/Event Layer):** Attach Event Listeners to handle user interactions (e.g., Add to Cart, quantity updates).

## 4. Key JavaScript & E-commerce Theory Concepts

### A. Price Formatting in Financial Applications
* **Store Currency in Lowest Denominator (Cents):** Floating-point numbers in JavaScript can cause precision errors (e.g., `0.1 + 0.2 = 0.30000000000000004`). In e-commerce, prices are stored as whole integers representing cents (`priceCents: 1090 = $10.90`).
* **`.toFixed(fractionDigits)` Method:**
  * Formats a number to a fixed number of decimal places and returns a string.
  * **Example:**
    ```javascript
    const priceDollars = (1090 / 100).toFixed(2); // Output: "10.90" (String)
    ```

### B. Benefits of Dynamic HTML Generation
* Eliminates repetitive HTML markup.
* Adding or removing products requires modifying only the underlying JS data array (`products.js`), avoiding manual HTML updates.

### C. HTML Data Attributes (`data-*`)
* **Purpose:** Custom HTML attributes used to store extra information directly inside DOM elements.
* **HTML Syntax:** Attributes must begin with `data-` followed by lower-case kebab-case naming:
```html
<button class="js-add-to-cart" data-product-id="${product.id}">
  Add to Cart
</button>
```
* **JavaScript Dataset Property (`.dataset`):** Automatically converts kebab-case attribute names to camelCase properties:
```javascript
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    // Access data-product-id using camelCase property productId
    const productId = button.dataset.productId;
    console.log(productId);
  });
});
```

### D. Primary Identifier Pattern (`id`)
* Product names are not guaranteed to be unique across large catalogs.
* Every item in an e-commerce catalog must possess a unique identifier (`id` or `UUID`) to avoid targeting errors during cart operations or database queries.

## 5. Amazon Project Architecture Summary
```plaintext
amazon.html (DOM Shell)
   ├── data/products.js (Data source containing products array)
   ├── data/cart.js     (Global cart array storage)
   └── scripts/amazon.js (Dynamic HTML generation & cart state updates)
```

### Script Ordering Dependency Rule
Script files in HTML load sequentially in synchronous order. Dependencies must load before the scripts that use them:
```html
<!-- Load Data Files First -->
<script src="data/cart.js"></script>
<script src="data/products.js"></script>

<!-- Load Main Executable Script Last -->
<script src="scripts/amazon.js"></script>
```