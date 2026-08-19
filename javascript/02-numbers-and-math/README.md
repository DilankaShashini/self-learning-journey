# Lesson 2: Numbers and Math

## Key Concepts
* **Number Types:**
  * **Integers:** Whole numbers (e.g., `10`, `5`).
  * **Floats (Floating-point numbers):** Decimal numbers (e.g., `20.95`).

## ⚠️ The Floating Point Issue in Computers
* Computers store numbers in Binary (`0`s and `1`s). Because of this mismatch with human decimal system, calculating floats in JS can sometimes cause slight inaccuracies.
  * *Example:* `20.95 + 7.99` results in `28.939999999999998`.

### 💡 Best Practice for Money Calculations:
1. Do calculations in **Cents** (multiply by 100 to get integers).
2. Divide by 100 at the very end to convert back to Dollars.
   * *Solution:* `(2095 + 799) / 100` = `28.94`.

## Built-in Math Functions
* `Math.round(number)` - Rounds a number to the nearest integer.
  * `Math.round(2.2)` ➔ `2`
  * `Math.round(2.8)` ➔ `3`
* **Rounding Tax Calculation Formula:**
  * `Math.round((costInCents * taxPercent)) / 100`