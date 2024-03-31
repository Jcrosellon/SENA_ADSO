class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.clearDisplay();
        this.bindEvents();
    }
    
    appendToDisplay(value) {
        this.display.value += value;
    }

    clearLast() {
        this.display.value = this.display.value.slice(0, -1);
    }

    clearDisplay() {
        this.display.value = '';
    }

    calculateResult() {
        try {
            const result = eval(this.display.value);
            this.display.value = result;
        } catch (error) {
            alert('Error en la expresión ingresada');
        }
    }

    calculatePercentage() {
        try {
            const expression = this.display.value;
            console.log('Expresión:', expression);  
            const parts = expression.split('%');
            let result = 0;

            if (parts.length === 2) {
                // Obtener el valor antes del porcentaje
                const value = parseFloat(parts[0]);
                
                // Obtener el porcentaje
                const percentage = parseFloat(parts[1]);

                // Calcular el resultado
                result = (value * percentage) / 100;
            } else {
                throw 'Invalid expression';
            }

            this.display.value = result;
        } catch (error) {
            alert('Error en la expresión ingresada');
        }
    }



    bindEvents() {
        document.querySelectorAll('.calculator .keys button').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.dataset.value;
                switch (value) {
                    case 'AC':
                        this.clearDisplay();
                        break;
                    case 'CE':
                        this.clearLast();
                        break;
                    case '%':
                        this.calculatePercentage();
                        break;
                    case '=':
                        this.calculateResult();
                        break;
                    default:
                        this.appendToDisplay(value);
                }
            });
        });

        // Agregar un event listener para detectar cuando se presionan las teclas
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace', 'Escape', '%'];

            if (validKeys.includes(key)) {
                switch (key) {
                    case 'Enter':
                        this.calculateResult();
                        break;
                    case 'Backspace':
                        this.clearLast();
                        break;
                    case 'Escape':
                        this.clearDisplay();
                        break;
                    case '%':
                        this.calculatePercentage();
                        break;
                    default:
                        this.appendToDisplay(key);
                }
                event.preventDefault();
            }
        });
    }

    focusDisplay() {
        this.display.focus(); // Establecer el foco en el elemento de entrada
    }
}

// Inicializar la calculadora una vez que se haya cargado el contenido del DOM
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});
