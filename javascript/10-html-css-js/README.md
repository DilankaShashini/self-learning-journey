# Lesson 10: HTML, CSS, and JavaScript Together

## 1. Modifying Classes using `classList`
* HTML elements are JavaScript objects, and they have a built-in property called **`classList`**.
* **`classList`Object:** Gives us control over the `class` attribute of an HTML element.
* **`classList.add('class-name')`:** Adds a class to the element dynamically.
* **`classList.remove('class-name')`:** Removes a class from the element.
* **Note:** Unlike `querySelector`, do **NOT** use a dot (`.`) inside `classList.add()` or `classList.remove()`.

## 2. CSS Styling & Layout Principles
* **Global Styles:** Styling `body {}` applies default styles (e.g., `font-family: Arial`, `background-color`, `color`) across all elements on the page.
* **RGB Color Format:** `rgb(red, green, blue)` where values range from `0` to `255`:
  * `0` = Less color / Darker (e.g., `rgb(0, 0, 0)` is Black).
  * `255` = Maximum color / Lighter (e.g., `rgb(255, 255, 255)` is White).
* **Padding vs. Margin:**
  * **Padding:** Space **inside** the border of an element. Short-hand `padding: 12px 15px;` sets vertical (12px) and horizontal (15px) padding.
  * **Margin:** Space **outside** the border of an element (pushes adjacent elements away).
* **Border Property:** Expressed as `border: 2px solid white;` (width | style [solid/dotted/dashed] | color).
* **Image Tag (`<img>`):** A void element (no closing tag needed). Uses the `src` attribute to specify image file path (`<img src="path/to/image.png">`).

## 3. Code Organization (Separating Languages)
Putting HTML, CSS, and JS in a single file makes code harder  to read  and maintain. Best practice is to separate them into dedicated files:

1. **JavaScript Files (`.js`):**
  * External JS scripts are linked using `<script src="scripts/filename.js"></script>`.
  * Multiple `<script>` tags can be loaded in a single page.
2. **CSS Files (`.css`):**
  * External stylesheets are linked inside `<head>` using `<link rel="stylesheet" href="styles/filename.css">`.
  * **`rel` (relation):** Specifies the document type (`stylesheet`).
  * **`href` (hypertext reference):** Path to the `.css` file.