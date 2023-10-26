function add (x, y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function mutiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

let userNum1;
let userNum2;
let uesrOperator;

function operate(num1, num2, operator){
    switch (operator){
        case '/':
            return divide(num1, num2);
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return  mutiply(num1, num2);
        default:
            "ERROR";
    }
}

function displayNum(num){
    const display = document.querySelector('.display');
    display.textContent = num;
}

function buttons(){
    const buttons = document.getElementsByTagName('button');
    buttons.forEach(button => {
        button.addEventListener('click', displayNum(button.textContent));
    });
}

function initializer(){
    buttons();
}