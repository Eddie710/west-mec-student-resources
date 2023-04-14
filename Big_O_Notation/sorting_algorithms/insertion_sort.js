// Example array
const array = [5, 2, 4, 6, 1, 3];

// Insertion sort function
function insertionSort(array) {
  const length = array.length;
  
  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    
    array[j + 1] = key;
  }
  
  return array;
}

// Sort the example array using insertion sort
console.log(insertionSort(array));
// The output of the insertionSort function on this array is [1, 2, 3, 4, 5, 6]