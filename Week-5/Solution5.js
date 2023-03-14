function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 1");
    }, 2000);
  });
  //   const resolveMyPromise = await myPromise;
  // Should reach here after being fulfilled or being rejected
}

async function doTask2() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 2");
    }, 1000);
  });
  const resolveMyPromise = await myPromise;
  console.log(resolveMyPromise);
}

async function doTask3() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 3");
    }, 3000);
  });
  const resolveMyPromise = await myPromise;
  resolveMyPromise.then((res) => console.log(res));
  console.log(resolveMyPromise);
}

function* doAllTasksUsingGen() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

async function doAllTasks() {
  //   return await doTask1();

  //   val.then((msg) => {
  //     console.log(msg);
  //   });
  //   await doTask2();
  await doTask3();
}

// const mynewGen = doAllTasksUsingGen();

console.log(doAllTasks());
