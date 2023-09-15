let number1 = "";
let number2 = "";
let operator = "";

function add () {
    result = Number(number1 + number2);
    number1 = result;
    number2 = "";
    return display.textContent = result;
}

function subtract () {
    result = Number(number1 - number2);
    return display.textContent = result;
}

function multiply () {
    result = Number(number1 * number2);
    return display.textContent = result;
}

function divide () {
    result = Number(number1 / number2);
    return display.textContent = result;
}

function operate () {
    console.log(number2)
    if (operator === "+") {
        add(number1, number2);
        console.log(number1);
        console.log(number2);
    }
    else if (operator === "-") {
        subtract(number1, number2);
        number1 = subtract(number1, number2);
        number2 = "";
    }
    else if (operator === "*") {
        multiply(number1, number2);
        number1 = multiply(number1, number2);
        number2 = "";
    }
    else if (operator === "/") {
        divide(number1, number2);
        number1 = divide(number1, number2);
        number2 = "";
    };
}

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear");

numbers.forEach(number => {number.addEventListener("click", () => {
    let buttonValue = number.getAttribute("id");
    // let numberArray = calculationNumber.split(/[.\*+-/_]/);
    if (operator === "")  {
        let calculationNumber = display.textContent += buttonValue;
        number1 = Number(calculationNumber);
    } 
    else {
        if (number2 === "") {
            display.textContent = "";
            let calculationNumber = display.textContent += buttonValue;
            number2 = Number(calculationNumber);
            console.log(number2);
        }
        else {
            let calculationNumber = display.textContent += buttonValue;
            number2 = Number(calculationNumber);
            console.log(number2);
        };
    };
})});

operators.forEach(sign => {sign.addEventListener("click", () => {
    if (operator === "") {
        operator = sign.textContent
    }
    else {
        console.log(operator)
        operate();
        operator = sign.textContent;
        console.log(number1);
    }
})});

equals.addEventListener("click", operate);

clear.addEventListener("click", () => {
    display.textContent = "";
    operator = "";});


