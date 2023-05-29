let input = document.querySelector("#display");
let buttonsNumber = document.querySelectorAll(".number");
let result = document.querySelector(".equal");
let buttonOperators = document.querySelectorAll(".operator");
let clean = document.querySelector(".clean");
let operand1 = 0;
let operator = "";


buttonsNumber.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (input.value === operator) {
            input.value = "";
        }

        switch (e.target.dataset.value) {
            default:
                if (input.value === "0") {
                    input.value = e.target.dataset.value;
                }
                else {
                    input.value += e.target.dataset.value;
                }
        };

    })
});

clean.addEventListener("click", (e) => {
    input.value = "";
    result = "";
})

buttonOperators.forEach(btnOperator => {
    btnOperator.addEventListener("click", (e) => {
        operand1 = +input.value;
        operator = e.target.dataset.value;
        input.value = operator;
        
    })
})

result.addEventListener("click", () => {
    const operand2 = +input.value;
    if (operator === "/" && operand2 === 0) {
        result = "Error: Division by zero";
    } else {

        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                result = operand1 / operand2;
                break;
            case "%":
                result = (operand1 / operand2) * 100;
                break;
            default:
                result = "error"
                break;
        }
    }
    input.value = result;
})

