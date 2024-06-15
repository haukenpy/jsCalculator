let DISPLAY = document.querySelector("#calc-display");

const calculatorvalues = {
    numOne: "NULL",
    numTwo: "NULL",
    operator: "",
}

const clearDisplay = function() {
    DISPLAY.textContent = "";
};

const resetValues = function() {
    calculatorvalues.numOne = "NULL";
    calculatorvalues.numTwo = "NULL";
    calculatorvalues.operator = "";
}

const calculate = function(e) {
    e.stopPropagation;
    calculatorvalues.operator = e.target.id;

    if (calculatorvalues.numTwo == "NULL") {
        if (calculatorvalues.numOne == "NULL") {
            calculatorvalues.numOne = Number(DISPLAY.textContent);
            clearDisplay();
        } 
        else {calculatorvalues.numTwo = Number(DISPLAY.textContent);
            clearDisplay();
        }
    }
    console.log(`${calculatorvalues.numOne} ${calculatorvalues.operator} ${calculatorvalues.numTwo}`);
    
    
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