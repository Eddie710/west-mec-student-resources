function heapSort(arr) {
    // Build heap (rearrange array)
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
  
    // One by one extract an element from heap
    for (let i = arr.length - 1; i > 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  

let unsortedArray = [5, 3, 8, 4, 2, 1, 9, 7, 6];
let sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
