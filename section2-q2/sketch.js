// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let k = i + j
      if(k % 2 == 1){
        rect(i * 25, j * 25 ,25 ,25);
        fill(120)
      }
      else{}
      rect(0, 25, 25, 25)

      if(background != 196){
        ellipse((i - 0.5) * 25, (j - 0.5) * 25, 20, color(255, 0, 0))
      }
        else{
        }

  }
}
}
