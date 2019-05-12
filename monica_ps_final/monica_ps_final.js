var img;
var initials ='mja'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 245; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
img = loadImage('knife.jpg');  // knife.jpg needs to be next to this .js file
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/cat2-sm.jpg');
}

function setup() {
createCanvas(800, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    stroke(01);
    fill(0, 0, 255)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    stroke(45);
   // line(mouseX, mouseY, pmouseX, pmouseY);
   fill(245, 198, 96);
   ellipse(mouseX, mouseY, 55, 55); //orange ellipse
   
  } else if (toolChoice == '3') { // brown rectangle
    noStroke();
    fill(96, 47, 12);
    rect(mouseX, mouseY, 30, 30);
    
  } else if (toolChoice == '4') {
    stroke(0, 0, 255);
   // line(mouseX, mouseY, pmouseX, pmouseY);
   fill(285, 123, 67);
   ellipse(mouseX, mouseY, 10, 10); //blue + pink ellipse
    
  } else if (key == '5') { 
    stroke(0, 0, 255);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    fill(256, 35, 34);
    rect(mouseX, mouseY, 33, 33); // blue + red rect
    
  } else if (toolChoice == '6') { // gray + teal rect
    stroke(189);
    fill(70, 185, 176)
    rect(mouseX, mouseY, 10, 10)
    
  } else if (toolChoice == '7') { // green ellipse
    fill(100, 200, 100);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '8') { // navy blue rect
    noStroke();
    fill(24, 74, 147);
    rect(mouseX, mouseY, 70, 70);
    
  } else if (toolChoice == '9') { // golden rect
    fill(246, 181, 0, 123);
    noStroke();
    rect(mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == '0') { // colorful rect
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 10, 30);
    
  } else if (toolChoice == 't' || toolChoice == 'T') { // colorful ellise
    noStroke();
    fill(mouseX,mouseY, mouseX/mouseY*256)
    ellipse(mouseX,mouseY, 9, 9); 
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
  
    
  }
 }


function self_portrait(){
// this function draws a self portrait when called
// you will need to call this, perhaps as one of your keypress functions
  
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and counting number.

  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
