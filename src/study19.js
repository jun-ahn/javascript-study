//promise2
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        //5가되면 무조건 에러
        const error = new Error();
        error.name = "ValueIsFiveError"; //5가되면 무조건 에러
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

//중첩되는 callback은 아래와 같이 해결할 수 있음
increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((err) => {
    console.error(err);
  });
//위를 아래와 같이 간단하게 수정할 수도 있음
increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch((err) => {
    console.error(err);
  });
