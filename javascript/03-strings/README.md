# Lesson 3: Strings & template Literals

## key concepts
* **Strings:** Represents text inside quotes.
* **`typeof` Operator:** Checks the data type of a value (e.g., `typeof 2` ➔ `'number'`, `typeof 'hi'` ➔ `'string'`).
* **Type coercion:** Automatic type conversion by JS (e.g., `'hello' + 3` ➔ `'hello3'`) 

## 3 Ways to Create Strings
1. **Single Quotes (`'...'`):** Standard/default way.
2. **Double Quotes (`"..."`):** Alternative option.
3. **Template Strings (Backticks `` `...` ``):** Modern way with advanced features.

## Special Features of Template Strings
* **interpolation (`${}`):** Directly insert variables/expressions into strings without `+` operators.
  * *Example:* `` `Items (${1+1}): $${(2095+799)/100}` `` ➔ `'items (2): $28.94'`
* **Multi-line Strings:** Keeps line breaks without using `\n`.

## Escape Characters
* `\'` - Single quote inside single-quoted string.
* `\"` - Double quote inside double-quoted string.
* `\n` - Create a new line inside a string.