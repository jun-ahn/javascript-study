//scope
const value = "hello";
function myFunction() {
  console.log(`myFunction: ${value}`);
}
function myOtherFunction() {
  const value = "bye"; //function안이라서 error가 나지 않는다.
  console.log(`myOtherFunction: ${value}`);
}
myFunction();
myOtherFunction();
console.log(`global scope: ${value}`);
