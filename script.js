function add(a,b){
return a+b
}
function subtract(a,b){
return a-b
}
function multiply(a,b){
return a*b
}
function divide(a,b){
return a/b
}
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}
let num1
let num2
let operator
let display=document.querySelector("h2")
document.querySelectorAll('button').forEach(el=>{
    el.addEventListener('click',()=>display.textContent+=el.textContent)
})
let clear=document.querySelector("#clear")
clear.addEventListener('click', ()=>display.textContent="")
let equals=document.querySelector("#equals")
equals.addEventListener('click', ()=>{
    let arr=display.textContent.split("")
    if(arr.length<3){
        display.textContent="Error"
    }
    else{
        num1=Number(arr[0])
        num2=Number(arr[2])
        operator=arr[1]
        display.textContent=operate(num1, num2, operator)
    }
    })
    