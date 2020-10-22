// 小手調べ
function setup(){
  for(let i = 50; i > 40; i = i - 2){
    // BLANK[1]
    noFill();
    stroke(0, 0, 255);
    ellipse(50, 50, i);
  }
}
