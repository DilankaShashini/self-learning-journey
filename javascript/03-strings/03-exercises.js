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

// ----------------------------------------------------
// Challenge Exercises (Amazon Project Setup)
// 2 Basketballs ($20.95 each) + $4.99 shipping
// 2 T-Shirts ($7.99 each) + $4.99 shipping
// ----------------------------------------------------

// Setup variables in cents (To avoid floating point inaccuracies)
const basketballCents = 2095;
const tShirtCents = 799;
const shippingCentsPerGroup = 499;

// 3k. First line: Items count and total items cost using interpolation
const totalItemsCount = 2 + 2;
const totalItemsCostCents = (2 * basketballCents) + (2 * tShirtCents);
console.log(`Items (${totalItemsCount}): $${totalItemsCostCents / 100}`);

// 3l. Second line: Shipping & handling total
const totalShippingCents = shippingCentsPerGroup + shippingCentsPerGroup;
console.log(`Shipping & handling: $${totalShippingCents / 100}`);

// 3m. Third line: Total before tax
const totalBeforeTaxCents = totalItemsCostCents + totalShippingCents;
console.log(`Total before tax: $${totalBeforeTaxCents / 100}`);

// 3n. Fourth line: Estimated tax (10%) using Math.round()
const estimatedTaxCents = Math.round(totalBeforeTaxCents * 0.1);
console.log(`Estimated tax (10%): $${estimatedTaxCents / 100}`);