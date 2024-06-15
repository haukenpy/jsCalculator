let DISPLAY = document.querySelector("#calc-display");


let clearDisplay = function(e) {
    e.stopPropagation();
    DISPLAY.textContent = "";
};

let btn = document.querySelectorAll(".number.button");
btn.forEach(btn => btn.addEventListener("click", () => {
    DISPLAY.textContent = btn.id;
}));

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearDisplay);
