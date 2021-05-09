window.onload = function () {
    const num1 = (Math.floor(Math.random() * 6 + 1));
    const num2 = (Math.floor(Math.random() * 6 + 1));
    if (num1 == 1) {
        document.getElementsByTagName("img")[0].src = "images/dice1.png";
    }
    else if (num1 == 2) {
        document.getElementsByTagName("img")[0].src = "images/dice2.png";
    }
    else if (num1 == 3) {
        document.getElementsByTagName("img")[0].src = "images/dice3.png";
    }
    else if (num1 == 4) {
        document.getElementsByTagName("img")[0].src = "images/dice4.png";
    }
    else if (num1 == 5) {
        document.getElementsByTagName("img")[0].src = "images/dice5.png";
    }
    else if (num1 == 6) {
        document.getElementsByTagName("img")[0].src = "images/dice6.png";
    }
    if (num2 == 1) {
        document.getElementsByTagName("img")[1].src = "images/dice1.png";
    }
    else if (num2 == 2) {
        document.getElementsByTagName("img")[1].src = "images/dice2.png";
    }
    else if (num2 == 3) {
        document.getElementsByTagName("img")[1].src = "images/dice3.png";
    }
    else if (num2 == 4) {
        document.getElementsByTagName("img")[1].src = "images/dice4.png";
    }
    else if (num2 == 5) {
        document.getElementsByTagName("img")[1].src = "images/dice5.png";
    }
    else if (num2 == 6) {
        document.getElementsByTagName("img")[1].src = "images/dice6.png";
    }
    if (num1>num2) {
        document.querySelector("div h1").innerHTML="Player 1 Wins!"
    }
    else if (num1==num2) {
        document.querySelector("div h1").innerHTML="Draw!"
    }
    else{
        document.querySelector("div h1").innerHTML="Player 2 Wins!"
    }
}