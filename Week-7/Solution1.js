function findMax(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const remainingElements = arr.length - i - 1;
    for (let j = 1; j <= remainingElements; j++) {
      let sum = arr[i];
      for (let k = i + 1; k <= arr.length - j; k++) {
        sum = sum + arr[k];
      }
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

console.log(findMax([1, 2, 3, 4, -10]));
