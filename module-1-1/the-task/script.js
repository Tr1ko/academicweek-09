const myObject = {
    n1: 10,
    n2: 20,
    printSum: function(){
        console.log(this.n1 + this.n2);
    },
    printProduct: function() {
        console.log(this.n1 * this.n2);
    },
};

document.getElementById("updatePropertyBtn").addEventListener("click", function() {
    const propName = prompt("Witch property do you want to update? (n1 or n2)");

    if (propName in myObject){
        const newValue = Number(prompt(`Enter a new value for ${propName}:`));
        myObject[propName] = newValue;
        console.log(`${propName} is now ${myObject[propName]}`)
    }else{
        console.log("That property doesnt exist")
    }
})

document.getElementById("sumBtn").addEventListener("click", function() {
    myObject.printSum()
})
document.getElementById("productBtn").addEventListener("click", function() {
    myObject.printProduct()
})