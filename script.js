const DEFAULT_VALUE = 0
const ORDERED_VALUES = [7,8,9,4,5,6,1,2,3,0]

let currentValue = DEFAULT_VALUE;

let numberButtons = document.querySelectorAll('.number-buttons')

for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        addValue(ORDERED_VALUES[i])
    });
}

function addValue(value){
    console.log(value)
}