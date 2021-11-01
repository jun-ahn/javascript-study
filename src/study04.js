//배열 내장 함수
//forEach
const superHeros = ["아이언맨", "캡틴아메리카", "토르", "닥터스트레인저"];

function print(hero) {
  console.log(hero);
}

superHeros.forEach(print);
//위에 것을 아래와 같이할 수도 있음
superHeros.forEach(function (hero) {
  console.log(hero);
}); //더 심플해졌다
superHeros.forEach((hero) => {
  console.log(hero);
});

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(`일반적인 for 사용: ${squared}`);

//위와 같은 것 forEach 이용
const squared2 = [];
array.forEach((n) => {
  squared2.push(n * n);
});
console.log(`forEach 사용: ${squared2}`);

//map을 사용: 배열 item을 전체적으로 건들고 싶을 때 사용하는 내장함수
const square = (n) => n * n; //square라는 함수를 생성
const squared3 = array.map(square);
console.log(`map 사용: ${squared3}`);

const items = [
  { id: 1, text: "hello" },
  { id: 2, text: "bye" }
];

const texts = items.map((item) => item.text); //items의 내용 중 text만 뽑아서 texts에 저장
console.log(texts);

//indexOf
//위 superHeros 배열중 토르가 어디 있는지 알고싶을 경우
console.log(`토르의 index위치: ${superHeros.indexOf("토르")}`);
//findIndex: indexOf와 비슷한 것
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const index = todos.findIndex((todo) => todo.id === 3);
console.log(index);

//find: findIndex와 비슷한것
const index2 = todos.find((todo) => todo.id === 3);
console.log(index2);
