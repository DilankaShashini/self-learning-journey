# Lesson 11: Arrays and Loops

## 1. What is an Array?
* An **Array** represents an ordered list of values enclosed within square brackets `[]`.
* **Zero-Indexed:** Index starts at `0`. Access elements using `array[index]`.
* **Data Types:** Arrays can hold any data type (numbers, strings, booleans, objects, or nested arrays).
* **Array Identification:**
  * `typeof myArray` returns `'object'`.
  * Use `Array.isArray(myArray)` to check if a value is an array (returns `true`).

## 2. Common Array Properties & Methods
* **`.length`:** Returns total number of elements in the array.
* **`.push(value)`:** Adds a new element to the **end** of the array.
* **`.splice(startIndex, removeCount)`:** Modifies the array by removing elements starting at `startIndex`.
* **`.slice()`:** Creates a **shallow copy** of the array without modifying the original.

## 3. Arrays are References
* Arrays are reference types in JavaScript. When you assign an array variable to another variable (`const array2 = array1`), both variables point to the **same memory location**.
* Modifying `array2` will also mutate `array1`.
* **Prevention:** Use `.slice()` to create a completely independent duplicate: `const array3 = array1.slice();`.

## 4. Destructuring (Objects & Arrays)
Shorthand syntax for unpacking values from arrays or properties from objects into distinct variables:
* **Object Destructuring:**
  ```javascript
  const { name, dueDate } = todoList[i];
  ```
* **Array Destructuring:**
  ```javascript
  const [firstValue, secondValue] = [10, 20, 30];
  ```

## 5. Loops: `while` vs `for`
* **`while` Loop:** Best for **non-standard loops** where iteration count is unpredictable (e.g., repeating until a random number exceeds 0.5).
* **`for` Loop:** Best for **standard loops** with a defined start, end condition, and increment step (`for (let i = 0; i < array.length; i++)`).
* **Infinite Loops:** Occur if a loop lacks an increment step or stopping condition.

## 6. Loop Control Statements: `break` and `continue`
* **`break`:** Exits the loop immediately.
* **`continue`:** Skips the current iteration and jumps directly to the next iteration.
  * *Important in `while` loops:* Always manually increment the loop variable before `continue` to avoid an infinite loop.
* **Early Exit using `return`:** Using `return` inside a function loop instantly terminates both the loop and the entire function execution.

## 7. Accumulator Pattern
A standard pattern used to calculate totals or transform data arrays:
1. Create a result variable (accumulator) outside the loop.
2. Loop through the array and update the accumulator.
* **Example (Sum):** Accumulator initialized to `0` (`total += num`).
* **Example (Transformation):** Accumulator initialized to `[]` (`doubledArray.push(num * 2)`).

## 8. Dynamic HTML Generation & CSS Grid Layout
* **`<div>` Element:** Block container with no default margins or padding (unlike `<p>`).
* **CSS Grid Layout:** Used for two-dimensional layout alignment:
  ```css
  display: grid;
  grid-template-columns: 200px 150px 100px;
  column-gap: 10px;
  row-gap: 10px;
  align-items: center;
  ```
* **Modern Web Development Workflow:**
  1. **Save Data:** Store list in JavaScript Arrays/Objects.
  2. **Generate HTML:** Loop over array data to produce HTML string snippets (`<div>${name}</div>`).
  3. **Render & Interactivity:** Assign string to `.innerHTML` and attach event handlers (`onclick`, `onkeydown`).