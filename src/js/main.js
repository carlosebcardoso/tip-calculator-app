const tipButton = (text) => {
    const button = document.createElement('button')
    button.classList = "bg-very_dark_cyan text-white py-2 text-xl text-center rounded-md"
    button.innerText = text

    return button
}


const tipButtons = document.getElementById('tip-buttons')
const customButton = document.getElementById('custom-button')
const tipValues = ['5', '10', '15', '25', '50']

for (let index = 0; index < tipValues.length; index++) {
    const value = tipValues[index];
    
    const button = tipButton(value + '%')

    tipButtons.insertBefore(button, customButton)
}
