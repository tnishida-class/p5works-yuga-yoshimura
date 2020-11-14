// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("こんにちわっしょい!!");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 30;
  fill(255, 0, 255);
  rect(p, 0, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
}
