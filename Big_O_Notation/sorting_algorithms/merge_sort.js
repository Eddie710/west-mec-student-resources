// time complexity of O n log n
// faster than bubble sort
// usually slower than quick sort
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  }
  
  function mergesort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergesort(left), mergesort(right));
  }
  
  // Generate a random array of 5 integers
  const arr = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
  
  // Print the original array
  console.log("Original array:", arr);
  
  // Sort the array using mergesort
  const sortedArr = mergesort(arr);
  
  // Print the sorted array
  console.log("Sorted array:", sortedArr);