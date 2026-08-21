# Lesson 5: Variables

## Core Concepts
* **Variable:** A container used to store values so they can be reused later.
* **Reassignment:** Updating a variables value without re-declaring it with `let`.

## 3 Ways to Create Variables
* **`const` (Best Practice):** Creates a variable whose value cannot be changed. Prevents accidental bugs.
* **`let`:** Use when the cariable value needs to be reassigned later.
* **`var`:** Older way to create variables (has scoping issues, avoid in modern JS).

## Variable Naming Rules & Conventions
* **camelCase:** Standard in JavaScript (`cartQuantity`, `totalCost`)
* **PascalCase:** Capitalizes every word (`CartQuantity`), used for classes/constructors.
* **kebab-case:** Used in HTML, CSS, and filenames (`cart-quantity.html`).
* **snake_case:** Used in other languages. Not used in JS. (`cart_quantity`)
* **Restrictions:** Cannot start with a number, cannot  use reserved words (`let`,`class`), no special characters except `$` and `_`.

## Shortcuts for Reassigning Numbers
* `cartQuantity += 1` (adds 1)
* `cartQuantity++` (increments by 1)
* `cartQuantity -= 1` (subtracts 1)
* `cartQuantity--` (decrements by 1)