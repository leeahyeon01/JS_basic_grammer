//콜백(callback)
//🎀함수의 인수로 사용되는 함수 !!
function timeout(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 3000);
}

timeout(() => {
  //콜백함수
  console.log("done");
});

// 콜백함수 예제2

animal = ["rabbit", "tigger", "baer", "giraffe"];

newword = animal.filter(Element => {
  return Element.length > 5;
});

console.log(newword);

// 위에 코드를 단순화
// 매개변수가 하나인 경우( ) 괄호 필요없음,실행문도 하나인 경우 {} 대괄호 필요없음
newwords = animal.filter(element => element.length > 5);
console.log(newwords);

//콜백함수 예제3
function myfilter(orgin, callback) {
  let result = [];
  for (let i = 0; i < origin.length; i++) {
    let current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
}
word = myfilter(word, element => element.length > 6);
console.log(word);
