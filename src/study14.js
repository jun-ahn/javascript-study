//speread
const userInfo = {
  name: "Jun-Ahn",
  address: "Seoul"
};
const orderInfo = {
  name: "Jun-Ahn",
  address: "Seoul",
  orderNo: 123312321
};
const orderDetailInfo = {
  name: "Jun-Ahn",
  address: "Seoul",
  orderNo: 123312321,
  item: "mac pro"
};
//위에 것을 다 합치고 싶을경우..

const userInfo2 = {
  name: "Jun-Ahn",
  address: "Seoul"
};
const orderInfo2 = {
  ...userInfo2,
  orderNo: 123312321
};
const orderDetailInfo2 = {
  orderInfo2,
  item: "mac pro"
};
//이미 가지고 있는 값을 바꿀 경우 덮어쓰기 한다
const modifiedOrderDetailInfo2 = {
  ...orderDetailInfo2,
  item: "MTB Bike"
};
console.log(modifiedOrderDetailInfo2);

//배열도 된다
const animals = ["개", "고양이", "참새"];
const animals2 = [...animals, "비둘기"];

console.log(animals2);
