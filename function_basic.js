// 함수이름은 함수를 구분하는 식별자 입니다
//매개변수(parameter)란 함수를 호출할 때 인수(argument)로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수입니다.
function addNum(x, y) {
  return x + y;
}
console.log(addNum(3, 4));

function multiNum(x, y) {
  return x * y;
}
//반환문을 통해 호출자는 함수에서 실행된 결과를 받을수 있다!
let num = multiNum(3, 5);

//** 값으로서의 함수 - 함수는 구문일뿐만 아니라 값(value) 이기도 합니다
//**  따라서 변수에 대입될 수 있다.
function sqr(x) {
  return x * x;
}

let sqrNum = sqr; //변수에 함수sqr을 대입
console.log(sqrNum(8));
