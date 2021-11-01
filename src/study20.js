//async, await
function sleep(ms) {
  return new Promise((resovle) => setTimeout(resovle, ms));
}

/**
 * async awiat을 사용할 때는 함수의 앞 부분에다가 async라고 붙여주면 된다
 * async await을 사용하는 함수는 Promise를 반환한다.
 */
async function process() {
  console.log("안녕하세요");
  await sleep(1000); //.then을 사용할 필요가 없음
  console.log("반갑습니다");
  return true; //Promise를 반환할 것이다.
}

process().then((value) => {
  //process가 Promise를 만환하기 때문에 .then이 되는 것이다
  console.log(value);
});

//async await에서의 err는 thorw로 발생시키고, 이를 처리하는 것은 catch로 처리한다
async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process2() {
  try {
    await makeError();
  } catch (err) {
    console.error(err);
  }
}

process2();
