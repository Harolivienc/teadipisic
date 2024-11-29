// Example array with duplicate numbers
let numbers = [1, 2, 3, 4, 2, 5, 3, 6, 1];

// Using Set to remove duplicates (preserving order)
let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
