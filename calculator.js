let screen = document.getElementById('write');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (a) => {
        buttonText = a.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'CLEAR') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
