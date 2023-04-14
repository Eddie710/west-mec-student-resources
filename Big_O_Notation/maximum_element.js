const arr = [3, 7, 2, 9, 1, 5];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("The maximum element in the array is: ", max);
// maximum element would be 9