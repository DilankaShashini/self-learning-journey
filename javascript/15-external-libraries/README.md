# Lesson 15: External Libraries & MVC Design Pattern

## 1. External Libraries
* **What is an External Library?** Pre-written code created by other developers that we import into our projects to save time, share code, and avoid duplicating work.
* **Minification:** The process of removing all extra whitespace, line breaks, and shortening variable names to single characters to reduce file size so the code loads faster (e.g., `dayjs.min.js`).
* **Best Practice:** Always search for a trusted external library before building complex features (like date calculations or char plotting) from scratch. 

## 2. DayJS Library & Format Reference Table
DayJS is a popular lightweight JavaScript library for parsing, validating, manipulating, and formatting dates.
* **Basic Usage:**
  ```javascript
  import dayjs from '[https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js](https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js)';
  const today = dayjs();
  const deliveryDate = today.add(7, 'days');
  const dateString = deliveryDate.format('dddd, MMMM D');
  ```

### DayJS Format Tokens Reference Table

| Format Token | Output Example | Description |
| :--- | :--- | :--- |
| `YY` | 18 | Two-digit year |
| `YYYY` | 2018 | Four-digit year |
| `M` | 1-12 | The month, beginning at 1 |
| `MM` | 01-12 | The month, 2-digits |
| `MMM` | Jan-Dec | The abbreviated month name |
| `MMMM` | January-December | The full month name |
| `D` | 1-31 | The day of the month |
| `DD` | 01-31 | The day of the month, 2-digits |
| `d` | 0-6 | The day of the week, with Sunday as 0 |
| `dd` | Su-Sa | The min name of the day of the week |
| `ddd` | Sun-Sat | The short name of the day of the week |
| `dddd` | Sunday-Saturday | The full name of the day of the week |
| `H` | 0-23 | The hour (24-hour clock) |
| `h` | 1-12 | The hour (12-hour clock) |
| `m` | 0-59 | The minutes |
| `s` | 0-59 | The seconds |
| `A` | AM / PM | Post meridiem or ante meridiem |

## 3. ECMAScript Modules (ESM) & Default Exports

* **ESM Version:** A specialized version of external libraries packaged to work natively with JavaScript modules (`import` / `export`).
* **Default Exports:**
  * Used when a module exports only one main feature or function.
  * Imported **without** curly brackets `{}`.
  * Each file can have only **one** `export default` statement.

  * **Example:**

  ```javascript
  // In money.js
  export default function formatCurrency(priceCents)   { ... }

  // In checkout.js
  import formatCurrency from '../utils/money.js';
  ```
  
  * Named exports use curly brackets (`import { getProduct } from ...`). You can also rename default imports upon import (e.g., `import isWeekendDay from './isWeekend.js'`).

## 4. The MVC Design Pattern (Model-View-Controller)
To keep code organized and prevent state synchronization bugs, modern applications use the MVC architectural pattern:
   1. **Model:** Saves and manages application data (e.g., `cart.js`, `products.js`, `deliveryOptions.js`).
   2. **View:** Takes data and displays it on the web page by generating HTML (e.g., `orderSummary.js`, `paymentSummary.js`, `checkoutHeader.js`).
   3. **Controller:** Listens for user interactions (clicks, keydown) and triggers model updates or view re-renders (e.g., Event listeners in checkout files).

* **Re-rendering (MVC Cycle):** Instead of modifying DOM elements directly (like `.remove()`), the controller updates the data model, and then regenerates all relevant HTML, ensuring the UI 100% matches the underlying data state.

## 5. Floating-Point Precision Fix
JavaScript floating-point arithmetic can introduce rounding errors (e.g., `6.005.toFixed(2)` results in `'6.00'` instead of `'6.01'`).

* **Fix:** Round the value before formatting:

```JavaScript
Math.round(priceCents) / 100;
```