function findDiff(arr, diff) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + diff)) {
      return 1;
    }
  }
  return 0;
}

console.log(findDiff([-10, 20], 30));
