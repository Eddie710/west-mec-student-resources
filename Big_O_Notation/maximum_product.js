function computeTripletProduct(arr) {
    let maxProduct = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          let product = arr[i] * arr[j] * arr[k];
          if (product > maxProduct) {
            maxProduct = product;
          }
        }
      }
    }
    return maxProduct;
  }
  
  // Example usage:
  let arr = [1, 2, 3, 4, 5];
  let maxTripletProduct = computeTripletProduct(arr);
  console.log(maxTripletProduct); // Output: 60
  