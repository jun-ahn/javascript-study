//배열 비구조화 할당
const array = [1, 2];
const one = array[0];
const two = array[1];
console.log(one);
console.log(two);

//이걸 이렇게 꺼낼수도 있다.
const [first, second] = array;
console.log(first);
console.log(second);

//이렇게 비구조화 할당을 할 수 있다
const array2 = [1];
const [secondFrist, secondSecond = 2] = array2;
console.log(secondFrist);
console.log(secondSecond);

//구조가 복잡한 구조체의 값 추출
const deepObject = {
  state: {
    information: {
      name: "sjah ",
      languages: ["english", "koean", "japanese"]
    },
    value: 5
  }
};
//이걸 꺼낼때 쓰는 방법 1: 비구조화 할당을 두번 하는 것
// const {name, languages} = deepObject.state.information;
// const {value} = deepObject.state;
// console.log(name);
//객체에 담을수도 있다
// const extracted = { name, languages, value } //객체의 key와 값이 같을경우, key선언을 생략해도 된다
// console.log(extracted);

//위의 방법이 아니라 아래와 같이 한방에 해결할수도 있다. (코드가 약간 지저분해짐)
const {
  state: {
    information: { name, languages },
    value
  }
} = deepObject;
const extracted = { name, languages, first, second, value }; //객체의 key와 값이 같을경우, key선언을 생략해도 된다
console.log(extracted);
