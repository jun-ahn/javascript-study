//filter에 대해서

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

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);

//배열 내장 함수 spice
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1); //index부터 해서 1개 지우겠다라는 뜻.
console.log(numbers);
