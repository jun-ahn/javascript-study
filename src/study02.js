//Object안에 함수 넣기, Getter, Setter

//Object안에 함수 넣기
const dog = {
  name: "단지",
  sound: "멍멍!",
  say: function () {
    console.log(this.sound);
  }
};
dog.say();
//이렇게해도 작동함
const dog2 = {
  name: "단지",
  sound: "멍멍멍!",
  say() {
    console.log(this.sound);
  }
};
dog2.say();
//화살표는 안됨, 화살표는 this를 못 찾아온다
// const dog3 = {
//   name : '단지',
//   sound : '멍멍멍!',
//   say: ()=> {
//     console.log(this.sound);
//   }
// };
// dog3.say();

const cat = {
  name: "야옹이",
  sound: "야옹~"
};

cat.say = dog.say;
cat.say(); //멍멍이 아니라 this이니까 야옹이다

// const catSay = cat.say();
// catSay(); //cat.sqy()에 아무것도 없으니까 에러난다. 근데 위에서 이미 cat say에 dog say를 할당했는데, 안되네??

//Getter, Setter
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum함수가 실행됩니다.");
    return this.a + this.b;
  }
};

console.log(numbers.sum); //numbers.sum()이라고 쓰지 않아도, 함수가 실행된다. Return으로 던져준다

//Setter
const dog4 = {
  _name: "setter_멍멍이", //_를 쓰는것은 아래 setter에 똑같은 이름을 쓰기 위한 것.. 괄례인가?
  get name() {
    console.log("_name을 조회합니다");
    return this._name;
  },
  set name(value) {
    console.log(`이름이 바뀝니다 -> ${value}`);
    this._name = value;
  }
};

console.log(dog4.name);
dog4.name = "뭉뭉이";
console.log(dog4.name);

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {},
  get b() {},
  set a(value) {
    this._a = value;
    this.calculate(); //sum값을 update해줌
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers2.sum);
numbers2.a = 5; //setter가 실행되면서 calculte를 실행해서 sum값이 바뀐다.
numbers2.b = 7;
console.log(numbers2.sum);
