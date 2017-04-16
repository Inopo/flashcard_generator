//Constructor for the cloze flashcard
var ClozeFlashcard = function(cloze, question) {
    this.cloze = cloze;
    this.question = question;

    this.displayQuestion = function() {
        var display = question.replace(cloze, "...");
        return display;
    }

}

//Empty array that will house our cloze flashcard objects
var arr = [];

//Key Value pairs for the cloze object
var material = {
    "1973": "Ege's birthday",

};

//Loop through material and construct objects
for (var key in material) {
    arr.push(new ClozeFlashcard(key, material[key]));
}

//Export the array of objects and the constructor 
module.exports = { arr, ClozeFlashcard };