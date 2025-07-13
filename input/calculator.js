const [, , arg1, operator, arg2] = process.argv;

const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
}

function calculate(a, op, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) return 'Error: Division by zero.';
            return a / b;
        default:
            return 'Error: Invalid operation. Use one of +, -, *, /.';
    }
}

const result = calculate(num1, operator, num2);
console.log(`${num1} ${operator} ${num2} = ${result}`);
