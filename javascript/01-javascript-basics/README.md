# Lesson 1: JavaScript Basics

## Key Concepts
* **JavaScripts:** Makes websites ineractive (works alongside HTML & CSS).
* **Syntax:** Rules we must follow when writing code for the computer to understand.
* **Console:** Developer tool in browsers to run quick JS code.
* **Node.js:** A runtime environment that allows JavaScript to run outside the browser (e.g., in VS Code Terminal or Backend Servers).

## Essential Commands Learned
* `alert('message');` - Displays a popup box (Browser only).
* `document.body.innerHTML = 'content';` - Modifies HTML content (Browser only).
* `console.log();` - Prints output/messages to the Console/Terminal (Works in both Browser and Node.js).
* **Basic Math:** Supports standard arithmetic operations (`+`, `-`, `*`, `/`).

## 💡 Important Note: Browser vs Node.js
* Browser-specific commands like `alert()` and `document` will throw a `ReferenceError` if executed inside Node.js Terminal, as they require a Web Browser Window to exist.