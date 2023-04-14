function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  // Example usage:
  const arr = [5, 3, 8, 1, 6, 9, 2, 7, 4];
  console.log(selectionSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]