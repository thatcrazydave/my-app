
// Example of Array Methods
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
