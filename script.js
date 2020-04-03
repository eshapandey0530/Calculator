let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

const calcScreen = document.querySelector(".calc-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}


const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currNumber;
    };
    
    calcOperator = operator;
    currNumber = '';
}

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value);
        updateScreen(currNumber);
    }); 
});

const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number
    } else {
        currNumber += number 
    }
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currNumber);
});

const calculate = () => {
    let result ='';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currNumber);
            break
        default:
            break
    }
    currNumber = result;
    calcOperator = '';

}

const ac = document.querySelector(".ac");

const clear = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '';
}

ac.addEventListener('click', () => {
    clear();
    updateScreen(currNumber);
});


function back(){
	var value = document.getElementsByClassName("calc-screen").value;
    document.getElementsByClassName("calc-screen").value = value.substr(0, value.prevNumber - 1);
}


const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    if(currNumber.includes(".")) {
        return
    } 
    currNumber += dot
}

const percent = document.querySelector(".percentage");

ac.addEventListener('click', () => {
    currNumber = '0';
    updateScreen(currNumber);
});
