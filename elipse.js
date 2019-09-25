
function setup() {
  createCanvas(1000, 1000);
  slider = createSlider(0,TWO_PI, PI/4, 0.01);
}
var a=0;//subtract
var b=1000;//add
var c=1000;//add
var d=0;//subtract
var size=500;
var x;
var slider;



function draw() {
  x=slider.value();
  background(0);
  stroke(255);
  noFill();
  drawCircle(500, a, size);
  drawCircle2(500, b, size);
  drawCircle3(c, 500, size);
  drawCircle4(d, 500, size);
  a+x;
  b+x;
  c+x;
  d-x;
  size+=x;
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * 0.5;
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
    drawCircle(x, y + d * 0.5, d * 0.5);
  }
}

function drawCircle2(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * 0.5;
    drawCircle2(x + newD, y, newD);
    drawCircle2(x - newD, y, newD);
    drawCircle2(x, y - d * 0.5, d * 0.5);
  }
}

function drawCircle3(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * 0.5;
    drawCircle3(x , y- newD, newD);
    drawCircle3(x, y + newD, newD);
    drawCircle3(x - d * 0.5, y, d * 0.5);
  }
}


function drawCircle4(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    let newD = d * 0.5;
    drawCircle4(x, y + newD, newD);
    drawCircle4(x, y - newD, newD);
    drawCircle4(x + d * 0.5, y, d * 0.5);
  }
}
