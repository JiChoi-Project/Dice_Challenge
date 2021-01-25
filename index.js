var randomNumber1 = 1+Math.floor(Math.random() * 6);
var randomNumber2 = 1+Math.floor(Math.random() * 6);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var diceFile1 = "images/dice"+randomNumber1+".png";
var diceFile2 = "images/dice"+randomNumber2+".png";

dice1.setAttribute("src",diceFile1);
dice2.setAttribute("src",diceFile2);

var header = document.querySelector(".result-header");
if(randomNumber1>randomNumber2){
    header.innerHTML = "⛳️Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    header.innerHTML = "Player 2 Wins!⛳️";
}else{
    header.innerHTML = "Draw!"
}
