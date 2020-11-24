// 最終課題を制作しよう
let x, y, vx, vy, angle, z;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  angle = 0;
  z = 0
}

function draw(){
  background(160, 192, 255);
  if(key == "r"){fill("red");}
  else if(key == "y"){fill("yellow");}
  else if(key == "p"){fill("purple");}
  else if(key == "g"){fill("green");}
  else if(key == "b"){fill("blue");}
  else if(key == "n"){fill("navy");}
  else if(key == "w"){fill("white");}
  else if(key == "o"){fill("orange");}
  else if(key == "s"){fill("silver");}
  else if(key == "G"){fill("gold");}
  star(x, y, 50, angle);
  angle += 10 + z;
  x += vx;
  y += vy;
  if(keyIsDown(LEFT_ARROW)){vx = vx - 1};
  if(keyIsDown(RIGHT_ARROW)){vx = vx + 1};
  if(keyIsDown(UP_ARROW)){vy = vy - 1};
  if(keyIsDown(DOWN_ARROW)){vy = vy + 1};
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mousePressed(){
  if(mousePressed){x = mouseX ; y = mouseY}
  else{x = x ; y = y}
}

function keyPressed(){
  if(key == " "){z += 1}
  if(z == 10){z == 0}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
