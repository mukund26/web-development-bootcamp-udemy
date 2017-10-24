var userAge = prompt("What is your age?");

if(userAge < 0){
	console.log("ERROR!");
}
else if (userAge % 2 != 0){
	console.log("Your age is odd!");
}
else if(userAge % Math.sqrt(userAge) === 0){
	console.log("Your age is a perfect square number!");
}
else if (userAge < 18){
	console.log("Sorry, you are not old enough to enter the venue.")
}
else if (userAge < 21){
	console.log("You can enter, but cannot drink.");
}
else if (userAge === 21){
	console.log("Happy Birthday! Have a free drink on us!");
}
else{
	console.log("Come on in. You can drink too!");
}