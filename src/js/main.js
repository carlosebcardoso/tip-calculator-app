const tipButtons = document.getElementById('tip-buttons')
const customButton = document.getElementById('custom-button')
const billInput = document.getElementById('bill-input')
const peopleInput = document.getElementById('people-input')
const tipText = document.getElementById('tip-text')
const totalText = document.getElementById('total-text')

const tipValues = [5, 10, 15, 25, 50]

let tipValue = 0

let buttons = []

billInput.addEventListener('input', updateTipAndTotal)

peopleInput.addEventListener('input', updateTipAndTotal)

function updateTipAndTotal () {
    if (!billInput.value || !peopleInput.value || tipValue == 0) { return }
    
    const billValue = parseFloat(billInput.value)
    const peopleValue = parseFloat(peopleInput.value)
    const tipAmount =  billValue * (tipValue / 100)

    tipText.innerText = tipAmount / peopleValue
    totalText.innerText = (billValue + tipAmount) / peopleValue
}

const tipButton = (text) => {
    const button = document.createElement('button')
    button.classList = "bg-very_dark_cyan text-white py-2 text-xl text-center rounded-md"
    button.innerText = text

    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        tipValue = parseInt(button.value)
        updateTipAndTotal()

        for (let index = 0; index < buttons.length; index++) {
            const buttonItem = buttons[index];

            if (buttonItem.classList.contains(`bg-primary`)) {
                buttonItem.classList.remove('bg-primary')
                buttonItem.classList.add('bg-very_dark_cyan')

                buttonItem.classList.add('text-very_dark_cyan')
                buttonItem.classList.add('text-white')
            }   
        }

        button.classList.replace(`bg-very_dark_cyan`, `bg-primary`)
        button.classList.replace('text-white', 'text-very_dark_cyan')
    })

    return button
}


for (let index = 0; index < tipValues.length; index++) {
    const value = tipValues[index]
    
    const button = tipButton(value + '%')
    button.value = value

    buttons.push(button)

    tipButtons.insertBefore(button, customButton)
}
