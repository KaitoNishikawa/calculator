const DEFAULT_VALUE = 0
const ORDERED_VALUES = [7,8,9,4,5,6,1,2,3,'.',0]

const numberButtons = document.querySelectorAll('.number-buttons')
const displayCurrent = document.getElementById('display-current')
const displayLast = document.getElementById('display-last')
const clearButton = document.getElementById('clear-button')
const deleteButton = document.getElementById('delete-button')
const addButton = document.getElementById('add-button')

let currentValue = ''
let oldValue = ''
displayCurrent.innerHTML = DEFAULT_VALUE

clearButton.addEventListener('click', clearDisplay)
deleteButton.addEventListener('click', deleteNumber)
addButton.addEventListener('click', addition)
for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        addValue(ORDERED_VALUES[i])
    });
}

function addValue(value){
    if(value == '.' && displayCurrent.innerHTML == 0){
        currentValue = '0'
    }
    if(value == 0 && displayCurrent.innerHTML == 0){
        return
    }     
    currentValue = currentValue + value.toString()
    displayCurrent.innerHTML = currentValue
}

function clearDisplay(){
    currentValue = ''
    oldValue = ''
    displayCurrent.innerHTML = DEFAULT_VALUE
}

function deleteNumber(){
    if(currentValue.length <= 1){ 
        displayCurrent.innerHTML = DEFAULT_VALUE
        currentValue = ''
        return
    }
    currentValue = currentValue.slice(0, -1)
    displayCurrent.innerHTML = currentValue
}

function addition(){
    oldValue = currentValue
    currentValue = ''
    displayLast.innerHTML = oldValue + " +"
    displayCurrent.innerHTML = DEFAULT_VALUE
}