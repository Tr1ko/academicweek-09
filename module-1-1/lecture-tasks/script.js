const book = {
    Title: "The Hobbit",
    Author: "J.R.R. Tolkien",
    Year: 1937
}

console.log(book.Title)
console.log(book.Author)
console.log(book.Year)

book.pages = 310;
book.Year = 1937;

console.log(book)
console.log(book.pages)

const movies = {
    movie1:{
        title: "Star Wars episode III",
        director: "George Lucas",
        "release year": 2005
    },
    movie2:{
        title: "Star Wars episode IV",
        director: "George Lucas",
        "release year": 1977
    },
    movie3:{
        title: "Kingsman the secret service",
        director: "Matthew Vaughn",
        "release year": 2014
    }
}

console.log(movies["movie1"])
console.log(movies["movie2"])
console.log(movies["movie3"])

const objA = {value: 10};
const objB = {...objA};
objB.value = 99
console.log(objA.value);

const user = {
    name: "Trym",
    email: "Trym20@hotmail.com",
    age: 25,
    sayHI: function(){
        console.log(`Hi, I'm ${user.name}`)
    },
    birthday: function(){
        this.age += 1;
        console.log(`Happy birthday! you are ${user.age} years old`)
    },
}
user.sayHI()
user.birthday()

const account = {
    balance: 0,
    deposit: function(a){
        this.balance += a
        console.log(`deposit succesfull, new balance is: ${this.balance}`)
    },
    withdraw: function(a){
        if(a > this.balance){
            console.log("innsufficent balance");
            } else {
                this.balance -= a 
                console.log(`Widthdraw successfull, new balance is: ${this.balance}`)
            }
        },
    showBalance: function() {
        console.log(`Current Balance: ${this.balance}`)
    }
}
account.deposit(100)
account.withdraw(10)
account.showBalance()

const student ={}

const key = "name";
student[key] = "Trym"
console.log(student)

const pet = {
    name: "Tutti",
    species: "Cat",
    age: 1,
    speak:  function(){
        console.log(`I'm ${this.name} the ${this.species}!`)
    }
}
pet.speak()


const song = {
    title: "Prison Of Flesh",
    artist: "Lorna Shore",
    duration: "6:59",
    play: function() {
        console.log(`Now playing "${this.title}" by "${this.artist}"`)
    },
    info: function() {
        console.log(`Song title: ${this.title}. Song artist: ${this.artist}. Song duration: ${this.duration} min`)
    }
}
song.play()
song.info()