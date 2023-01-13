//[4.1객체] 

//객체 = {}를 이용해 만듬, 키(key):값(value)쌍으로 구성된 프로퍼티를 여러개 넣을수 있다.
//키엔 문자형, 값엔 모든 자료형이 허용된다.

//객체생성 방법1
let user = {
age: 20,
name: "이아연",
height: "160", 
"likes birds": true 
}

//객체생성 방법2
let user2  = new Object(); 

//객체 접근 방법 

console.log(user.age);
console.log(user["likes birds"]) 
