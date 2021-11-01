//비동기처리
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);
}
console.log("작업시작!"); //콘솔창을 보면 작업시작이 실행되고, works()가 실행되고, 기다리지 않고, 다음작업을 찍는다.
work();
console.log("다음작업");

/**
 * callback함수 사용한 아래 로직의 흐름
 * 1. '작업시작' 호출
 * 2. 함수 호출 wirh callback
 * 3. '다음작업' 호출 (함수는 연산중)
 * 4. 함수 연산이 끝나고, callback으로 연산결과를 return -> ms
 * 5. 함수 호출 결과 실행
 */

function work2(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 0);
}

console.log("with callback: 작업시작");
work2((ms) => {
  console.log("with callback: 작업이 끝났어요");
  console.log("with callback: " + ms + "ms 걸렸어요");
});
console.log("with callback: 다음작업");
