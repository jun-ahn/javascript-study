//객체 생성자
function Animal(type, name, sound) {
  //JS에서 생성자를 만들때는 주로 대문자를 사용한다??
  this.type = type;
  this.name = name;
  this.sound = sound;
}

//Prototype
Animal.prototype.say = function () {
  console.log(this.sound);
};

//모든 Animal에게 공통된 내용을 넣는 것 (재사용)
const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");
console.log(dog.sound);
console.log(cat.sound);
