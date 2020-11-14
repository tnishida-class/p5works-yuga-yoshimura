// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background('blue');
  fill('yellow');
  for(let i = 0; i < 12; i++){
    const thetaA = TWO_PI * i / 12;
    const xx = 100 + cos(thetaA) * 50;
    const yy = 100 + sin(thetaA) * 50;
    star(xx, yy, 50);
}

function star(cx, cy, r){
  push();
  beginShape();
  for(var i = 0; i < 12; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * 10;
    const y = cy + sin(theta) * 10;
    vertex(x, y);
  }
  endShape();
  pop();
}
