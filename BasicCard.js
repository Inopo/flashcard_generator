// Note: use scope safe constructors
// Note: cosntructors should be written in a way that the user can call 
// Note cnt: them with or without new word. 

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
    "What was the name of the first electronic general-purpose computer": "ENIAC",
    "What does HTTP stand for in a website address": "HyperText Transfer Protocol",
    "In what year did Nintendo release its first game console in North America": "1985",
    "In what year was the iPhone first released": "2007"
};

//Loop through material and construct objects
for (var key in material) {
    arr.push(new BasicFlashcard(key, material[key]));
}

//Export the array of objects and the constructor out
module.exports = { arr, BasicFlashcard };