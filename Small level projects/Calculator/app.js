document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const currentValue = display.value;
            const clickedValue = button.textContent;

            if (currentValue === 'Error') {
                display.value = '';
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
                display.value += clickedValue; // Simply append clicked value
            }
        });
    });
});
