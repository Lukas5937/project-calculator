let number1 = "";
let number2 = "";
let operator = "";

function add (number1, number2) {
    result = number1 + number2;
    return display.textContent = result;
}

function subtract (number1, number2) {
    result = number1 - number2;
    return display.textContent = result;
}

function multiply (number1, number2) {
    result = number1 * number2;
    return display.textContent = result;
}

function divide (number1, number2) {
    result = number1 / number2;
    return display.textContent = result;
}

function operate () {
    if (operator === "+") 
        {return add(number1, number2)}
    else if (operator === "-") 
        {return subtract(number1, number2)}
    else if (operator === "*") 
        {return multiply(number1, number2)}
    else if (operator === "/") 
        {return divide(number1, number2)};
}

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear");

numbers.forEach(number => {number.addEventListener("click", () => {
    let calculationNumber = display.textContent += number.textContent;
    let numberArray = calculationNumber.split(/[.\*+-/_]/);
    number1 = Number(numberArray[0]); 
    number2 = Number(numberArray[1]);
})});

operators.forEach(sign => {sign.addEventListener("click", () => {
    display.textContent += sign.textContent;
    operator = sign.textContent;
    console.log(operator);
})});

equals.addEventListener("click", operate);

clear.addEventListener("click", () => display.textContent = "");


