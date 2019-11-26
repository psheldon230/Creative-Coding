let x = 0;
let val = 1;
let strokeColor = 40;
let y = 40;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  changeColor(60, 260, 140, 285);
  changeLines();
  
 fill(0, 0, 255);
 rect(60,140 , 200, 145);// blue rectangle
 fill(255, 255, 0);
 rect(0, 190, 60, 50); //yellow rect
  move();
  fill(255, 0, 0); //red rect
  rect(60, 285, 100, 120);
  fill(strokeColor, y, y);
  rect(60, 285, 340, 10);
  fill(y, y, strokeColor);
  rect(260, 0,10 , 285);
  fill(strokeColor, y, strokeColor);
  rect(300, 0, 10, 285);
  fill(y, strokeColor, y);
  rect(310,200, 90, 10);
  fill(strokeColor, strokeColor, y);
  rect(160, 295, 10, 120);
  fill(y, strokeColor, strokeColor);
  rect(0, 370, 60, 10);
  fill(strokeColor, y, y);
  rect(25, 380, 10, 30);
  fill(y, strokeColor, y);
  rect(60, 0, 10, 400);
  fill(strokeColor, strokeColor, y);
  rect(70, 140, 190, 10);
  fill(y, y, strokeColor);
  rect(0, 190, 60, 10);
  fill(strokeColor, y, y);
  rect(0, 230, 60, 10);
  
}
function changeColor(w, x, y, z)
{
  if(mouseX > w && x > mouseX && y < mouseY && z > mouseY && mouseIsPressed)
  {
    background(Math.random()*255, Math.random()*255, Math.random()*255);
  }
  else 
  {
    background(255);
}
}
function move()
{
  if(mouseIsPressed)
  {
    

    rect(x, 190, 60, 50);
    fill(0, 0, 255);
    rect(60, 140 - x, 200, 145);
    fill(255, 0, 0);
    rect(60+x, 285, 100, 120);
     x = x + 5*val;
    if(x == width-60)
    {
      val = -1; 
  }
    if(x == 0)
    {
      val = 1;
    }
  }
  else
  {
    x = 0;
    val = 1;
  }
}
function changeLines()
{
  if(mouseX > 20 && mouseX < 40 && mouseY > 370 && mouseY < 390 && mouseIsPressed)
  {
    strokeColor = (Math.random() * 255) + 80;
  }
  else
  {
    y = 40;
    strokeColor = 40;
  }
}
