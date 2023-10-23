// like python formating
let x = 70;
let y = 10;
let vat = 0.25;
let z = `The actual price of this product was ${x}. But I got it on ${(y * 2 * (3 + vat)).toFixed(2)}`;
console.log(z)