const tipButton = (text) => {
    const button = document.createElement('button')
    button.classList = "bg-very_dark_cyan text-white py-2 text-xl text-center rounded-md"
    button.innerText = text

    return button
}


const tipButtons = document.getElementById('tip-buttons')
const tipTexts = ['5%', '10%', '15%', '25%', '50%', 'Custom']

for (let index = 0; index < tipTexts.length; index++) {
    const text = tipTexts[index];
    
    const button = tipButton(text)

    tipButtons.appendChild(button)
}
