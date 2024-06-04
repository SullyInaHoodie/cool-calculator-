// script.js

// Initialize variables to store the current input, the current operation, and the last input value
let currentInput = '';
let currentOperation = null;
let lastInput = '';

// Function to append a number to the current input
function appendNumber(number) {
    // If an operation is set and the last input is the same as the current, reset current input
    if (currentOperation !== null && lastInput === currentInput) {
        currentInput = '';
    }
    // Append the clicked number to the current input
    currentInput += number;
    // Update the display with the new input
    updateDisplay();
}

// Function to set the operation (+, -, *, /)
function setOperation(operator) {
    // If an operation is already set, calculate the result first
    if (currentOperation !== null) {
        calculateResult();
    }
    // Store the current input as the last input
    lastInput = currentInput;
    // Set the current operation
    currentOperation = operator;
}

// Function to calculate the result based on the current operation
function calculateResult() {
    // If there's no operation set or last input is empty, exit the function
    if (currentOperation === null || lastInput === '') return;
    
    let result;
    // Convert the last input and current input to numbers
    const prevNumber = parseFloat(lastInput);
    const currentNumber = parseFloat(currentInput);
    
    // If either number is not a number, exit the function
    if (isNaN(prevNumber) || isNaN(currentNumber)) return;
    
    // Perform the calculation based on the current operation
    switch (currentOperation) {
        case '+':
            result = prevNumber + currentNumber;
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        default:
            return;
    }
    
    // Update the current input with the result
    currentInput = result.toString();
    // Reset the current operation
    currentOperation = null;
    // Update the display with the result
    updateDisplay();
}

// Function to clear the display and reset the calculator
function clearDisplay() {
    // Reset the input, operation, and last input values
    currentInput = '';
    currentOperation = null;
    lastInput = '';
    // Update the display
    updateDisplay();
}

// Function to update the display with the current input
function updateDisplay() {
    // Update the value of the display element with the current input
    document.getElementById('display').value = currentInput;
}
