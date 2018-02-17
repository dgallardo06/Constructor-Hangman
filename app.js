var Word = require("./word.js");
var Letter = require("./letter.js");
var wordsToGuess = require("./wordsToGuess.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var guessesLeft = 10;
var guessWord = new Word.Word(randomWord);


function guessLetter(){
	console.log(guessWord.toString());

	inquirer.
	
}