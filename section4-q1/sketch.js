// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 30;
  vx = 1
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  ellipse(width / 2, height / 2, size);
  if(count <= 50){size += vx}
  else{size -= vx};
  if(keyIsPressed){vx = vx + 2}
  else{vx == 1}
}
