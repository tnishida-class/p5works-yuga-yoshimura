// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background('blue');
  fill('yellow');
  star(150, 100, 50);
}

function star(cx, cy, r){
  push();
  beginShape();
  for(var i = 0; i < 12; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * 50;
    const y = cy + sin(theta) * 50;
    vertex(x, y);
  }
  endShape();
  pop();
}
