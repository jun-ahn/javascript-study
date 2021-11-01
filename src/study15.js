//rest: spread와 반대..
const orderDetailInfo = {
  name: "Jun-Ahn",
  address: "Seoul",
  orderNo: 123312321,
  item: "mac pro"
};
//item 삭제
const { item, ...orderInfo } = orderDetailInfo;
console.log(orderInfo);
//orderNo 삭제
const { orderNo, ...userInfo } = orderInfo;
console.log(userInfo);

//배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
console.log(rest);
