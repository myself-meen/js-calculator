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
    const numbers = display.textContent.split(/\D/g);
const op = display.textContent.split(/\d/g).filter(Boolean);
display.textContent=operate(numbers[0],numbers[1],op[0]);
console.log(numbers);
console.log(op);
    })



    
    