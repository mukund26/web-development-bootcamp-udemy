var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
    if(clickedColour === pickedColour){
      messageDisplay.textContent = "Correct!";
      changeColours(clickedColour);
      h1.style.backgroundColor = clickedColour;
    } else{
      messageDisplay.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColours(colour){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colour
  }
}

function pickColour(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColour());
  }
  return arr;
}

function  randomColour(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
