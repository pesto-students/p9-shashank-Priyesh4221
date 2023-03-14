// async function doTask1() {
//   setTimeout(async () => {
//     console.log("Resolving task 2");
//     return;
//   }, 1000);
// }

function doTask1() {
  return new Promise((resolve, reject) => {
    resolve("Done");
  });
}

async function doTask2() {
  setTimeout(async () => {
    console.log("Resolving task 2");
    return;
  }, 1000);
}

function* doTask3() {
  console.log("Paused at 5");
  yield 5;
  setTimeout(() => {
    console.log("Paused at 6");
  }, 1000);
}

const gen = doTask3();
doTask1().then((resp) => {
  console.log(resp);
});
gen.next();
gen.next();
// await doTask2();
