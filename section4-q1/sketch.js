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
  if(count <= 50){size += vx}
  else{size -= vx};
  if(size > 50){size == 0}
  if(keyIsDown(" ".charCodeAt(0))){vx = 5}
  else{vx == 1}
}
