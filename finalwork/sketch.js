// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 60;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size;
  size = count + 50;
  // size += 1;
  fill(199,60,46);
  ellipse(width / 2, height / 2, size);
  // size += 100;

  if (size > 160) {
    // size += 50;
    size = 150;
  }
}
