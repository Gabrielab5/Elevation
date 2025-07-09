const Bank = function () {
    const _money = 500

    const depositCash = function(cash) {
        this._money += cash
    }

    const checkBalance = function(){
        console.log(_money)
    }

    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950