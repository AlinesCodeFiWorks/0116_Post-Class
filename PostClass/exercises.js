// Exercise 1
let num1 = 1;
let num2 = 2;

let total = num1 + num2;
console.log(total);

let difference = num2 - num1;
console.log(difference);

// Exercise 2
let userName = prompt("Please enter your name: ");
let favColor = prompt("What's your favorite color? ");

alert(`Welcome, ${userName}! Your favorite color is ${favColor}!`);

// Exercise 3
const itemPrice = 5.99;
const tax = 0.07;
let totalPrice = itemPrice + itemPrice * tax;

alert(`Your total is $${totalPrice.toFixed(2)}.`);

// That was satistying lol

// Exercise 4
let firstName = "Aline";
let lastName = "Taylor";
let fullName = firstName + " " + lastName;

alert(`Welcome back, ${fullName}!`);

// Exercise 5
let inventory = 100;
let sale = 15;
let restock = 20;
inventory -= sale;
inventory += restock;
// Math operation shortcuts work with variables too!
console.log(inventory);

// Exercise 6
let ogPrice = 120;
let taxRate = 0.1;
let discountRate = 0.15;

let taxPrice = ogPrice + ogPrice * taxRate;

let finalPrice = taxPrice + taxPrice * discountRate;

alert(
  `After taxes: $${taxPrice.toFixed(
    2
  )}\nDiscounted price: $${finalPrice.toFixed(2)}`
);
