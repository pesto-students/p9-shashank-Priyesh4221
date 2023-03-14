function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 1");
    }, 2000);
  });
}

async function doTask2() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 2");
    }, 1000);
  });
  const resolveMyPromise = await myPromise;
}

async function doTask3() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done 3");
    }, 3000);
  });
  const resolveMyPromise = await myPromise;
  resolveMyPromise.then((res) => console.log(res));
}

function* doAllTasksUsingGen() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

async function doAllTasks() {
  await doTask3();
}

doAllTasks();
