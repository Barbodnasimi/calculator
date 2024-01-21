const InputCalculator = document.querySelector('#display')
const clearButton = document.querySelector(".clear-button")
const backspaceButton = document.querySelector('.backspace-button')
const divideButton = document.querySelector('#divide-btn')
const multiplicationButton = document.querySelector('#multiplication-btn')
const sevenButton = document.querySelector('#seven-btn')
const eightButton = document.querySelector('#eight-btn')
const nineButton = document.querySelector('#nine-btn')
const zeroButton = document.querySelector('#zero-btn')
const oneButton = document.querySelector('#one-btn')
const twoButton = document.querySelector('#two-btn')
const threeButton = document.querySelector('#three-btn')
const fourButton = document.querySelector('#four-btn')
const fiveButton = document.querySelector('#five-btn')
const sixButton = document.querySelector('#six-btn')
const dotButton = document.querySelector('#dot-btn')
const plusButton = document.querySelector('#plus-btn')
const equalButton = document.querySelector('#equal-btn')
const minusButton = document.querySelector('#minus-btn')



function appendToInput(value) {
    const lastChar = InputCalculator.value.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {
        // Do not append consecutive operators
        return;
    }

    InputCalculator.value += value;
}


function clear() {
    InputCalculator.value = ''
}

function calculate() {
    try {
        InputCalculator.value = parseFloat(eval(InputCalculator.value));
    } catch (error) {
        InputCalculator.value = 'Error';
    }
}

const operators = ['/', '*', '+', '-'];

function handleButtonClick(value) {
    if (operators.includes(value)) {
        // Handle operators
        appendToInput(value);
    } else if (value === '=') {
        calculate();
    } else if (value === 'C') {
        clear();
    } else if (value === '←') {
        backspace();
    } else {
        // Handle digits and dot
        appendToInput(value);
    }
}

function backspace() {
    if (InputCalculator.value.length > 0) {
        InputCalculator.value = InputCalculator.value.slice(0, -1);
    }else{
        return;
    }
}

// Add event listeners for all buttons
document.querySelectorAll('.buttons button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        console.log(btn.value)
        handleButtonClick(btn.value.trim());
    });
});



equalButton.addEventListener('click' , calculate)
clearButton.addEventListener("click" , clear)
minusButton.addEventListener('click' , backspace)
// Add event listener for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;

    switch (key) {
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'c':
            clear();
            break;
        default:
            if (/[\d\.+\-*/]/.test(key)) {
                appendToInput(key);
            }
    }
});
