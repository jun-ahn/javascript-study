//배열

const array = [1, 2, 3, 4, "abc", {}]; //숫자, 문자, 객체 다 넣을 수 있음
console.log(array);
console.log(array[4]);

const objects = [{ name: "멍멍이" }, { name: "야옹이" }]; //obejct를 넣을 수 있느데, 여러개 넣을 수 있음

console.log(objects);
console.log(objects[0]);
console.log(objects[1].name);

objects.push({ name: "멍뭉이" }); //array의 함수. item을 추가할 수 있음
console.log(objects[2]);
console.log(objects.length);

//반복문
for (let i = 0; i < objects.length; i++) {
  console.log(objects[i]);
}

//while
let i = 0;
while (i < objects.length) {
  console.log(`while에서 실행:${objects[i].name}`);
  i++;
}

//for of
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  //for of는 배열에 사용하면 편하다
  console.log(number);
}

//Object관련..
const doggy = {
  name: "멍멍이",
  souund: "멍멍",
  age: 2
};

console.log(Object.keys(doggy)); //Object의 key를 받아온다
console.log(Object.values(doggy)); //Object의 값을 가지고 온다
console.log(Object.entries(doggy));

//for in
console.log("for in 테스트");
for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`); //이런식으로 배열의 key와 value를 가지고 올 수 있다.
}
