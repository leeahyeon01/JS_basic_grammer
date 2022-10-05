// 인수 resolve와 reject는 자바스크립트에서 자체 제공하는 콜백(함수의 인수로 사용되는 함수) 입니다
// 개발자는 resolve와 reject를 신경 쓰지 않고 실행부(excuttor)만 작성하면됨
// resolve(value) -  일이 성공적으로 끝난경우 value와 함께 호출
//reject(error) - 에러 발생 시 에러객체를 나타내는 error와 함께 호출

let promise = new Promise(function (resolev, reject) {
  // 실행함수 작성
  //성공여부에 따라서 resolve(value) OR reject(error)
  setTimeout(() => {
    resoleve("완료");
  }, 2000);
});

//********************💌<프로미스의 후속 처리 메서드 > -then, catch, finally **************
// 프로미스의 처리 결과로 무언가 처리를한다
// ⭐then 메서드⭐는 - Promise가 성공, 실패했을때의 둘 다의 함수를 받는다

//1️⃣ Promise 성공시
let promise_than = new Promise(function (resoleve, reject) {
  setTimeout(() => {
    resoleve("완료"), 1000; //💖 성공시
  });
});

promise_than.then(
  // than 의 첫번째 인수는 성공시 실행 두번째 인수는 실패시 실행
  value => console.log(" 성공이야"),
  error => console.log("에러 발생")
);

//2️⃣ promise 실패시

let promsie_thanFail = new Promise(function (resoleve, reject) {
  setTimeout(() => reject(new Error("error발생 했다********")), 1000); //💖 실패시
});

promsie_thanFail.then(
  value => console.log("result"),
  error => console.log("error")
);

//단축화 함
const rejected = new Promise((_, reject) =>
  reject(new Error("에러발생함"))
).then(
  value => console.log("result"),
  error => console.log("error")
);

//⭐catch - promise가 rejected 상태인경우만 , ERROR인 경우만 !
const reject = new Promise(() => reject(new Error("rejected"))).catch(error =>
  console.log("catch 에러 ")
);
//⭐finally -promise의 성공 또는 실패 상관없이 무조건 한 번 호출 된다, 결과상관없이 공통적으로 수행해야할 시 사용

new Promise((resoleve, reject) => {
  setTimeout(() => resoleve("결과"));
}).finally(() => console.log(" filnally"));
