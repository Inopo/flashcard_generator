// Note: use scope safe constructors
// Note: cosntructors should be written in a way that the user can call 

//there should be an obejct such as BasicCard

var inquirer = require('inquirer');
var BasicCard = function(front, back) {

    this.front = front;
    this.back = back;
};


//Empty array that will keep flashcards
var arr = [];

//Q&Az\s
var material = {
    "What is the name of best chess player ever": "Bobby Fischer",

};

//Loop through material and construct objects
for (var key in material) {
    arr.push(new BasicCard(key, material[key]));
}

//Export the array of objects and the constructor out
module.exports = { arr, BasicCard };