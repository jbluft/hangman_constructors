//psuedo code this
//come up with a words list
//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses
//
//start game function
//use inquirer to prompt user to start the game
//reset function

//show the user the underscores for the word
//prompt user to submit a letter
//check if the letter is part of the chosen word
//if it is, show the letter(s) in the world
//if not, deduct one guess

// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require('./Word.js');

console.log("Welcome to my favorite game ever: Hangman!");


var HangmanGame = {

 wordsList: ["jacob", "eddie", "brandon", "paul", "aiden", "jordan",
    "andrew", "marie", "marcelo", "tim", "brad", "ryan", "cassie", "howard", "devin", "josh", "justin"],

    numBlanks: 0,

    blanksAndSuccesses: [],

    wrongGuesses: [],

    guessedLetters: [],

// Game counters
    winCounter: 0,
    lossCounter: 0,
    numGuesses: 9,

    chosenWord: [],


  startGame: function() {
      
    // Solution is chosen randomly from wordList and sent to Word constructor.

    //ask users if they want to play
    inquirer.prompt([
        {
        name: "play",
        type: "confirm",
        message: "Would you like to play a game?"
      }]).then(function(answer) {
        if(answer.play){
        // console.log("how about global thermo nuclear war?")
        HangmanGame.playGame();
        } else{
          console.log("It's just not the same without Pat Sajak and Vanna White");
        }
    })},

    playGame: function(answer) {
        this.chosenWord = new Word(this.wordsList[Math.floor(Math.random() * this.wordsList.length)]);
        numGuesses = 9;
        // console.log(this.chosenWord);
        console.log("Please choose a letter");
        this.chosenWord.returnValue();
        this.userChoosesLetter();

    },

    userChoosesLetter: function(){
        var that = this;
        inquirer.prompt([
            {
            name: "chooseletter",
            type: "input",
            message: "Please choose a letter"
          }]).then(function(answer) {
              var letterReturned = (answer.chooseletter).toLowerCase();
            //   console.log(letterReturned);
              that.guessedLetters.push(letterReturned);
            //   console.log(that.guessedLetters);
            var checkIt = that.chosenWord.passGuessToLetters(letterReturned);
            console.log(that.checkIt);



            //this is where I got stuck. I can't do an if/else statement because there is no boolean value to assess against.
            //I guess this needs to be somewhere in the word.js file? 
            // console.log(checkIt);


            // if (that.guessedLetters.toString() === that.chosenWord.toString()) {
            //     console.log("You won");
            // }; this doesn't work either 

            // that.userChoosesLetter();
          })},
          

    }

HangmanGame.startGame();









      
//       ,}



//         {
//             name: "letter",
//           message: "Please submit a letter"
//         }
//         //do we need to validate that the user has submitted a letter?
    
//       ]).then(function(answers) {
//         // initializes the variable newGuy to be a programmer object which will take
//         // in all of the user's answers to the questions above
//         // var letterGuessed = new Word(tktk);
//         // printInfo method is run to show that the newguy object was successfully created and filled
//         console.log(answers.)
//         newGuy.printInfo();
//       });

// }
  
    // Print the initial blanks in console.
    // console.log(blanksAndSuccesses);


//   // If we have gotten all the letters to match the solution...
//   if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
//     // ..add to the win counter & give the user an alert.
//     winCounter++;
// console.log("You win!");

//     // Update the win counter in the HTML & restart the game.
//     startGame();
//   }

//   // If we've run out of guesses..
//   else if (numGuesses === 0) {
//     // Add to the loss counter.
//     lossCounter++;
//     // Give the user an alert.
//     console.log("You lose");
//     // Restart the game.
//     startGame();
//   }



