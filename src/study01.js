//비교 연산자
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals);

const c = "1";
const equals2 = a === b;
console.log(equals2); // = 3개는 data type도 비교한다.

//Java script 에서 문자를 합치는 법
function hello(name) {
  return `Hello ${name}!`;
}
const result = hello("ASJ");
console.log(result);

//화살표 함수
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 2);
console.log(sum);

//Object
const dog = {
  name: "DANJI",
  age: 12,
  favorite: {
    food: "meat",
    sleep: "my bed"
  },
  "key wirh space": "use single quotation"
};

console.log(dog.name);
console.log(dog.favorite.food);
console.log(dog);

function print(dog_name) {
  const text = `${dog.name}가 가장 좋아하는 음식은 ${dog.favorite.food}입니다`;
  console.log(text);
}

print(dog);

//ES6 비구조화 할당 = 객체 구조 분해
//사용법1
function print2(dog_name) {
  const { name, age } = dog; //위의 dog dbject을 참조하는 것
  const text = `${name}의 나이는 ${age}살 입니다`;
  console.log(text);
}
print2(dog);
//사용법2
function print3({ name, age }) {
  //object를 인자로 받는다는 것. object의 내용을 참조한다.
  //비구조화 할당으로 object안에 있는 object는 꺼내올 수 없다
  const text = `${name}의 나이는 ${age}살 입니다2`;
  console.log(text);
}
print3(dog); //위의 object를 실어서 보냄
//사용법3
const { name } = dog; //{}가 들어가면 object의 내용을 참조한다고 보면 된다.
console.log(name);
