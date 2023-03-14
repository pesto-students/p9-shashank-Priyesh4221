function getNumber(time) {
  const number = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 5 === 0) {
        reject(number);
      } else {
        resolve(number);
      }
    }, time);
  });
}

getNumber(1000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("Error occuered ", err);
  });
