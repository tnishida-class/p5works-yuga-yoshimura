// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
  createCanvas(100, 100)
  ellipse(50, 50, i)
  if(0 <= i <= 5){
    stroke(0, 0, 255);
    }
  else(5 < i <= 10){
    stroke(255, 0, 0);
    }
  }
}
