let number1 = "";
let number2 = "";
let operator = "";
let decimalOn = false;
let calculationNumber = ""

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
    if (operator === "+") {
        add(number1, number2);
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
let decimal = document.querySelector(".decimal");

decimal.addEventListener("click", () => decimalOn = true);

function checkDecimal(buttonValue) {
    if (decimalOn && !(calculationNumber.includes("."))) {
        calculationNumber = display.textContent += `.${buttonValue}`;
        decimalOn = false;
    }
    else {calculationNumber = display.textContent += buttonValue;}
};

function checkOperator(buttonValue) {
    if (operator === "")  {
        checkDecimal(buttonValue);
        number1 = Number(calculationNumber);
    } 
    else {
        if (number2 === "") {
            display.textContent = "";
            calculationNumber = "";
            checkDecimal(buttonValue);
        }
        else {
            checkDecimal(buttonValue);
        };
    number2 = Number(calculationNumber);
    };
};

numbers.forEach(number => {number.addEventListener("click", () => {
    let buttonValue = number.getAttribute("id");
    checkOperator(buttonValue);
})});

operators.forEach(sign => {sign.addEventListener("click", () => {
    if (operator === "") {
        operator = sign.textContent
    }
    else {
        operate();
        operator = sign.textContent;
    }
})});

equals.addEventListener("click", operate);

clear.addEventListener("click", () => {
    display.textContent = "";
    operator = "";});


document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (["1","2","3","4","5","6","7","8","9"].includes(e.key)) {
        let buttonValue = e.key;
        checkOperator(buttonValue);
    }
    else if (["+", "-", "*", "/"].includes(e.key)) {
        operator = e.key;
    }
    else if (e.key === "=") {
        operate();
    }
    else if (e.key ===".") {
        decimalOn = true;
    }
});


