const BankAccount = require('./abstraction_pillar');

const firstUserBankAccount = new BankAccount();
const secondUserBankAccount = new BankAccount();

firstUserBankAccount.checkBalance();
firstUserBankAccount.deposit(200);
firstUserBankAccount.draw(300);
firstUserBankAccount.draw(50);
firstUserBankAccount.checkBalance();

secondUserBankAccount.checkBalance();
secondUserBankAccount.deposit(300);
secondUserBankAccount.draw(400);
secondUserBankAccount.draw(50);
secondUserBankAccount.checkBalance();