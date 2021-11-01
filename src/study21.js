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
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process(); //이렇게 하면 promise가 순차적으로 실행된다. 그럼, 한꺼번에 실행하고 싶을때는??
