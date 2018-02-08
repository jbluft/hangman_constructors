var Letter = function(letter){
    this.letter = letter;
    this.guessed = false;


    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayValue = function(){
        if (this.guessed === true){
            return this.letter;
            console.log(this.letter);

        }
        else {
            return "_ ";
            
        }
    }

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess = function(letterGuessed){
        if (this.letter == letterGuessed){
            this.guessed = true;
            //console.log(this.guessed);
            }
            // else {
            //     this.guessed = false;
            //     //console.log(this.guessed);
            // }
        this.displayValue();
        }
}

// testing goes here
// var thing = new Letter("z");
// thing.displayValue();
// thing.checkGuess("s");
// console.log(thing.guessed);

module.exports = Letter;
