
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const currentValue = display.value;
            const clickedValue = button.textContent;

            if (currentValue === 'Error') {
                display.value = ''; // Clear the display if it shows an error
            }

            if (button.classList.contains('clear')) {
                display.value = '';
            } else if (button.classList.contains('calculate')) {
                try {
                    display.value = eval(currentValue);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (button.classList.contains('trigonometric')) {
                const func = clickedValue;
                const value = parseFloat(currentValue);
                if (!isNaN(value)) {
                    switch (func) {
                        case 'sin':
                            display.value = Math.sin(value * Math.PI / 180).toFixed(6);
                            break;
                        case 'cos':
                            display.value = Math.cos(value * Math.PI / 180).toFixed(6);
                            break;
                        case 'tan':
                            display.value = Math.tan(value * Math.PI / 180).toFixed(6);
                            break;
                    }
                } else {
                    display.value = 'Error';
                }
            } else {
                if (!isNaN(currentValue) || currentValue === '') { // Check if the current value is a number or empty
                    display.value += clickedValue;
                } else { // If current value is an operator, replace it with the clicked number
                    display.value = clickedValue;
                }
            }
        });
    });
});
