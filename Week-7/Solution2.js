function findSpiral(arr) {
  var result = [];
  var goAround = function (matrix) {
    if (matrix.length == 0) {
      return;
    }
    result = result.concat(matrix.shift());
    for (var i = 1; i < matrix.length - 1; i++) {
      result.push(matrix[i].pop());
    }
    result = result.concat(matrix.pop().reverse());
    for (var j = matrix.length - 2; j > 0; j--) {
      result.push(matrix[j].shift());
    }
    return goAround(matrix);
  };

  goAround(arr);

  return result;
}

// Need help on this
