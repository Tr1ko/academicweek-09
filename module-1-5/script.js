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