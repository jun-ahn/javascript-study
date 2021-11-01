//비구조화 할당(구조 분해)
const object = { a: 1, b: 2 };

console.log(object["a"]);
console.log(object["b"]);

//위는 이렇게도 된다.
const { a, b } = object;
console.log(a);
console.log(b);

//구조체는 함수로도 받을 수있다
function print({ a, b }) {
  console.log(a);
  console.log(b);
}
print(object);

//구조체가 완전하지 않을 경우도 있다.
const obj2 = { a: 1 };
//구조체는 함수로도 받을 수있다
function print2({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}
print2(obj2);

//위에서 보여준 예제에서도 비구조화 할당은 적용된다.
const { a1, b1 = 2 } = obj2;
console.log(a1);
console.log(b1);

//이런식으로 응용가능하다 (사실 왜 이렇게 하는지 모르겠다. 아직 의미를 차악하지 못하겠음..)
const animal = {
  name: "멍멍이",
  type: "강아지"
};
const { name: nickename } = animal;
console.log(nickename);
