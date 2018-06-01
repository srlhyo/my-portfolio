
//get the canvas and context and store in vars
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//other variables
var wordsArray= ["Web Developer",
                      "Helio G.",
                      "Fun/Funny",
                      "ALL/All",
                      "Fun-TASTIC!",
                      "The Best 'Me'",
                      "So I exist",
                      "We and Us"];

var topLetterSpacing = "I AM".split("").join(String.fromCharCode(8202));
var animatedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
// Split javascript built-in method used to and white space between letters
var bottomLetterSpacing = animatedWord.split("").join(String.fromCharCode(8202));
var x = - canvas.width/2;
var opacity = 0;


//drawing text
ctx.font = "bold 80px impact";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText(topLetterSpacing, canvas.width/2, 150);

//drawing lines
// ctx.beginPath();
ctx.moveTo(150, 250);
ctx.lineTo(210, 155);
ctx.lineTo(250, 210);
ctx.lineTo(280, 155);
ctx.moveTo(328, 80);
ctx.lineTo(344, 50);
ctx.lineWidth = "10";
ctx.stroke();

// drawing animation

function setAnimation(){
  x += 15;
  opacity += 0.01 * 0.2;

  ctx.fillStyle = "rgba(0,0,0,"+ opacity +")";
  ctx.fillRect(0, 0,canvas.width, canvas.height);

  ctx.clearRect(0, 275, 500, 50);
  ctx.font = "bold 50px impact";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";

  if(x <= canvas.width/2){
    ctx.fillText(bottomLetterSpacing, x, 320);

  } else {

    ctx.fillText(bottomLetterSpacing, canvas.width/2, 320);

      clearInterval(textAnimation);

  }

};

var textAnimation = setInterval(setAnimation, 100);
