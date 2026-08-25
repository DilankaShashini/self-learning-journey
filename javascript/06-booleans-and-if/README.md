# Lesson 6: Booleans and If-Statements

## 1. Booleans & Comparison Operators
* **Booleans:** Data type with only two values: `true` or `false` (no quotes).
* **Comparison Operators:**
  * `>` (Greater than), `<` (Less than)
  * `>=` (Greater than or equal), `<=` (Less than or equal)
  * `===` (Strict equality: checks **value + type**, recommended in JS)
  * `!==` (Strict inequality)
  * `==` / `!=` (Loose comparison: performs type coercion, e.g., `5 == '5.00'` is `true`).

## 2. Order of Operations
1. Parantheses `(...)`
2. Arithmetic `* /` then `+ -`
3. Comparison operators (`>`, `<`, `===`, etc.)
4. Logical operators (`&&`, `||`, `!`)

## 3. If-Statements & Scope
* **If-Statement:** Allows conditional execution of code branches.
* **Scope:** Variables defined using `let`/`const` inside a block `{...}`exist **only** within that block.
* **`var` Issue:** `var` ignores block scope and leaks outside `{...}`, causing naming conflicts. Always use `const` or `let`.

## 4. Logical Operators
* **AND (`&&`):** `true` only if both sides are truthy.
* **OR (`||`):** `true` if at least one side is truthy.
* **NOT (`!`):** Inverts boolean value (`!true`:arrow_right: `false`).

## 5. Truthy & Falsy Values
* **Falsy Values (6 total):** `false`, `0`, `''` (empty string), `NaN` (Not a Number), `undefined`, `null`.
* **Truthy Values:** Any value not on the falsy list (e.g., non-zero numbers, non-empty strings).

## 6. Shortcuts for If-Statements (Short-Circuit Evaluation)
* **Ternary Operator (`? :`):** 
  * Shortcut for simple `if-else`statements.
  * Syntax: `condition ? valueIfTrue : valueIfFalse`

* **Guard Operator (`&&`):** 
  * Stops early if left side is **falsy** and returns the falsy value immeditely. Used to run right side only when condition is true.
  * Acts as a guard: run/returns the right-hand code ONLY when the condition is met.

* **Default Operator (`||`):** 
  * Stops evaluation early if left side is **truthy** and returns it immediately. 
  * If the left side is **falsy**, it evaluates and returns the right side (Used to set fallback/default values).
