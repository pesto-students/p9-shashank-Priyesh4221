const defer = (res, time) =>
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve(res);
    }, time);
  });

const returnMyPromise = async () => await defer("done 1", 1000);
const returnMyPromise2 = async () => await defer("done 2", 2000);
const returnMyPromise3 = async () => await defer("done 3", 3000);

// Promise.all([returnMyPromise(), returnMyPromise2(), returnMyPromise3()]).then(
//   (allres) => {
//     console.log(allres);
//   }
// );

async function doTasks() {
  const resolveMyPromise = await returnMyPromise();
  console.log(resolveMyPromise);
  returnMyPromise2();
  returnMyPromise3();
}

console.log(doTasks());
