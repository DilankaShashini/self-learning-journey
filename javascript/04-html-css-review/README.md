# Lesson 4: HTML CSS Reviw & console.log

## 1. Core Web Technologies
* **HTML (Hypertext Markup Language):** Creates the content and structure  of a web page (buttons, text, paragraphs).
* **CSS (Cascaded Style Sheets):** Controls the visual styling and appearance (colors, borders, spacing).
* **JS (JavaScript):** Adds behavior, logic, and ineractivity to the website.

## 2. Standard HTML Page Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <style>
      /* CSS Styles go here */
    </style>
  </head>
  <body>
    <!-- Visible HTML Content goes here -->
     
    <script>
      // JavaScript Code goes here
    </script>
  </body>
</html>
```

* **`<!DOCTYPE html>`:** Tells the browser to use the modern version of HTML5.
* **`<html>`:** The root element representing the entire web page.
* **`<head>`:** Contains non-visible page information (metadata, title, styles).
* **`<body>`:** Containsall visible elements on the qeb page.

## 3. Key Concepts & Rules
### HTML Elements & Attributes
* **HTML Elements:** Consist of an opening tag (e.g., `<button>`), content, and a closing tag (e.g., `</button>`).
* **Attributes:** Placed inside the opening tag to change behavior or add labels (e.g., `class="red-button"` , `title="Tooltip"`).
* **Nesting:** HTML elements can contain other elements inside them.
* **Spacing:** HTML combines multiple spaces or new lines into a single space.

### CSS Selector & Properties
* **Element Selector:** Targets all tags pf a type (e.g., `button { color: red; }`).
* **Class Selector:** Targets specific elements labeled with a class attribute (e.g., `.red-button { background-color: red; }`).

### Running JavaScript
1. **`<script>` Element:** Executes JavaScript automatically when the web page loads.
2. **`onclick="..."` Attribute:** Runs JavaScript when a specific element/button is clicked by the user.

## 4. Essential Notes & Rules
### Comments
Comments are ignored by the browser and help document or temporarily disable code:
* **JavaScript Single-line:** `// comment`
* **JavaScript Multi-line:** `/* comment */`
* **HTML Comment:** `<!-- comment -->`
* **CSS Comment:** `/* comments */`

### VSCode Formatting Settings
* **Indentation:** Change tab size to 2 spaces (standard for Web Development).
* **Indent Removal:** Use `Shift + Tab` to un-indent selected lines.
* **Line Wrapping:** Enable Word Wrap in Settings (`Alt + Z`) to prevent long horizontal scrolling.

### Developmemt Workflow &  Debugging
* **`console.log()` :** Used to send output or test mathematical expressions directly in the browser developer console (e.g., `console.log(2 + 2)`).
* **Live Server Extension:** Automatically reloads the web page in the browser whenever HTML/CSS/JS files are saved.
