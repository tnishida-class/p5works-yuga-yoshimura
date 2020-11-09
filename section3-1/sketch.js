// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background('blue');
  fill('yellow');
  star(150, 100, 50);
}

function setup(){
  createCanvas(200, 200);
  background(192);
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
    const x = 100 + cos(theta) * 50; // 関数 cos の戻り値を使用
    const y = 100 + sin(theta) * 50; // 関数 sin の戻り値を使用
    ellipse(x, y, 10); // 関数 ellipse の副作用で円が描画される
  }
}
