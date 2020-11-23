// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  angle = 0;
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  star(x, y, 50, angle);
  angle += 10;
  x += vx;
  y += vy;
  if(keyIsDown(LEFT_ARROW)){vx = vx + 5};
  if(keyIsDown(RIGHT_ARROW)){vx = vx - 5};
  if(keyIsDown(UP_ARROW)){vy = vy + 5};
  if(keyIsDown(DOWN_ARROW)){vy = vy - 5};
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
  mousePressed(mouseX, mouseY)
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
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

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
