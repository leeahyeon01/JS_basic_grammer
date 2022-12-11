//⭐기본 자바스크립트 callback
// function increase(num,callback){
//     setTimeout(()=>{
//        const result = num +1; 
//     //    console.log(result)
//        if(callback){
//         callback(result);
//        }
//     },3000)
// } 


// increase(0,result =>{ //콜백함수안에 또 함수 그안에 또함수 
//     console.log(result) 
//     increase(result,result=>{//콜백함수안에 또 함수 그안에 또함수 
//         console.log(result)
//         increase(result,result =>{//콜백함수안에 또 함수 그안에 또함수 
//             console.log(result) 
//             increase(result,result => {// 콜백지옥🤬
//                 console.log(result)
//             })
//         })
//     })
// })

//⭐promise 형태로 바꿈 
//promise 비동기통신을 위해 자바스크립트 안에 내장되어있는 object이다

// function increase(number){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             const result = number +10;
//             if(result >50){
//                 const e = new Error('숫자가 너무 큽니다'); 
//                 return reject
//             } 
//             resolve(result)
//         },2000)
//     }) 
//     return promise
// } 


// increase(0)
// .then(number => {
//     console.log(number); 
//     return increase(number)
// }).then(number =>{
//     console.log(number); 
//     return increase(number)
// }).then(number=>{
//     console.log(number);
//     return increase(number)
// }).then(number =>{
//     console.log(number);
//     return increase(number)
// }).then(number =>{
//     console.log(number);
//     return increase(number)
// }).then(number =>{
//     console.log(number);
//     return increase(number)
// })
// .then(number =>{
//     console.log(number);
//     return increase(number)
// }).catch(e=>{
//     console.log(e)
// })





//⭐ asny/awiat를 통해서 해보자 
//기본형태 
//async function 함수명(){
//        await 비동기_처리_메서드명();        
// }



function increase(number){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const result = number +10;
            if(result >50){
                const e = new Error('숫자가 너무 큽니다'); 
                return reject
            } 
            resolve(result)
        },2000)
    }) 
    return promise
} 


async function runTasks(){
    try{
        let result = await increase(0)
        console.log(result)

        result = await increase(result)
        console.log(result)

        result = await increase(result)
        console.log(result)

        result = await increase(result)
        console.log(result)

        result = await increase(result)
        console.log(result)

        result = await increase(result)
        console.log(result)
    }catch(e){
        console.log(e) 
        console.log("50ㅇㅣ 넘었당게")
    }
}

runTasks()