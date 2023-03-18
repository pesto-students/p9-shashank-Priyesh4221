function closestSum(arr, target) {
  let closestsum = null;
  for (let i = 0; i < arr.length - 3; i++) {
    let sum = arr[i] + arr[i + 1] + arr[i + 2];
    if (closestsum === null) {
      closestsum = sum;
    } else if (Math.abs(sum - target) < Math.abs(closestsum)) {
      closestsum = sum;
    }
  }
  return closestsum;
}

console.log(closestSum([-1, 2, 1, -4], 1));

// Not very clear about this
