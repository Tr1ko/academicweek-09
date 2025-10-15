function getCurrentYear() {
    return new Date().getFullYear();
}

class Animal {
    static currentYear = new Date().getFullYear();
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    birthYear(){
        return getCurrentYear() - this.age;
    }
    bark(){
        console.log("Bark bark!")
    }
}

const dog = new Animal("Rex", 5)

dog.bark()
console.log(dog.birthYear())

function Animal1(name, age) {
    this.name = name;
    this.age = age;

    this.bark = function() {
        console.log("Bark bark!")
    };

    this.birthYear = function() {
        return getCurrentYear() - this.age;
    };
}

const dog1 = new Animal1("Luna", 10)

dog1.bark();
console.log(dog1.birthYear());