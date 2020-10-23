// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    fill(65);
    let k = i + j
    if(k % 2 == 1){
        rect(size * i, size * j, size, size);
        fill(120);
        if(j <= 2){
          fill('red')
          ellipse(size * (i + 0.5), size * (j + 0.5), size - 5)
        }
        else if(j >= 5){
          fill('black')
          ellipse(size * (i + 0.5), size * (j + 0.5), size - 5)
        }
      }
  }
  }
}
