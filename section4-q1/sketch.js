// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 30;
  30 < size < 50;
  vx = 1
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  ellipse(width / 2, height / 2, size);
  if(count <= 50){size += vx % 30}
  else{size -= vx};
  if(keyIsPressed){vx = 10}
  else{vx == 1}
}
