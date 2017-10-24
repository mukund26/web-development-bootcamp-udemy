var number = 12

var stringGuess = prompt("Guess the number!");
var guess = Number(stringGuess);

if (guess === number){
	alert("You guessed it correctly!")
}
else if(guess > number){
	alert("You guessed too high!");
}
else{
	alert("You guessed to low!");
}