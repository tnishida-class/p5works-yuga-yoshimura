// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(i + j % 50 == 25){
        rect(i * 20, j * 20 ,25 ,25);
      fill(120)
      }
      else{
        ellipse(i + 10, j + 10, 10)
      }
  }
}
}
