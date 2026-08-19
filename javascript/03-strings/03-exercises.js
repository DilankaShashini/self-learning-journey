// ==========================================
// Lesson 3 Exercises Solutions (3a - 3j)
// ==========================================

// 3a. String text
// 'My name is: '

// 3b. Name string
// 'Dilanka Shashini'

// 3c. Concatenation of 3a and 3b
console.log('3c:', 'My name is: ' + 'Dilanka Shashini');

// 3d. Restaurant Order (Concatenation): Coffee ($5) + Bagel ($3)
console.log('3d Total:', 'Total cost: $' + (5 + 3));

// 3e. Template String & Interpolation for 3d
console.log('3e Total:', `Total cost: $${5 + 3}`);

// 3f. Alert for 3e
// alert(`Total cost: $${5 + 3}`);

// 3g. Coffee ($5.99) + Bagel ($2.95) using Cents + Concatenation
const totalCents3g = 599 + 295;
console.log('3g Accurate Total:', 'Total cost: $' + (totalCents3g / 100));

// 3h. Template String & Interpolation for 3g
console.log('3h Accurate Total:', `Total cost: $${(599 + 295) / 100}`);

// 3i. Alert for 3h
// alert(`Total cost: $${(599 + 295) / 100}`);

// 3j. Multi-line String with alert
// alert(`Total cost: $${(599 + 295) / 100}
// Thank you, come again!`);