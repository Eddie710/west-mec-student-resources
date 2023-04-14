// time complexity O(n log n)
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Generate a random array of 5 integers
const arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

// Print the original array
console.log('Original array:', arr);

// Sort the array using quicksort
const sortedArr = quicksort(arr);

// Print the sorted array
console.log('Sorted array:', sortedArr);
