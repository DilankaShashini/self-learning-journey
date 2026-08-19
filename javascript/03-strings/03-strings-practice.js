// =========================================
// Lesson 3: String & Template Literals
// =========================================

// 1. Data Type & Type Coercion
console.log('Type of 2:', typeof 2);                // 'number'
console.log('Type of "hello":', typeof 'hello');    // 'string'
console.log('Coercion:', 'hello' + 3);              // 'hello3'    

// 2. Order of Operations with Strings
console.log('Without brackets:', '$' + 20.95 + 7.99);           // '$20.957.99'
console.log('With brackets (Cents):', '$' + (2095 + 799)/100);  // '$28.94'

// 3. Concatenation vs interpolation
const item = 1 + 1;
const total = (2095 + 799) / 100;

// Old way (Concatenation)
console.log('Items (' + item + '): $' + total);

// Modern way (Template String / Interpolation)
console.log(`Items (${item}): $${total}`);

// 4. Escape Characters & Multi-line Strings
console.log('I\'m learning JavaScript');    // I'm learning JavaScript
console.log('Line 1\nLine 2');              // Line 1
                                            // Line 2
console.log(`Multi-line
    Template String`);                      // Multi-line
                                            // Template String