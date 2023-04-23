class Calculator {
    constructor(previousNumberElement, currentNumberElement) {
        this.previousNumberElement = previousNumberElement;
        this.currentNumberElement = currentNumberElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev - current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    
    updateDisplay() {
        this.currentNumberElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousNumberElement.innerText = `${this.previousOperand} ${this.operation}`;
        }
        
    }
}

let numbers = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.operator');
let currentNumberElement = document.querySelector('.current-number');
let previousNumberElement = document.querySelector('.previous-number');
let deleteAll = document.querySelector('.delete');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');

const calculator = new Calculator(previousNumberElement, currentNumberElement);

numbers.forEach(num => {
    num.addEventListener("click", () => {
        calculator.appendNumber(num.innerText);
        calculator.updateDisplay();
    });
});

operations.forEach(op => {
    op.addEventListener("click", () => {
        calculator.chooseOperation(op.innerText);
        calculator.updateDisplay();
    });
});

equals.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteAll.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

clear.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});