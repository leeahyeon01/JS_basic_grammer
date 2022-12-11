console.log('작업시작')  

function increase(num,callback){
    setTimeout(()=>{
       const result = num +1; 
    //    console.log(result)
       if(callback){
        callback(result);
       }
    },3000)
} 



increase(0,result =>{ //콜백함수안에 또 함수 그안에 또함수 
    console.log(result) 
    increase(result,result=>{//콜백함수안에 또 함수 그안에 또함수 
        console.log(result)
        increase(result,result =>{//콜백함수안에 또 함수 그안에 또함수 
            console.log(result) 
            increase(result,result => {// 콜백지옥🤬
                console.log(result)
            })
        })
    })
})

