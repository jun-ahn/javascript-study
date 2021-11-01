//promise: callback함수로 비동기 처리를 하다보면 코드가 복잡해지는 경우가 있기 때문에 만들어진 것
//연속해서 비동기 작업을 수행하는 것을 예로 듬
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 100);
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("작업끝");
        });
      });
    });
  });
});

/**
 * 위와 같이 중첩되는 callback은 비효율적이기 때문에 promise를 사용
 * resolve는 성공시 호출하는 것이고, reject는 실패 시 호출하는 것 이다.
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result"); //무조건 성공
  }, 1000);
});
myPromise.then((result) => {
  console.log(result);
}); //promise가 끝나고 할 작업 성공의 결과(resolve)를 result가 가지고 왔다

//실패시

const errPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error()); //무조건 Error발생
  }, 1000);
});

errPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  }); //Error는 catch로 잡는다
