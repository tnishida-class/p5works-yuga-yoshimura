// 小手調べ
function setup(){
  for(let i = 50; i > 0; i = i - 10){
    // BLANK[1]
    noFill();
    stroke(0, 0, 255);
    ellipse(50, 50, i);
  }
}
