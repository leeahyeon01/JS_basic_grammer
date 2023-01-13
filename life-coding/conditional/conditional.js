//조건문 

if(true){
    console.log("result: true")
}

if(false){ //💥false이므로 실행안된다
    console.log("result:false")
} 

//💗 if else 문 
if(true){
    console.log("참")
}else{
    console.log("거짓")
} 

//💗 else if문 
if(false){
    console.log("1")
}else if(true){
    console.log("2")
}else if(true){
    console.log("3")
}else{
    console.log("4")
} 


//🐥💥논리연산자💥🐥 
// && (end) - 둘다 참일때  
// || (or) - 둘중 하나라도 참이라면  
// ! (not) - 부정 true -> false , false ->true 
// 0은 false , 0이 아닌 값은 true 

if(0){
    console.log("0은 false")
}

if(1){
    console.log("0이 아닌수는 true")
}

//false로 간주되는 데이터형 => '', undefiend ,null ,NaN
if(''){ //원래는 비어 있으므로 실행안됨 
    console.log('빈 문자열')
} 

//    ↓↓↓↓
if(!''){
    console.log('빈문자열')
}

if(!undefiend){
    console.log("값이 할당되지않은 변수")
}