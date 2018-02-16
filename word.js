var letter = require("./letter.js");

function Word(word){
	this.word = word;
	//array to hold all letters in the word
	this.letters = [];
	//array to hold all letters guessed by user
	this.guesses = [];

	//function to go through each letter in word and add each to letters array
	this.getLetters = function(){
		for (var i = 0; i < this.word.length; i++){
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}
}


//export Word construct
module.exports = Word;