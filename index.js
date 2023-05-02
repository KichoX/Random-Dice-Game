let randomNumber1 = Math.round(Math.random()*5)+1;
let randomImage = document.querySelector(".img1");
randomImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.round(Math.random()*5)+1;
let randomImage2 = document.querySelector(".img2");
randomImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins !";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins !";
}else{
    document.querySelector("h1").innerHTML = "Draw !";
}