var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var Winner = 0;
var Loser = 0; 
var Remaining = 10;
var Guesses = "";
var randomLetter = getRandomLetter();
    



</script>

document.getElementById("winner").innerHTML = wins;
document.getElementById("loser").innerHTML = losses;
document.getElementById("Remaining").innerHTML = maxGuesses;
document.getElementById("Guesses").innerHTML = currentGuesses;

function getRandomletter {
var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));


document.querySelector('#game').innerHTML = html;