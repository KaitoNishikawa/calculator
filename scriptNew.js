const numberButtons = document.querySelectorAll('.number-buttons')
const operatorButtons = document.querySelectorAll('.operator-buttons')
const displayCurrent = document.getElementById('display-current')
const displayLast = document.getElementById('display-last')
const clearButton = document.getElementById('clear-button')
const deleteButton = document.getElementById('delete-button')
const addButton = document.getElementById('add-button')
const equalsButton = document.getElementById('equals-button')

let currentInt = 0
let oldInt = 0
let isDecimal = false
let operation = null
let shouldReset = false
displayCurrent.innerHTML = 0

clearButton.addEventListener('click', clearDisplay)
deleteButton.addEventListener('click', deleteNumber)
equalsButton.addEventListener('click', equals)
numberButtons.forEach((button) =>
button.addEventListener('click', () => addValue(button.innerHTML))
)
operatorButtons.forEach((button) =>
button.addEventListener('click', () => setOperation(button.innerHTML))
)

function addValue(value){ 
    if(shouldReset) displayCurrent.innerHTML = 0

    if(value == '.'){
        if(isDecimal) return
        isDecimal = true
    }
    if(displayCurrent.innerHTML == '0'){
        if(value != '.'){ 
        displayCurrent.innerHTML = value
        currentInt = displayCurrent.innerHTML
        shouldReset = false
        return
        }
    }   
    displayCurrent.innerHTML += value
    currentInt = Number(displayCurrent.innerHTML)
    shouldReset = false
}

function clearDisplay(){
    currentInt = 0
    oldInt = 0
    isDecimal = false;
    displayCurrent.innerHTML = 0
    displayLast.innerHTML = ''
    operation = null
}

function deleteNumber(){
    if(displayCurrent.innerHTML.length <= 1){ 
        currentInt = 0
        displayCurrent.innerHTML = currentInt        
        return
    }

    if(displayCurrent.innerHTML[displayCurrent.innerHTML.length - 1] == '.'){
        isDecimal = false;
        
    }
    displayCurrent.innerHTML = displayCurrent.innerHTML.slice(0, -1)
    currentInt = Number(displayCurrent.innerHTML)
}

function setOperation(x){
    isDecimal = false
    if(shouldReset){
        displayLast.innerHTML = currentInt + ' ' + x 
        operation = x
        return
    }
    if(operation != null) equals()
    operation = x     
    oldInt = currentInt
    displayLast.innerHTML = currentInt + ' ' + x 
    shouldReset = true
}

function calculate(mode, a, b){
    if(mode == '+'){
        return add(a, b)
    }

    if(mode == '-'){
        return subtract(a, b)
    }

    if(mode == 'x'){
        return multiply(a, b)
    }

    if(mode == '/'){
        return divide(a, b)
    }
}

function equals(){
    if(operation == null) return
    displayLast.innerHTML += ' ' + currentInt + ' ='
    displayCurrent.innerHTML = calculate(operation, oldInt, currentInt)
    currentInt = calculate(operation, oldInt, currentInt) 
    operation = null
}

function add(x, y){
    return Number(x) + Number(y)
}

function subtract(x, y){
    return Number(x) - Number(y)
}

function multiply(x, y){
    return Number(x) * Number(y)
}

function divide(x, y){
    if(y == 0) return 'undefined'
    return Number(x) / Number(y);
}