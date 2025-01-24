import { print } from '../print';
import { EButtonUsage } from "../../common/enum";

const main = () => {
    let currentInput: string = ''; // ввод
    let operand1: number | null = null; // первое число
    let operator: string | null = null; // нажатый оператор

    return (button: EButtonUsage) => {
        if (!isNaN(Number(button))) { //проверка, является ли нажатая кнопка числом
            currentInput += button; 
            print(currentInput);
        } else if (button === EButtonUsage.OPERATOR_DECIMAL) { //если нажата кнопка с точкой 
            if (!currentInput.includes('.')) {
                currentInput += '.';
                print(currentInput);
            }
        } else if (['+', '-', 'X', '/'].includes(button)) { //если нажата кнопка с оператором
            operand1 = Number(currentInput);
            operator = button; 
            currentInput = '';
        } else if (button === EButtonUsage.OPERATOR_EQUAL) { //если нажато "=".
            const operand2 = Number(currentInput);
            let result = 0;

            //арифметические операции
            if (operator === '+') result = (operand1 || 0) + operand2;
            if (operator === '-') result = (operand1 || 0) - operand2;
            if (operator === 'X') result = (operand1 || 0) * operand2;
            if (operator === '/') result = operand2 !== 0 ? (operand1 || 0) / operand2 : 0;

            print(result.toString()); //вывод результата
            currentInput = ''; 
            operand1 = null; 
            operator = null; 
        } else if (button === EButtonUsage.OPERATOR_AC) { //если нажато "AC"(сброс всего)
            currentInput = '';
            operand1 = null;
            operator = null;
            print('0'); 
        } else if (button === EButtonUsage.OPERATOR_C) { //если нажато "C" (очищается только текущий ввод)
            currentInput = '';
            print('0'); 
        }
    };
};

export { main };