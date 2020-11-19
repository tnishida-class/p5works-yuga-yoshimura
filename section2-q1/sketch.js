// 小手調べ
function setup(){
  for(let i = 100; i > 0; i = i - 10){
    // BLANK[1]
    noFill();
    if(i < 50){
      stroke(0, 0, 255);
    }
    else{
      stroke(255, 0, 0);
    }
    ellipse(50, 50, i);
  }
}
