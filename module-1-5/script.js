//1.og 3.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
}
alert(person.firstName + " " + person.lastName + " is " + person.age)
//2.
const people = {
    firstPerson: {
        firstName: "Trym",
        lastName: "Solheim"
    },
    secondPerson: {
        firstName: "Cristiano",
        lastName: "Ronaldo"
    },
};
//4.
class book {
    constructor(title, releaseYear, author){
        this.title = title;
        this.releaseYear = releaseYear;
        this.author = author;
    }
    cast() {
        return alert("Avada Kedavra")
    }
}
//5.
function Book(
    title,
    releaseYear,
    author
){
    this.title = title;
    this.releaseYear = releaseYear;
    this.author = author;
    this.cast = function() {
        return alert("Avada Kedavra")
    }
}

//7.
const harryPotter = {
    title: "Harry Potter",
    releaseYear: 1997,
    author: "J.K. Rowling"
};
const serialized = JSON.stringify(harryPotter, null, 4);
console.log(serialized)
const deserialized = JSON.parse(serialized)
console.log(deserialized)

//8.

const o1 = new Date();
const o2 = new String();
const o3 = new Number();
const o4 = {}

const testData = (data) => {
    console.log("number of porperties: " + Object.keys(data).length);
    if (Object.keys(data).length === 0 && data.constructor === Object) {
        console.log("empty object");
        return data;
    } else {
        console.log("not an empty object")
        return data;
    }
}
for ( data of [o1, o2, o3, o4]){
    testData(data)
}