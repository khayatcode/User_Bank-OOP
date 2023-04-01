// create a user class bankAccount

class User {
    constructor(name, accountBalance) {
        this.name = name;
        this.accountBalance = accountBalance;
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(`User: ${this.name}, Balance: ${this.accountBalance}`);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        return this;
    }
}

const user1 = new User("Adam", 0);
user1.makeDeposit(100).makeDeposit(200).makeDeposit(300).makeWithdrawal(50).displayBalance();

const user2 = new User("Amir", 0);
user2.makeDeposit(1000).makeDeposit(2000).makeWithdrawal(500).makeWithdrawal(100).displayBalance();

const user3 = new User("John", 0);
user3.makeDeposit(10000).makeWithdrawal(5000).makeWithdrawal(1000).makeWithdrawal(1000).displayBalance();

user1.transferMoney(user3, 100).displayBalance();
user3.displayBalance();