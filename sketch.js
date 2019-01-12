
lines = []
hInc = 5.5

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(20)
  colorMode(HSB);
  stroke(255);
  strokeWeight(40);
}

function draw() {
  background(20);


  if(mouseIsPressed){
    newStroke = [createVector(mouseX,mouseY)];
    lines = concat(newStroke, lines);
  } else {
    newStroke = [createVector(-10,-10)];
    lines = concat(newStroke, lines);
  }

  while(lines.length > 30){
    lines = shorten(lines);
  }

  h = 0;
  prevPoint = createVector(-10,-10);
  for(i = 0; i < lines.length; i++){
    point = lines[i]
   if(prevPoint.x > 0 && point.x > 0){
     mid = p5.Vector.lerp(prevPoint, point, 0.5);
     quart1 = p5.Vector.lerp(prevPoint, mid, 0.5);
     quart2 = p5.Vector.lerp(mid, point, 0.5);
     h += hInc;
     if(h > 360){h = 0;}
     stroke(h, 90, 200);
     line(prevPoint.x,prevPoint.y,quart1.x,quart1.y);
     if(h > 360){h = 0;}
     stroke(h, 90, 200);
     line(quart1.x,quart1.y,mid.x,mid.y);
     if(h > 360){h = 0;}
     stroke(h, 90, 200);
     line(mid.x,mid.y,quart2.x,quart2.y);
     h += hInc;
     if(h > 360){h = 0;}
     stroke(h, 90, 200);
     line(quart2.x,quart2.y,point.x,point.y);
   }
   prevPoint = createVector(point.x,point.y);
  }
}
