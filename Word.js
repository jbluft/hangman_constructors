var Letter = require('./Letter.js');

var Word = function(word){

// An array of new Letter objects representing the letters of the underlying word
this.arrayLetters = [];

//for loop using the letter constructor
// this.getLets = function(word){
    for (i = 0; i < word.length; i++) {
        var currentLetter = new Letter(word[i]);
        this.arrayLetters.push(currentLetter);
        }
// };

//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
this.passGuessToLetters = function(letterReturned) {
    
    for (i = 0; i < this.arrayLetters.length; i++) {
        this.arrayLetters[i].checkGuess(letterReturned);
    }

    return this.returnValue();
};
    

//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
this.returnValue = function(){
    var returnString = "";
    for (i = 0; i < this.arrayLetters.length; i++) {
        returnString += this.arrayLetters[i].displayValue();
        }
    console.log(returnString);
    return returnString;
    }
}

// var word = new Word("test");
// word.passGuessToLetters("e");
// word.passGuessToLetters("t");
// word.passGuessToLetters("z");


module.exports = Word;