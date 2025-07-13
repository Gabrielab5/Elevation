class Bank {
    constructor() {
        this._money = 200;
    }

    checkBalance() {
        console.log(`Balance: $${this._money}`);
    }

    deposit(amount) {
        this._money += amount;
        this.checkBalance();
    }

    withdraw(amount) {
        if (amount > this._money) {
            console.log('Insufficient funds.');
        } else {
            this._money -= amount;
            this.checkBalance();
        }
    }
}

export default Bank;
