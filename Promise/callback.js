//μ½λ°±(callback)
//πν¨μμ μΈμλ‘ μ¬μ©λλ ν¨μ !!
//ν¨μκ° μ€νλκ³  κ·Έλ€μμ λ§€κ°λ³μ(νλΌλ―Έν°)λ‘ λ°μ ν¨μ μ€ν

//μμ 0
function frist(parameter){
  console.log("μ²«λ²μ§Έ") 
  parameter()
} 


function second(){
  console.log("λλ²μ§Έ")
}  

frist(second)


//μμ 1
function timeout(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 3000);
}

timeout(() => {
  //μ½λ°±ν¨μ
  console.log("done");
});

// μ½λ°±ν¨μ μμ 2
//filterν¨μ:λ°°μ΄μμλ₯Ό λλ©΄μ μμμ μ‘°κ±΄μ μ°Έκ±°μ§μ νλ³ν΄μ€λ€
// arr.filter(callback_fn((element,[index,index])))  
// callback_fn : true/faluseλ‘ κ²°κ³Ό λμ΄ 

animal = ["rabbit", "tigger", "baer", "giraffe"];
//arr.filter(callback(element[index]
newword = animal.filter(Element => {
  return Element.length > 5;
});

console.log(newword);

// μμ μ½λλ₯Ό λ¨μν
// λ§€κ°λ³μκ° νλμΈ κ²½μ°( ) κ΄νΈ νμμμ,μ€νλ¬Έλ νλμΈ κ²½μ° {} λκ΄νΈ νμμμ
newwords = animal.filter(element => element.length > 5);
console.log(newwords);

//μ½λ°±ν¨μ μμ 3
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
