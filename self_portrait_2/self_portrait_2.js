function setup() {
  createCanvas(500, 500);
  noStroke();
}


function draw() {
  background(246);
  // back of hair
  fill(45, 37, 31)
  rect(110, 155, 200, 255);
  
  //shrit
  fill(246, 223, 223)
  arc(225, 475, 265, 265, radians(180), radians(0));
 
  
  //neck
  fill(237, 196, 148)
  rect(175, 270, 100, 100);
  
  //round neck
  fill(237, 196, 148)
  arc(225, 360, 101, 101, radians(0), radians(180));
  
  //shadow neck
  fill(212, 171, 141)
  arc(225, 310, 109, 109, radians(0), radians(180));
  
  
  //face
  fill(237, 196, 148);
  ellipse(225, 200, 235, 285);
  
  //eyes
  fill(255, 255, 255)
  ellipse(170, 200, 35, 35);
  ellipse(270, 200, 35, 35);
  //iris
  fill(52, 51, 50)
  ellipse(170, 200, 25, 25);
  ellipse(270, 200, 25, 25);
  //pupil
  fill(255, 255, 255);
  ellipse(165, 198, 10, 10);
  ellipse(265, 198, 10, 10);
  //eyelids
   fill(192, 124, 105)
   arc(270, 197, 35, 35, radians(180), radians(0));
   arc(170, 197, 35, 35, radians(180), radians(0));

  //nose
  fill(245, 181, 130)
  arc(223, 255, 25, 25, radians(180), radians(0));
  
  //eyebrows
  fill(78, 53, 32)
  rect(155, 165, 35, 4);
  rect(255, 165, 35, 4);
  
  //ears
  fill(237, 196, 148)
  arc(115, 220, 25, 25, radians(90), radians(270));
  arc(335, 220, 25, 25, radians(270), radians(90));
  
  //front hair
  fill(45, 37, 31)
  arc(230, 140, 229, 180,  radians(190), radians(20));
  rect(303, 152, 41, 275);
  rect(109, 155, 41, 275);
  arc(208, 170, 199, 233, radians(150), radians(330));
  
  
  
  //mouth
  fill(138, 49, 25)
  arc(222, 270, 50, 50, radians(0), radians(180));
  fill(208, 103, 75)
  arc(222, 280, 35, 35, radians(0), radians(180));
  fill(255, 255, 255)
  rect(197, 270, 50, 4);
  
  //beautymarks
  fill(30, 18, 13)
  circle(225, 325, 1);
  fill(207, 165, 135);
  circle(258, 260, 1);
  fill(203, 157, 123)
  circle(188, 260, 1);
  circle(230, 226, 1);
 
  
  
}
  
