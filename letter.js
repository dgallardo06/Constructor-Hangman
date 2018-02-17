function Letter(letter){
	this.letter = letter;
	this.show = false;

	//if the letter is blank, set this.show to true
	if (this.letter == " "){
		this.show = true;
	}

}

// if there is a blank, return a blank. if not, show underline
Letter.prototype.printInfo = function(){
	if (this.show){
		return this.letter;
	} else {
		return "_";
	}
}


//export Letter constructor
module.exports = Letter;