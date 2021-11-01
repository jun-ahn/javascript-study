//단축평가논리계산법

const dog = {
  name: "멍멍이"
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

console.log(getName(dog));
console.log(getName());

//위와 같은 결과
function getName2(animal) {
  //&&앞 내용이 true라면 결과는 뒤에오는 것이 된다.
  return animal && animal.name;
}

console.log(getName(dog));
console.log(getName());

//다시한번 정리
console.log(true && "&&: hello");
console.log(false && "&&: hello"); //앞이 false이면 &&뒤 문장은 타지도 않는다.

// ||는 &&와 반대임
console.log(true || "||: hello"); //앞이 true이면 뒤는 타지도 않는다
console.log(false || "||: hello"); //앞이 false 이면 뒤 문장이 탄다
