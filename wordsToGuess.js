var wordsToGuess = ["superman", "android", "javascript", "programming", "soccer"];

var random = Math.floor(Math.random() * wordsToGuess.length);

var randWord = wordsToGuess[random];

module.exports = wordsToGuess;