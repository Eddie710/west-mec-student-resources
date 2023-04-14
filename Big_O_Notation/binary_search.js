function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const x = 13;

const index = binarySearch(arr, x);
console.log(index); // Output: 6
