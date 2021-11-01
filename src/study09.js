//삼항연산자

const array = [];
let text = "";
if (array.length === 0) {
  console.log("배열이 비어있습니다.");
} else {
  console.log("배열이 비어있지 않습니다.");
}
//contion ? true : false 에서 condition이 true이기 때무넹 true의 값이 contiond에 들어감
let condition =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
console.log(condition);

const condition1 = false;
const condition2 = false;

//삼항 연산자의 중첩 사용
const value = condition1 ? "true" : condition2 ? "condition2 true" : false;
console.log(value);
