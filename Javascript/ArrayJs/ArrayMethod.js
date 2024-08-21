let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(numbers.length);
//push => adds elements to the end of the array and returns the new length of array.
console.log(numbers.push(11, 12, 13, 14)); //new length
console.log(numbers.length);
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

console.log(numbers.unshift(-3, -2, -1)); //returns updated length adds to start

console.log(numbers.shift()); //removes first element.

console.log(numbers);
