// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 50;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1);
  if(count + 1 > cycle){
    count = count - 1}
  
  let size = constrain(count, 0, cycle);
  ellipse(width / 2, height / 2, size);
}
