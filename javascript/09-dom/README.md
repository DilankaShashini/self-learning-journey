# Lesson 9: Document Object Model (DOM)

## 1. What is the DOM?
* **DOM (Document Object Model):** A built-in JavaScript object named `document` that represents and models the webpage.
* **Purpose:** Combines JavaScript and HTML together, giving JS full control to access, modify, and delete HTML elements dynamically.
* HTML elements inside JS are converted into **JavaScript Objects**.
  * `typeof document.body` returns `'object'`.

## 2. Accessing & Modifying Elements
* **`document.title`**: Accesses or changes the page title (`document.title = 'New Title';`).
* **`document.body`**: Accesses the `<body>` element object.
* **`document.querySelector('selector')`**:
  * Gets the **first** matching HTML element from the webpage and imports it into JS.
  * Tag Selector: `document.querySelector('button')`
  * Class Selector: `document.querySelector('.js-button')`
* **Storing Elements:** HTML elements can be saved in variables (e.g., `const buttonElement = document.querySelector('.js-button');`).

## 3. Element Properties: `.innerHTML` vs `.innerText`
* **`.innerHTML`**:
  * Controls and returns all HTML content (text + nested tags) inside an element.
  * Allows inserting raw HTML string (e.g., `element.innerHTML = '<button>Click</button>';`).
* **`.innerText`**:
  * Controls and returns **only the visible text** inside an element.
  * **Best Practice:** Use `.innerText` when evaluating text with extra spaces, as it automatically ignores surrounding HTML whitespace.

## 4. Input Elements & Type Conversion
* **`<input>` Element:** A void element (no closing tag needed) used for user text input.
* **`placeholder` Attribute:** Displays hint text when the input box is empty.
* **`.value` Property:** Gets the user input text from an input element.
* **Type Conversion (`Number()` & `String()`):**
  * `.value` **always returns a String**, even for numerical inputs.
  * Convert to number using `Number(inputElement.value)` before performing mathematical calculations.
  * Concatenating strings with numbers causes unexpected coercion (e.g., `'25' + 5` becomes `'255'`).

## 5. Events & Event Listeners
* **Events:** Actions that happen in the browser (clicks, key presses, scrolling, mouse movement).
* **Event Listeners:** HTML attributes that execute JS when an event occurs:
  * `onclick="..."`: Runs code when an element is clicked.
  * `onkeydown="..."`: Runs code when a keyboard key is pressed down.
  * `onscroll="..."`: Runs code on scroll.
  * `onmouseenter="..."` / `onmouseleave="..."`: Runs code on mouse hover / exit.
* **`event` Object:**
  * Provided automatically inside event listeners.
  * Contains details about the triggered event (e.g., `event.key` gives `'Enter'` on key press).

## 6. The `window` Object
* **`window` Object:** Represents the browser window/environment (whereas `document` represents the webpage inside the window).
* `window.document` points directly to `document`.
* **Browser Shortcut:** The `window.` prefix is optional. Methods like `alert()`, `console.log()`, and `document` automatically belong to the global `window` object.