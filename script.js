const add = (a, b) => {
    console.log(a + b);
    return a + b;
}

const subtract = (a, b) => {
    console.log(a - b);
    return a - b;
}

const multiply = (a, b) => {
    console.log(a * b);
    return a * b;
}

const divide = (a, b) => {
    console.log(a / b);
    return a / b;
}

const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
        default:
            console.log("error operator");
            break;
    }
}

let currentNumber;
let previousNumber;

let num = document.querySelectorAll('.num');
let operator = document.querySelectorAll('.operator');
let currentNumberElement = document.querySelector('.current-number');
let previousNumberElement = document.querySelector('.previous-number');
let deleteBtn = document.querySelector('.delete');
let equals = document.querySelector('.equals');


num.forEach(number => {
    number.addEventListener('click', () => {
        appendNumber(number.innerText)
        updateDisplay();
    });
});


operator.forEach(op => {
    op.addEventListener('click', () => {
        chooseOperation(op.innerText);
        updateDisplay();
    });
});

equals.addEventListener('click', () => {
    
    updateDisplay();
});

deleteBtn.addEventListener('click', () => clear());

const clear = () => {
    currentNumberElement.innerText = "";
    previousNumberElement.innerText = "";
}

const appendNumber = (number) => {
    currentNumberElement.innerText += number;
    currentNumber = currentNumberElement.innerText;
}

const chooseOperation = (operation) => {
    previousNumber = currentNumber;
    currentNumber = "";
    console.log(previousNumber, currentNumber);
}

const updateDisplay = () => { 
}