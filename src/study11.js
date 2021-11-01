//함수의 기본 파라미터
function calcuateCircleArea(r = 4) {
  //함수선언 시 기본 파라미터값을 선언할 수 있다.
  return Math.PI * r * r;
}
const area = calcuateCircleArea();
console.log(area);
const area2 = calcuateCircleArea(5); //값을 넣으면 기본 파라미터 값은 생략된다.
console.log(area2);
//화살표로도 할 수 있다
const calcuateCircleArea2 = (r = 1) => {
  return Math.PI * r * r;
};
console.log(calcuateCircleArea2());

//함수의 조건문
function isAnimal(text) {
  const array = ["개", "고양이", "사자"];
  return array.includes(text);
}
console.log(isAnimal("개"));
console.log(isAnimal("노트북"));
//이렇게도 할 수 있음
const isAnimal2 = (text) => {
  return ["개", "고양이", "사자"].includes(text);
};
console.log(isAnimal2("개"));
console.log(isAnimal2("노트북"));

//다른 조건문 응용
function getSound(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구";
  return "....?";
}

console.log(getSound("개"));
console.log(getSound("고양이"));
console.log(getSound("참새"));
console.log(getSound("비둘기"));
console.log(getSound("사람"));

//위 함수를 이렇게 심플하게 작성 가능
function getSound2(animal2) {
  const sounds = {
    //switch case같은 성격의 구문은 객체를 활용하면 편함
    개: "멍멍",
    고양이: "야옹",
    참새: "짹짹",
    비둘기: "구구"
  };
  return sounds[animal2] || "....?";
}

console.log(getSound2("개"));
console.log(getSound2("고양이"));
console.log(getSound2("참새"));
console.log(getSound2("비둘기"));
console.log(getSound2("사람"));

//함수 조건문은 객체에 단일 값이 아니라 함수를 넣어도 잘 작동함
function getSound3(animal) {
  const makeSound = {
    개: () => {
      //화살표도 된다
      console.log("getSound3: 멍멍");
    },
    고양이() {
      //화살표 없이도 된다
      console.log("getSound3: 야옹");
    },
    비둘기() {
      console.log("getSound3: 구구");
    }
  };
  const sound = makeSound[animal];
  sound(); //중요한것은 객체에 함수를 저장했을경우 ()를 해야 호출을 한다는 점이다.
}
getSound3("개");
