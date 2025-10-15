class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        console.log(this.width * this.height)
    }
    perimeter(){
        console.log(2 * (this.width + this.height))
    }
}
const r1 = new Rectangle(10, 5);
const r2 = new Rectangle(7, 9);

r1.area()
r2.area()

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
    round(n){
        const number = this.area()
        let rounded = Math.round(number * 10 ** n) / 10 ** n;
        return rounded;
    }
}

const c = new Circle(3);
console.log(`area: ${c.area()}, circumference: ${c.circumference()}`);
console.log(c.round(2));

class Countdown {
    constructor(targetDateString){
        this.targetDate = new Date(targetDateString);            
    }
    daysLeft(){
        const now = new Date();
        const diffMs = this.targetDate - now;
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    isPast() {
        const now = new Date();
        return this.targetDate < now;
    }
}

const cd = new Countdown("2026-01-01");
console.log(cd.daysLeft(), cd.isPast())

class BankAccount {
    constructor(owner, balance=0){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(a){
        this.balance += a;
        console.log(`Deposited ${a}. new balance ${this.balance}`);
    }
    withdraw(a){
        if(a > this.balance){
            console.log("insufficient balance")
        } else {
            this.balance -= a;
            console.log(`Withdrawal successful. new balance: ${this.balance}`)
        }
    }
    showBalance() {
        console.log(`${this.owner}'s balance is ${this.balance}`)
    }
}

const a = new BankAccount("Trym", 1000);
a.deposit(250);
a.withdraw(400)
a.showBalance()

const b = new BankAccount("Adrian", 100)
b.deposit(100);
b.withdraw(250);
b.showBalance()
