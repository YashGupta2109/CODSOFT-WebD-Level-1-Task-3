// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            switch(value) {
                case 'C':
                    display.textContent = '0';
                    break;
                case 'Back':
                    if (display.textContent.length > 1) {
                        display.textContent = display.textContent.slice(0, -1);
                    } else {
                        display.textContent = '0';
                    }
                    break;
                case '=':
                    try {
                        display.textContent = eval(display.textContent);
                    } catch {
                        display.textContent = 'Error';
                    }
                    break;
                default:
                    if (display.textContent === '0') {
                        display.textContent = value;
                    } else {
                        display.textContent += value;
                    }
            }
        });
    });
});
