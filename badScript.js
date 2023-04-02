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
let mode = null
let oldMode = null
displayCurrent.innerHTML = 0

clearButton.addEventListener('click', clearDisplay)
deleteButton.addEventListener('click', deleteNumber)
numberButtons.forEach((button) =>
button.addEventListener('click', () => addValue(button.innerHTML))
)
operatorButtons.forEach((button) =>
button.addEventListener('click', () => operator(button.innerHTML))
)

function addValue(value){
    if(mode != null && displayCurrent.innerHTML == oldInt){
        displayCurrent.innerHTML = 0
    }
    if(value == '.'){
        if(isDecimal) return
        isDecimal = true
    }
    if(displayCurrent.innerHTML == '0'){
        if(value == 0) return
        if(value != '.'){ 
        displayCurrent.innerHTML = value
        currentInt = displayCurrent.innerHTML
        return
        }
    }    
    displayCurrent.innerHTML += value
    currentInt = displayCurrent.innerHTML
}

function clearDisplay(){
    currentInt = 0
    oldInt = 0
    isDecimal = false;
    displayCurrent.innerHTML = 0
    displayLast.innerHTML = ''
    mode = null
    oldMode = null
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
    currentInt = displayCurrent.innerHTML
}

function operator(x){
    mode = x
    if(currentInt == 0) return
    
    if(oldMode != mode && oldMode != null){
        if(oldMode == '+'){
            oldInt = add(oldInt, currentInt)
        }    
    
        if(oldMode == '-'){
            oldInt = subtract(oldInt, currentInt)
        }    

        if(mode == '+'){
            displayLast.innerHTML +=  currentInt + ' + '
        }    
    
        if(mode == '-'){
            displayLast.innerHTML += currentInt + ' - '
        }    
    
        currentInt = 0
        displayCurrent.innerHTML = oldInt
        oldMode = mode

        return
    }
    
    
    if(mode == '+'){
        displayLast.innerHTML +=  currentInt + ' + '
        oldInt = add(oldInt, currentInt)
    }    

    if(mode == '-'){
        displayLast.innerHTML += currentInt + ' - '
        oldInt = subtract(oldInt, currentInt)
    }    

    if(mode == 'x'){
        displayLast.innerHTML += currentInt + ' * '
        oldInt = multiply(oldInt, )
    }

    currentInt = 0
    displayCurrent.innerHTML = oldInt
    oldMode = mode
}


function add(x, y){
    return Number(x) + Number(y);
}

function subtract(x, y){
    return Number(x) - Number(y);
}

function multiply(x, y){
    return Number(x) * Number(y);
}

function divide(x, y){
    return Number(x) / Number(y);
}