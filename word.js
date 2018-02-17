var Letter = require("./letter.js");

function Word(word){
	this.word = word;
	//array to hold all letters in the word
	this.letters = [];
	//array to hold all letters guessed by user
	this.guesses = [];

	//go through each letter in word and add each to letters array
	for (var i = 0; i < this.word.length; i++){
		var newLetter = new Letter(this.word[i]);
		this.letters.push(newLetter);
	}
}

Word.prototype.checkLetter = function(letter){
	this.notCorrect = true;
	this.isLetterValid = false;
	var letter = letter.toLowerCase();
	if (this.guesses.indexOf(letter) != -1){
		this.isLetterValid = true;
	} else {
		this.guesses.push(letter);
		for(var i = 0; i < this.letters.length; i++){
			if (this.letters[i].letter.toLowerCase() == letter){
				this.notCorrect = false;
				this.letters[i].show = true;
			}
		}
	}
}

Word.prototype.isComplete = function(){
	for (var i = 0; i < this.letters.length; i++){
		if (!this.letters[i].show){
			return false;
		}
	}
	return true;
}

Word.prototype.output = function(){
	var output = "";
	for (var i = 0; i < this.letters.length; i++){
		output += this.letters[i].printInfo();
	}

	return output;
}

//export Word construct
module.exports = Word;