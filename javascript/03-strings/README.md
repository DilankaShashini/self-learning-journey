# Lesson 3: Strings & Template Literals

## Key Concepts
- **Strings:** Represents text enclosed within quotes.
- **`typeof` Operator:** Checks the data type of a value (e.g., `typeof 2` ➔ `'number'`, `typeof 'hi'` ➔ `'string'`).
- **Type Coercion:** Automatic type conversion performed by JavaScript (e.g., `'hello' + 3` ➔ `'hello3'`).

## 3 Ways to Create Strings
1. **Single Quotes (`'...'`):** Standard and widely used.
2. **Double Quotes (`"..."`):** Alternative option.
3. **Template Strings (Backticks `` `...` ``):** Modern approach with advanced built-in features.

## Special Features of Template Strings
- **Interpolation (`${}`):** Directly inserts variables or expressions into strings without concatenating with `+` operators.
  * *Example:* `` `Items (${1 + 1}): $${(2095 + 799) / 100}` `` ➔ `'Items (2): $28.94'`
- **Multi-line Strings:** Preserves actual line breaks in code without needing `\n`.

## Escape Characters
- `\'` : Single quote inside a single-quoted string.
- `\"` : Double quote inside a double-quoted string.
- `\n` : Creates a new line inside a string.

## Advanced String Methods & Functions (Learned from freeCodeCamp)

### 1. Character & Index Searching
* **`charCodeAt(index)`:** Returns an integer representing the Unicode of the character at the specified index.
  * *Example:* `'ABC'.charCodeAt(0)` ➔ `65`
* **`String.fromCharCode(num)`:** Static method that returns a string created from the specified sequence of UTF-16 code units.
  * *Example:* `String.fromCharCode(65)` ➔ `'A'`
* **`indexOf(substring)`:** Returns the index of the **first occurrence** of a specified substring. Returns `-1` if not found.
  * *Example:* `'Hello world'.indexOf('o')` ➔ `4`
* **`includes(substring)`:** Checks if a string contains a specified substring, returning `true` or `false`.
  * *Example:* `'JavaScript'.includes('Script')` ➔ `true`

### 2. Slicing & Extracting
* **`slice(startIndex, endIndex)`:** Extracts a section of a string and returns it as a new string (does not include the `endIndex`).
  * *Example:* `'Apple, Banana, Kiwi'.slice(7, 13)` ➔ `'Banana'`

### 3. Replacing Content
* **`replace(currentSubstring, newSubstring)`:** Replaces the **first match** of a substring with a new substring.
  * *Example:* `'Hello World'.replace('World', 'JS')` ➔ `'Hello JS'`
* **`replaceAll(currentSubstring, newSubstring)`:** Replaces **all occurrences** of a matching substring.
  * *Example:* `'cat dog cat'.replaceAll('cat', 'bird')` ➔ `'bird dog bird'`

### 4. Repeating & Trimming
* **`repeat(count)`:** Returns a new string containing the specified number of copies of the original string.
  * *Example:* `'abc'.repeat(3)` ➔ `'abcabcabc'`
* **`trim()`:** Removes whitespace from **both ends** of a string.
  * *Example:* `'   hello   '.trim()` ➔ `'hello'`
* **`trimStart()`:** Removes whitespace from the **beginning** (left side) of a string.
* **`trimEnd()`:** Removes whitespace from the **end** (right side) of a string.

### 5. Browser Input Interaction
* **`prompt()` / `window.prompt()`:** Opens a dialog box with an optional message prompting the user to input text. Returns the input as a string (or `null` if canceled).
  * *Syntax:* `window.prompt("message for user", "default input value");`
  * *Example:* `let name = prompt("Please enter your name:", "Guest");`