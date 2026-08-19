// ==========================================
// Lesson 2 Exercises Solutions (2a - 2i)
// ==========================================

// 2a. Restaurant Order: 1 soup ($10), 3 burgers ($8 each), 1 ice cream ($5)
console.log('2a Order Cost ($):', 10 + (3 * 8) + 5); // 39

// 2b. Split bill equally among 3 people
console.log('2b Per Person ($):', (10 + (3 * 8) + 5) / 3); // 13

// 2c. Total Cost: 1 toaster ($18.50) + 2 shirts ($7.50 each) in cents
console.log('2c Total ($):', (1850 + (2 * 750)) / 100); // 33.5

// 2d. 10% Tax on 2c total
console.log('2d 10% Tax ($):', ((1850 + (2 * 750)) * 0.1) / 100); // 3.35

// 2e. 20% Tax on 2c total
console.log('2e 20% Tax ($):', ((1850 + (2 * 750)) * 0.2) / 100); // 6.7

// ------------------------------------------
// Challenge Exercises (Amazon Project Setup)
// Basket Items: 1 Basketball ($20.95), 1 T-Shirt ($7.99), 1 Toaster ($18.99)
// Shipping: $4.99
// ------------------------------------------

// 2f. Items Cost before shipping and tax (in cents)
const basketballCents = 2095;
const tShirtCents = 799;
const toasterCents = 1899;
const itemsTotalCents = basketballCents + tShirtCents + toasterCents;

console.log('2f Products Cost ($):', itemsTotalCents / 100); // 47.93

// 2g. Total before tax (Items + $4.99 Shipping)
const shippingCents = 499;
const totalBeforeTaxCents = itemsTotalCents + shippingCents;

console.log('2g Total before tax ($):', totalBeforeTaxCents / 100); // 52.92

// 2h. Calculate 10% Tax exactly using Math.round()
const exactTaxCents = Math.round(totalBeforeTaxCents * 0.1);

console.log('2h Estimated Tax 10% ($):', exactTaxCents / 100); // 5.29

// 2i. Order Total at the bottom (Total before tax + Exact Tax)
const orderTotalCents = totalBeforeTaxCents + exactTaxCents;

console.log('2i Order Total ($):', orderTotalCents / 100); // 58.21