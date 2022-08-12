const operators = ['+', '-', '*', '/'];
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const clear = document.querySelector('.clear')
const calcWindow = document.querySelector('.currentOperation');
let currentNum = '';
let currentOp = '';
let prevNum = '';
let total = 0;




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

//need to debug both loops below to make sure calculator display works
nums.forEach(num => num.addEventListener('click', () => {
    currentNum += num.textContent;

    if(currentOp !== ''){
        calcWindow.textContent = prevNum + ' ' + currentOp + ' ' + currentNum;
    }else{
        calcWindow.textContent = currentNum;
    }
    //calcWindow.innerHTML = prevNum + ' ' + currentOp + ' ' + currentNum;
    //console.log(currentNum);
}));

//check to make sure that when equal is pressed operate is working correctly
ops.forEach(op => op.addEventListener('click', () => {
    
    if(currentOp !== ''){
        if(currentNum === '' ){
            alert('Please enter 2 different numbers before trying another operation')
            return;
        }
        else{
            //This will be if there are 2 numbers and and operator 
            //saved and another operator is pressed
            if(currentNum === '0' && currentOp === '/'){
                alert('NO DIVING BY ZERO');
                currentNum = '';
            }else{
                total = operate(parseInt(prevNum, 10),parseInt(currentNum, 10), currentOp);
                prevNum = total;
                if(op.textContent === '='){
                    currentOp = '';
                }else {
                    currentOp = op.textContent;
                }
                currentNum = '';
            }
        }
    }else{
        if(op.textContent === '='){
            return;
        }
        else {
            if(total != 0){
            currentOp = op.textContent;
            }else {
                currentOp = op.textContent;
                prevNum = currentNum;
                currentNum = '';
            }
        }
    }
    //calcWindow.innerHTML = prevNum + ' ' + currentOp + ' ' + currentNum;
    if( currentOp !== ''){
        calcWindow.textContent = prevNum + ' ' + currentOp;
    }else{
        calcWindow.textContent = prevNum;
    }
}));

clear.addEventListener('click', () => {
    currentNum = '';
    currentOp = '';
    prevNum = '';
    total = 0;
    calcWindow.innerHTML = 0;
});

