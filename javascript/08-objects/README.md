# Lesson 8: Objects

## 1. What is an object?
* An **Object** groups multiple related values together.
* Consists of **Property-Value Pairs** separated by colons `:` and commas `,`.
* **Syntax:** Enclosed within curly braces `{}`.
```javascript
const product = {
  name: 'socks',
  price: 1090
};
```
* **Purpose:** Organizes code and allows multiple values to be manipulated together.

## 2. Accessing & Modifying Properties
* **Dot Notation (Default):** `object.property` (e.g., `product.name`).
* **Bracket Notation:**  `object['property']`.
  * Required when property names contain invalid characters like hyphens(`delivery-time`) or when using variables/expressions (`product[variable]`).
* **Adding Properties:** `product.newProperty = true;`
* **Deleting Properties:** `delete product.newProperty;`
* **Non-existent Properties:** Accessing a non-existent property returns `undefined`.

## 3. Nested Objects & Methods
* **Nested Object:** An object placed inside another object (e.g., `product.rating.count`).
* **Method:** A function stored inside an object.
  * Examples: `console.log()` (`console` is the object. `log` is the method), `Math.random()`.

## 4. Built-in Objects: JSON & localStorage
### A.JSON (JavaScript Object Notation)
* A universal data format supportaed by almost all programming languages.
* **Differences from JS Objects:** Requires double quotes `""` for properties/string; does not support functions.
* `JSON.stringify(object)`: converts a JS Object to a JSON string.
* `JSON.parse(jsonString)`: Converts a JSON string back into a JS Object.

### B. localStorage
* Saves data permanently in the browser even after refreshing or closing the papge.
* Only stores string.
* `localStorage.setItem('key', 'value')`: Saves data.
* `localStorage.getItem('key')`: Retrievs data (return `null` if the key doesn't exist).
*  `localStorage.removeItem('key')`: Delete stored data.

## 5. Advanced Concepts
* **null vs undefined:**
  * `undefined`: Value is missing or not assigned yet.
  * `null`: Intentionally left empty by the programmer.
* **Auto-Boxing:**
  * JavaScript automatically wraps primitive values (strings, numbers, booleans) in special objects so you can call properties and methods on them (e.g., `'hello'.length`, `'hello'.toUpperCase()`).
  * Does not work on `null` or `undefined` (causes TypeError).
* **Objects are References (Copy by Reference):**
  * Object variables do not hold the actual values; they hold a reference (memory address) pointing to the object.
  * Assigning an object to another variable (`const obj2 = obj1`) copies the reference, not the object itself.
  * Mutating properties affects all variables pointing to that same reference.
  * `const` prevents reassigning the variable reference, but allows modifying the properties inside the object.
  * Comparing objects (`obj1 === obj2`) compares memory references, not internal values.

## 6. ES6 Object Shortcuts
* ES6 was a major update to JavaScript that introduced modern syntax improvements, including Object Shortcuts (like Shorthand Property Names and Method Properties), `const/let`, arrow functions, promises, classes, and template literals.
* **Destructuring:** Extracting properties directly into variables.
```javascript
// const message = object.message;
// const price = object.price;
const { message, price } = object;
```
* **Shorthand Property:** Omit value when property name matches variable name.
```javascript
const message = 'Hello';
const object = { message }; // Equivalent to { message: message }
```
* **Shorthand Method:** Omit `function` keyword when defining methods inside objects.
```javascript
const object = {
  // method: function function1(){
  //   console.log('Method');
  // }
  method(){
    console.log('Clean Method');
  }
}