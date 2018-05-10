var img;
var r, g;

function setup()
{
  createCanvas(620,318);
  r = 0;
  g = 0;
  
  background(128);
  img = loadImage("yellowkicker.png");
}

function draw()
{
  image(img,310,8);
  strokeWeight(8);
  stroke(0);
  
  fill(255,0,0);
  rect(0,0,304,311);
  
  fill(r,g,0);
  arc(90,5,30,40,2*PI,2*PI+PI/2+PI/8);
  rect(0,0,80,25);
  rect(0,0,30,170);
  ellipse(60,130,75,75);
  quad(95,120,165,50,165,90,95,160);
  ellipse(175,65,40,40);
  rect(0,160,100,80);
  quad(10,240,60,240,90,270,40,270);
  quad(90,270,40,270,10,310,60,310);
  quad(70,220,170,180,165,225,65,240);
  quad(170,180,220,230,210,250,165,225);
  quad(220,220,230,200,240,230,210,250);
  
  fill(150,150,255);
  ellipse(250,150,50,50);
 
  fill(r,g,0);
  noStroke();
  rect(10,4,80,16);
}

function keyTyped()
{
  if (key == 'r')
  {
    r = 255;
    g = 0;
  }
  
  else if (key == 'g')
  {  
    r = 0;
    g = 255;
  }
  
  else if (key == 'y')
  {  
    r = 255;
    g = 128;
  }

}
