//객체 

//💗객체 생성 
let user ={
  name: "John",
  age: "20",
  height:"160"
} 

console.log(user.name) 

//💗for in 문 
for(key in user){
    console.log(user[key])
}

//💗객체안에는 객체를 담을수도, 함수를 담을수도 있다.
let grades = {
    list: {user1:10, user2:20 ,user3:30}, 
    show: function(){
        for(key in this.list){
            console.log(this.list[key])
        }
    }
} 

grades.show()