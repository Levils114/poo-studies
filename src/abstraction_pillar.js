class BankAccount{
    constructor(){
        this.agency = 1075;
        this.accountNumber = 8351125;
        this.balance = 50;
        this.limit = 4000;
    }

    deposit(value){
        this.balance += value;
    }

    draw(value){
        if(value > this.balance){
            return console.log("You don't have this money:)")
        }

        this.balance -= value;
    }

    checkBalance(){
        console.log(this.balance);
    }
}

module.exports = BankAccount;