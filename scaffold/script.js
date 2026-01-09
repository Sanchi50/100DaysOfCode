// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    // TODO: Implement the clearDisplay function
    // This function should reset the currentInput and update the display
    currentInput = '';
    display.value = '0';
}

function deleteLast() {
    // TODO: Implement the deleteLast function
    // This function should remove the last character from currentInput and update the display
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput || '0';
}

function appendNumber(number) {
    // TODO: Implement the appendNumber function
    // This function should add the given number to currentInput and update the display
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    // TODO: Implement the appendOperator function
    // This function should add the given operator to currentInput and update the display
    let lastChar = currentInput.slice(-1);
    if ("+-*/%".includes(lastChar)) return;

    currentInput += operator;
    display.value = currentInput;
}

function calculateResult() {
    // TODO: Implement the calculateResult function
    // This function should evaluate the currentInput, display the result, and handle errors
    try {
        let expression = currentInput;
        expression = expression.replace(/(\d+)%/g, "($1/100)");
        let result = eval(expression);
        currentInput = result.toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
        currentInput = '';
    }
}
