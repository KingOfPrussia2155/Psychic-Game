<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>
      Data Types, User Input, Conditional Logic - Commented
    </title>
  </head>
  <body>
    <script type="text/javascript">

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var wins = 0;
var losses = 0; 
var maxGuesses = 10;
var currentGuesses = "";
var randomLetter = getRandomLetter();
    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = maxGuesses;
    document.getElementById("guessesSoFar").innerHTML = currentGuesses;

function getRandomletter {
  var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
  return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
}

</script>
</body>
