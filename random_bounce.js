xPos = 100;
yPos = 100;
xSpeed = 1.0;
ySpeed = 2.1;
canvasXSize = 800;
canvasYSize = 400;
sizeOfObj = 21;

function setup() {
  createCanvas(canvasXSize, canvasYSize);
}

function draw() {
  background(0);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (xPos >= canvasXSize || xPos <= 0) {
    xSpeed *= -1;
  }
  if (yPos >= canvasYSize || yPos <= 0) {
    ySpeed *= -1;
  }
  circle(xPos, yPos, sizeOfObj);
}
