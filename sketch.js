function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);

  let x = width / 2;
  let y = height / 2;


  fill(194, 140, 80);


  rect(x - 40, y + 48, 70, 20, 3);
  rect(x + 40, y + 48, 70, 20, 3);

  rect(x, y, 20, 70, 3);

  rect(x - 40, y - 48, 70, 20, 3);
  rect(x + 40, y - 48, 70, 20, 3);
}