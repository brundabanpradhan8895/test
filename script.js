console.log("Hello");


// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to get only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Use the map method to double each even number
const doubledNumbers = evenNumbers.map(number => number * 2);

// Print the original array, even numbers, and doubled numbers
console.log("Original Numbers: " + numbers.join(", "));
console.log("Even Numbers: " + evenNumbers.join(", "));
console.log("Doubled Even Numbers: " + doubledNumbers.join(", "));
