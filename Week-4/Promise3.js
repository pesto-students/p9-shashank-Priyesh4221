myNumbers = {};
let n = 1;
let oldnumber = 0;
let midnumber = 0;
myNumbers[Symbol.iterator] = function () {
  return {
    next() {
      midnumber = n;
      n = n + oldnumber;
      oldnumber = midnumber;
      return { value: n, done: n > 100 };
    },
  };
};

for (const num of myNumbers) {
  console.log(num);
}
