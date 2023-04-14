// time complexity of O(n^2)
// Generate a random array of 5 integers
const arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

// Print the original array
console.log('Original array:', arr);

// Bubble sort algorithm
for (let i = 0; i < arr.length - 1; i++) {
  let isSorted = true;
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      isSorted = false;
    }
  }
  // Print the array after each iteration
  console.log(`Array after iteration ${i + 1}: ${arr}`);
  // If the array is already sorted, break out of the loop early
  if (isSorted) break;
}

// Print the sorted array
console.log('Sorted array:', arr);

/* example output
Original array: [83, 24, 97, 57, 73]
Array after iteration 1: [24, 83, 57, 73, 97]
Array after iteration 2: [24, 57, 73, 83, 97]
Array after iteration 3: [24, 57, 73, 83, 97]
Sorted array: [24, 57, 73, 83, 97]
*/
