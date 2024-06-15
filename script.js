let DISPLAY = document.querySelector("#calc-display");


let clearDisplay = function(e) {
    e.stopPropagation();
    DISPLAY.textContent = "";
};

let btn = document.querySelectorAll(".number.button");
btn.forEach(btn => btn.addEventListener("click", () => {
    let currentText = DISPLAY.textContent;
    currentText += btn.id
    DISPLAY.textContent = currentText;
}));

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearDisplay);

let backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    currentText = DISPLAY.textContent;
    arr = currentText
        .split('')
        .slice(0, -1)
        .join('');
    DISPLAY.textContent = arr;
});
