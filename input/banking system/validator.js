function validateChoice(choice) {
    const num = parseInt(choice);
    if (num>=1 && num<=4) {
        return num;
    } else {
        console.log('Invalid choice. Please choose between 1 and 4.');
        return null;
    }
}

function validateAmount(amount) {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
        console.log('Please enter a valid positive amount.');
        return null;
    }
    return num;
}

export { validateChoice, validateAmount };
