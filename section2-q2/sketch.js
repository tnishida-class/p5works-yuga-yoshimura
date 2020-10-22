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

      else if(background != 196){
        circle((i + 0.5) * 25, (j + 0.5) * 25, 20)
        stroke(255, 0, 0)
      }
      else{}

    }


  }
}
