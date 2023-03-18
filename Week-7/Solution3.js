function merge(left, right) {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
}

function sort(arr) {
  const middle = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, middle);
  const right = arr;
  return merge(sort(left), sort(right));
}

console.log(sort([39, 28, 44, 4, 10, 83, 11]));
