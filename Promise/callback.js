//콜백(callback)
//🎀함수의 인수로 사용되는 함수 !!
//함수가 실행되고 그다음에 매개변수(파라미터)로 받은 함수 실행

//예제0
function frist(parameter){
  console.log("첫번째") 
  parameter()
} 


function second(){
  console.log("두번째")
}  

frist(second)


//예제1
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
//filter함수:배열요소를 돌면서 요소의 조건의 참거짓을 판별해준다
// arr.filter(callback_fn((element,[index,index])))  
// callback_fn : true/faluse로 결과 나옴 

animal = ["rabbit", "tigger", "baer", "giraffe"];
//arr.filter(callback(element[index]
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
