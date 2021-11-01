//promise race -> 가장먼저 끝난 것이 return됨
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
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process(); //가장 먼저 끝난 것이 실행된다

/**
 * all과 다른점
 * all은 모든 것 중 하나라도 err가 나면 err로 간주한다.
 * race는 가장 빨리 끝난것이 err가 아닐 경우에는 err로 간주하지 않는다.
 */
