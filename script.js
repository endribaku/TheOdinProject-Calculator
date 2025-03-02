// operation functions
function addition(a, b) {return (a + b).toFixed(2);}
function subtraction(a, b) {return (a - b).toFixed(2);}
function multiplication(a, b) {return (a * b).toFixed(2);}
function division(a, b) {return (a / b).toFixed(2);}
function equals(button) {
    
}


// query selector
const result = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const clearAllButton = document.querySelector(".clearAll");
const signButton = document.querySelector(".changeSign");
const decimalButton = document.querySelector(".dot");

// variables
let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = '';

const numberButtonArray = Array.from(numberButtons);
const operatorButtonArray = Array.from(operatorButtons);


// event listeners
for (const button of numberButtonArray) {
    button.classList.add("endri");
    button.addEventListener('click', () => {
        if(result.textContent == '0') {
            result.textContent = button.textContent;
        } else {
            result.textContent += button.textContent;
        }
    });
}

for (const button of operatorButtonArray) {
    button.addEventListener('click', () => {  
        if(result.textContent.includes(".")) {
            firstNumber = parseFloat(result.textContent);
        } else 
        {
            firstNumber = parseInt(result.textContent);
        }
        selectedOperator = button.textContent;
        result.textContent = '0';
        
    })
}

equalsButton.addEventListener('click', () => {
    if(selectedOperator != '') {
        if(result.textContent.includes(".")) {
            secondNumber = parseFloat(result.textContent);

        } else 
        {
            secondNumber = parseInt(result.textContent);
        }

        switch(selectedOperator) {
            case '+':
                result.textContent = addition(firstNumber, secondNumber);
                break;
            case '-':
                result.textContent = subtraction(firstNumber, secondNumber);
                break;
            case '*':
                result.textContent = multiplication(firstNumber, secondNumber);
                break;
            case '/':
                if(secondNumber == 0) {
                    result.textContent = 'Error';
                } else {
                    result.textContent = division(firstNumber, secondNumber);
                }
                break;
        }
    }
});

clearAllButton.addEventListener('click', () => {
    result.textContent = '0';
    firstNumber = 0;
    secondNumber = 0;
    selectedOperator = '';
});

signButton.addEventListener('click', () => {
    if(result.textContent != '0') {
        if(parseInt(result.textContent) > 0) {
            result.textContent = '-' + result.textContent;
        } else if(parseInt(result.textContent) < 0) {
            result.textContent = result.textContent.slice(1);
        }

    }
});

decimalButton.addEventListener('click', () => {
    if(!result.textContent.includes('.'))
    {
        result.textContent += '.';
    }
});



