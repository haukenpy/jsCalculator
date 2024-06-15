let DISPLAY = document.querySelector("#calc-current");
let HISTORY = document.querySelector("#calc-history");

const calculator = {
    numbers: [],
    operator: "",
    sum: 0,
    add() {this.sum = this.numbers[0] + this.numbers[1]},
    subtract() {this.sum = this.numbers[0] - this.numbers[1]},
    multiply() {this.sum = this.numbers[0] * this.numbers[1]},
    divide() {this.sum = this.numbers[0] % this.numbers[1]},
};

const clearDisplay = function() {
    DISPLAY.textContent = "";
};

const resetValues = function() {
    calculator.numbers = [];
    calculator.operator = "";
    calculator.sum = "";
    HISTORY.textContent = "";
}

const calculate = function(e) {
    e.stopPropagation;

    let currentText = DISPLAY.textContent;
    let myArr = currentText.split(' ');

    if (myArr.length == 3) {
        
        if (!calculator.numbers[0]) {
            calculator.numbers[0] = Number(myArr[0]);
        }
        calculator.operator = myArr[1];
        calculator.numbers[1] = Number(myArr[2]);

        switch (calculator.operator) {
            case "+":
                calculator.add();
                break;
            case "-":
                calculator.subtract();
                break;
            case "*":
                calculator.multiply();
                break;
            case "%":
                calculator.divide();
                break;
            } 

            HISTORY.textContent = `${calculator.numbers[0]} ${calculator.operator} ${calculator.numbers[1]} = ${calculator.sum}`;
            calculator.numbers = [calculator.sum, ];
            clearDisplay();
        }
    else {
    DISPLAY.textContent = currentText + " " + e.target.id + " ";
    }  
}

const numBtns = document.querySelectorAll(".number.button");
numBtns.forEach(btn => btn.addEventListener("click", () => {
    let currentText = DISPLAY.textContent;
    currentText += btn.id
    DISPLAY.textContent = currentText;
}));

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clearDisplay();
    resetValues();
});

let backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    currentText = DISPLAY.textContent;
    arr = currentText
        .split('')
        .slice(0, -1)
        .join('');
    DISPLAY.textContent = arr;
});

const functionBtns = document.querySelectorAll(".function.button");
functionBtns.forEach(btn => btn.addEventListener("click", calculate));