x = 0;
y = 0;
screen_width = window.innerWidth;
screen_height = window.innerHeight;
var apple = "";
var speak_data = "";
draw_apple = "";
var to_number = "";

var SpeechRecognition =  window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage("apple.png");
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    draw_apple = "set";
    document.getElementById("Started Drawing Apple").HTML = "";
  } else{
document.getElementById("The Speech Has Not Recognized a Number");
  }
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 createCanvas(screen_width, screen_height);
 canvas.position(0, 150);
}

function draw() {
  for(var i=1; i <= to_number; i++) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);
      }
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "apple.png";
    speak();

  }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
