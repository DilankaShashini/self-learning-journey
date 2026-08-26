# Lesson 7: Functions

## 1. What is a Function?
* A **Function** lets us reuse code and eliminates code duplication.
* **Declaration:** Creates a function but does not execute it.
* **Call / ExecuteL** Runs the code inside the function using its name followed by brackets `()`.

## 2. Naming Rules & Best Practices
* **Naming Restrictions:** 
  * Cannot use reserved words (e.g.,`function`).
  * Cannot start with a number.
  * Cannot use special characters except `$` and `_`.
* **Best Practices:** Use **camelCase** and use an **action/verb** for the function name (e.g., `calculateTax()`, `pickComputerMove()`).

## 3. Parameters & Arguments
* **Parameter:** Acts as a variable to put values **into** a function (`function calculatetax(cost, taxPercent){}`).
* **Argument:** The actual value passed into the function when calling it (`calculateTax(2000, 0.2)`).
* **Default Parameters:** Allows setting fallback values if an argument is missing:
```javascript
function calculateTax(cost, taxPercent = 0.1){
  console.log(cost * taxPercent);
}
calculateTax(5000); // Uses default taxpercent 0.1 => 500
```
## 4. Return Statement
* **Return:** Gets a value **out** of a function.
* Stops the execution of the function immediately; any code after `return` will not run.
* Returning `retuen;` without a value returns `undefined`.

## 5. Global Scope vs Return Value (Best Practice)
* **Scope Rule:** variables inside {...} are scoped locally to that function.
* **Best Practice:** Prefer returning values using `return` rather than relying on global variables to prevent naming conflicts and maintain scope isolation.

## 6. Tracing Code
* Following and reading code line-by-line to understand execution order is called **tracing the code**. 