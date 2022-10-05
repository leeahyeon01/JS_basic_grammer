// async함수 -function 앞에 위치하며 async를 붙이면 해당 함수는 항상 프라미스를 반환한다. 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스로 값을 감싸 이해된 프라미스가 반환되도록 합니다.function

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
      console.log("hello");
    }, time);
  });
}

//timer 함수를 실행한뒤 성공하면 출력할 consol값 입력
timer(1000).then(function (time) {
  console.log("time" + time + "초 걸림
  
  
  ");
  timer();
});
