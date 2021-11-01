//ES6의 Class
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

//class는 상속을 더 쉽게 한다. (study7과 비교해볼 것)

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const newDog = new Dog("멍멍이", "멍멍");
const newCat = new Cat("야옹이", "야옹");

newDog.say();
newCat.say();
