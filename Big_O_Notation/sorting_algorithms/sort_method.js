// generate a random array of integers
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// print the original array
console.log('Original array: ', randomArray);

// sort the array
randomArray.sort((a, b) => a - b);

// print the sorted array
console.log('Sorted array: ', randomArray);
