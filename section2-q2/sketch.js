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
        rect(size*i, size*j, size, size);
        fill(120);
      }
      if(k % 2 == 0 && i != j){
        fill(255, 0, 0)
        ellipse(size * (i - 0.5), size * (j - 0.5), size/2)
      }
      else{}





  }
    }
}
