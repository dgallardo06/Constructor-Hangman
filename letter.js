function Letter(letter){
	this.letter = letter;
	this.show = false;

	//function to check each character in word(s) to guess.
	//if it is a letter it will show an underscore "_"
	//if it is a blank it will show a blank " "
	this.showLetter = function(){
		if (this.letter === " "){
			this.show = true;
			return " ";
		} else (this.show === false){
			return "_";
	}
}

//export Letter constructor
module.exports = Letter;