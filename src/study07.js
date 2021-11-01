//객체 생성자 상속하기
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

function Dog(name, sound) {
  Animal.call(this, "개", name, sound); //Animal스타일의 형식을 그대로 불러온다.
}

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype; //Animal이 가지고 있느 Prototype도 가지고온다.
Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
