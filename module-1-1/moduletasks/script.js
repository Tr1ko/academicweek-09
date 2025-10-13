/*const matchScore = { 
    homeScore: 0,
    awayScore: 0,

    homeGoal: function() {
        this.homeScore++;
    },
    awayGoal: function() {
        this.awayScore++;
    }
};

matchScore.homeGoal()
matchScore.homeGoal()
console.log(matchScore.homeScore)*/

const myObject = {}

function addProperty() {
    myObject.new = 10
    console.log(myObject)
}
function removeProperty() {
    delete myObject.new;
    console.log(myObject)
}

const valueObject = {
    startValue: 0,
    increment: function() {
        this.startValue++;
        console.log(this.startValue)
    },
    decrement: function() {
        this.startValue--;
        console.log(this.startValue)
    }
};
document.getElementById("incrementBtn").onclick = function() {
    valueObject.increment();
};
document.getElementById("decrementBtn").onclick = function() {
    valueObject.decrement();
};