let one=document.getElementById("one");
let two=document.getElementById("two")
let add=document.getElementById("add");
let oper=document.getElementById("oper");
let num=document.getElementsByClassName("num")

let display=document.getElementById("display")

num.addEventListener("click",()=>{
      console.log(num.innerText)
})
function sum (num,num){
console.log(num+num);
}
sum(one,two)