// ==========================================
// Lesson 2: Numbers & Math Operations
// ==========================================

// 1. Order of Operations (Standard Math Rules - Operator Precedence)
console.log('Order of ops:', 10 + 5 * 2); // 20
console.log('Using brackets:', (10 + 5) * 2); // 30

// 2. Floating Point Inaccuracy Problem
console.log('Inaccurate Float Sum:', 20.95 + 7.99); // 28.939999999999998

// 3. Solution: Calculate in Cents
const item1 = 2095; // $20.95 in cents
const item2 = 799;  // $7.99 in cents
const totalInDollars = (item1 + item2) / 100;
console.log('Accurate Total ($):', totalInDollars); // 28.94

// 4. Rounding Numbers
console.log('Round 2.2:', Math.round(2.2)); // 2
console.log('Round 2.8:', Math.round(2.8)); // 3

// 5. Calculate 10% Estimated Tax accurately
const taxInDollars = Math.round((2095 + 799) * 0.1) / 100;
console.log('Accurate Tax ($):', taxInDollars);