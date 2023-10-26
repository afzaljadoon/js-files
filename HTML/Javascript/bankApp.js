class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    withdraw(amount) {
        if (this.balance - amount <= 0) {
            console.log("You cannot withdraw more than what you have");
            return;
        }
        this.balance -= amount;
        console.log("withdrew", amount);
        console.log({ balance: this.balance });
    }

    deposit(amount) {
        this.balance += amount;
        console.log("deposited", `${amount}`);
        console.log({ balance: this.balance });
    }
}

const qaziChecking = new Bank(100);
console.log(qaziChecking.balance);
qaziChecking.deposit(100);
// console.log(qaziChecking.balance);
qaziChecking.withdraw(100);
qaziChecking.withdraw(200);
// qaziChecking.withdraw(100);

const depositButton = document.getElementById("deposit");
const withddrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById('balance');

depositButton.onclick = () => {
    const amount = Number(amountInput.value);
    qaziChecking.deposit(amount);
    // console.log(amountInput.value);
    balanceDiv.innerText = `Balance : ${qaziChecking.balance}`
};

withddrawButton.onclick = () => {
   const amount = qaziChecking.withdraw(Number(amountInput.value));
   qaziChecking.withdraw(amount);
   balanceDiv.innerText = `Balance : ${qaziChecking.balance}`
}
