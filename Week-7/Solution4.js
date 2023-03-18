function findProfit(arr) {
  let min = arr[0];
  let minindex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minindex = i;
    }
  }
  let max = min;
  for (let i = minindex; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}

console.log(findProfit([7, 1, 5, 3, 6, 4]));
