var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var Winner = 2;
var Loser = 0; 
var Remaining = 10;
var Guesses = "";
var randomLetter = getRandomLetter();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    guessesSoFar.push(userGuess); 
    if (userGuess == computerGuess) {
        wins++;
        alert("Nicely played ol boy/or girl, youre out there hustlin");
        guessesLeft = 10;
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert("You lose you dumbo. Its ok though I still think youre cool");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }     
    "<p>Total Wins: " + wins + "</p>";
 
    "<p>Guesses Left: " + guessesLeft + "</p>"; 
    "<p>Your Guesses so far: " + guessesSoFar + "</p>";
    
}
    
document.onkeyup = function() {
}

document.getElementById("winner").innerHTML = wins;
document.getElementById("Loser").innerHTML = losses;
document.getElementById("Remaining").innerHTML = maxGuesses;
document.getElementById("Guesses").innerHTML = currentGuesses;

function getRandomletter {
var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));


document.querySelector('#game').innerHTML = html;}