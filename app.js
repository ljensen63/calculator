const operators = ['+', '-', '*', '/'];
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const clear = document.querySelector('.clear')
let currentNum = '';
let currentOp = '';
let prevNum = '';
let total = 0;

nums.forEach(num => num.addEventListener('click', () => {
    currentNum += num.textContent;
    console.log(currentNum);
}));

ops.forEach(op => op.addEventListener('click', () => {
    if(currentOp !== ''){
        if(prevNum === '' || currentNum === '' ){
            alert('Please enter 2 different numbers before trying another operation')
            return;
        }else{
            total = operate(prevNum, currentNum, currentOp);
            prevNum = total;
            total = 0;
            currentOp = op.textContent;
        }
    }else{
        currentOp = op.textContent;
        prevNum = currentNum;
        currentNum = '';
    }
}));

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    if(operators.includes(operator)){
        if(operator === '+'){
            return add(num1,num2);
        }
        else if(operator === '-'){
            return subtract(num1,num2);
        }
        else if(operator === '*'){
            return multiply(num1, num2);
        }
        else if(operator === '/'){
            return divide(num1, num2);
        }
    }
    return 'Please use a math operation';
}


