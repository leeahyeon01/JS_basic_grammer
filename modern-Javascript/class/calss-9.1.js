// 9.1-클래스와 기본문법 

// 클래스란? 
// 클래스는 객체지향프로그래밍에서 특정객체를 생성하기 위해 변수와 메소드를 
// 정의하는 일종의 틀로 , 객체를 정의하기 위한 상태(멤버변수)와 메서드(함수)로 구성된다!
//자바스크립트에서 클래스는 함수의 한 종류입니다.

//💕기본문법
class User{
//✨생성자메서드 constructor()는 new에 의해 자동으로 호출되므로,
//특별한 절차없이 객체를 초기화 할 수 있다.


    constructor(name){
        this.name = name;
    } 

    sayHi(){
        console.log(this.name)
    }
}

//new User("john")를 호출하면 다음과 같은일이 일어납니다.
//1.user1 이라는 새로운 객체가 생성됩니다.
//2.넘겨받은 인수와함께 constructor가 자동으로 실행됩니다
let user1 = new User("john"); 
user1.sayHi(); 

//
