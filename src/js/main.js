const tipButtons = document.getElementById('tip-buttons')
const customButton = document.getElementById('custom-button')
const billInput = document.getElementById('bill-input')
const peopleInput = document.getElementById('people-input')
const tipText = document.getElementById('tip-text')
const totalText = document.getElementById('total-text')

const tipValues = [5, 10, 15, 25, 50]

let tipValue = 0
let tipAmount = 0
let total = 0

billInput.addEventListener('input', updateTipAndTotal)

peopleInput.addEventListener('input', updateTipAndTotal)

function updateTipAndTotal () {
    tipAmount = billInput.value * (tipValue / 100) / peopleInput.value
    total = billInput.value + tipAmount / peopleInput.value

    tipText.innerText = tipAmount
    totalText.innerText = total
}

const tipButton = (text) => {
    const button = document.createElement('button')
    button.classList = "bg-very_dark_cyan text-white py-2 text-xl text-center rounded-md"
    button.innerText = text

    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        tipValue = parseInt(button.value)
        updateTipAndTotal()
    })

    return button
}



for (let index = 0; index < tipValues.length; index++) {
    const value = tipValues[index]
    
    const button = tipButton(value + '%')
    button.value = value

    tipButtons.insertBefore(button, customButton)
}
