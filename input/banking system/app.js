import readline from 'readline';
import Bank from './bankingsystem.js';
import { validateChoice, validateAmount } from './validator.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bank = new Bank();

function showMenu() {
    console.log('\n=== Banking System ===');
    console.log('1) Check Balance');
    console.log('2) Deposit Money');
    console.log('3) Withdraw Money');
    console.log('4) Exit\n');

    rl.question('Choose option (1-4): ', handleMenuChoice);
}

function handleMenuChoice(choice) {
    const validChoice = validateChoice(choice);
    if (validChoice === null) {
        showMenu();
        return;
    }

    switch (validChoice) {
        case 1:
            bank.checkBalance();
            showMenu();
            break;
        case 2:
            rl.question('Enter amount to deposit: $', (amount) => {
                const validAmount = validateAmount(amount);
                if (validAmount !== null) bank.deposit(validAmount);
                showMenu();
            });
            break;
        case 3:
            rl.question('Enter amount to withdraw: $', (amount) => {
                const validAmount = validateAmount(amount);
                if (validAmount !== null) bank.withdraw(validAmount);
                showMenu();
            });
            break;
        case 4:
            console.log('Exiting banking system. Goodbye!');
            rl.close();
            break;
    }
}

showMenu();