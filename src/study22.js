//Primise all
function sleep(ms) {
  return new Promise((resovle) => setTimeout(resovle, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]); //배열로 등록한다
  console.log(results);
}

process(); //한꺼번에 실행된다

//한꺼번에 실행된 Promise 결과를 각각 변수로 꺼내고 싶을경우
async function process2() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]); //배열로 등록한다
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}

process2(); //한꺼번에 실행된다
