# Lesson 12: Advanced Functions

## 1. Functions as Values (First-Class Functions)
* In JavaScript, **functions are values**. They can be assigned to variables, stored inside objects, or passed as arguments into other functions.
* **Anonymous Functions:** Functions created without a name (e.g., `const function2 = function() {};`).
* **Hoisting vs Function Expressions:**
  * Standard function declarations (`function greeting() {}`) are **hoisted** (can be called before they are defined in code).
  * Function expressions (`const fun = function() {};`) are **not hoisted** and must be defined before invocation.
* **Methods:** A function saved inside an object property (e.g., `object.method()`).

## 2. Callbacks & Asynchronous JavaScript
* **Callback Function:** A function passed as an argument into another function to be executed later.
* **Synchronous Code:** Executes line-by-line in sequential order, waiting for each line to complete before proceeding.
* **Asynchronous Code:** Does not block execution. JavaScript schedules the task to complete in the future and immediately moves to the next line of code.
* **`setTimeout(callback, delayMs)`:** Runs a function once after a specified delay in milliseconds (e.g., `1000ms = 1s`).
* **`setInterval(callback, intervalMs)`:** Runs a function repeatedly after every specified time interval.
  * `setInterval()` returns a unique **Interval ID**.
  * Use `clearInterval(intervalId)` to stop the repeating timer.

## 3. Array Iteration: `.forEach()`
* Preferred modern way to iterate through arrays instead of standard `for` loops.
* Accepts a callback function: `.forEach((value, index) => {})`.
* **Skipping Iterations:** Inside `.forEach()`, returning early (`return;`) acts like `continue` in a standard loop.
* **Limitation:** You cannot `break` out of a `.forEach()` loop early. If breaking is required, use a regular `for` loop.

## 4. Arrow Functions & Shortcuts
Shorter syntax for writing anonymous function expressions:
```javascript
const add = (a, b) => a + b;
```
* **Shortcut 1 (Single Parameter):** Parentheses `()` around parameters are optional if there is exactly one parameter (`param => { ... }`).
* **Shortcut 2 (One-Line Return):** If the function body has only one line, curly braces `{}` and the `return` keyword can be omitted (`() => 2 + 3`).
* **Object Method Shorthand:** Preferred clean syntax inside objects:
```javascript
const obj = {
  myMethod() { ... }
};
```
## 5. Modern Event Handling: `.addEventListener()`
* Preferred over HTML `onclick="..."` inline attributes.
* **Syntax:** `element.addEventListener('event', callbackFunction)`.
* **Advantages over inline attributes:**
  1. Allows attaching multiple event listeners to a single element.
  2. Enables removing event listeners using `element.removeEventListener()`.
  3. Supports cleaner code separation (HTML remains markup-only).
* **Multiple Elements Selection:** Use `document.querySelectorAll('.class')` which returns a NodeList/Array-like structure, allowing `.forEach()` loop attachment.

## 6. Functional Array Transformations: `.filter()` & `.map()`
* `.filter(callback)`:
  * Creates a new array.
  * Evaluates each element against a boolean test: if callback returns `true` (or truthy), element is included in the new array.
* `.map(callback)`:
  * Creates a new array.
  * Transforms every element by returning a new value for each position in the array.

## 7. Closures
* A **Closure** gives an inner function access to variables from its outer (enclosing) lexical scope, even after the outer function has finished executing.
* **Package Concept:** The function carries its surrounding variable scope along with it.
* **Practical Example:** Attaching `click` listeners inside a `querySelectorAll('.js-delete').forEach((button, index) => ...)` loop preserves access to the exact index value when clicked later.