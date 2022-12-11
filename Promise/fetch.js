//fetch API -비동기 http 요청이다!
// promise 기반으로 동작한다 => 기존의 XMLHttpRequest 콜백지옥 탈출 ..
//기본 응답 결과는 Response객체 이다 -> json으로 바꾸거나 text로 바꾸는 처리과정이 필요하다.
//기본형식 fetch('url',설정객체).then(콜백함수).catch(콜백함수)
// then은 성공시에 catch는 실패시에 실행된다. 

//fetch를 사용할 땐 두 단계를 거쳐야 한다. 먼저 올바른 url로 요청을 보내야 하고, 
//바로 뒤에오는 응답에 대해 json()을 해줘야 하는 것이다(axios는 json()과정을 자동으로 해주는 셈이다)
//.json -res 객체의 json()이라는 메서드를 사용한다. json()은 Response 스트림을 가져와 스트림이 완료될때까지 읽는다.
// 그리고 다 읽은 body의 텍스트를 Promise형태로 반환한다.

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){ //성공시에
     response.json().then(function(data){//nested promise -then안에서 프로미스를 사용하고 또 then이 들어가는것
        console.log('data', data)
     }) 
}).catch(function(reason){ //실패시에 
    console.log('reason',reason)
})


//위에의 형태를 아래의 형태와 같이 많이 쓴다 

fetch('https://jsonplaceholder.typicode.com/posts') 
.then(function(response){
   return response.json() //promise를 리턴
}).catch((reson)=>{
    console.log("실패원인",reson)
}).then((data)=>{ //promise chaining - 리턴받은 프라미스를 밖에서 then 과 then을 연결 chaining방식을 주로 사용함⭐
    console.log("받아온 데이터",data)
})