var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

// for second dice6

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

// winner

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 is the Winner";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 is the winner";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
