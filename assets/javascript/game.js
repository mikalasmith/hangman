// Create an array of themed words.
var words =[
    "moonlight", 
    "titanic", 
    "crash", 
    "gravity", 
    "avatar", 
    "starwars"
];

//player can select any key to start game
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
    userText.textContent = event.key;
  };



// Computer selects a word from the array at random.
var randomWord = [Math.floor(Math.random() * words.length)];
// console.log (Math.floor(Math.random() * words.length));
// console.log(randomWord);


// Computer displays underscores based on length of word that was chosen.
var underScore = 

// User guesses a letter
var userGuess =

// Check if guess is right

// if right, push to display in place of an underscore

// if wrong, push to display in letters already guessed and subtract one from remaining guesses

//computer resets the game after user runs out of guesses or once they have guessed the word
for (i=0; i < words.length; i++) {
    if 

}
