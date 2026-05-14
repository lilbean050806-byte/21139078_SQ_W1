let currentColor;
let brushSize = 10;

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255);

  currentColor = color(0);

  createUI();
}

function draw() {

  // Drawing
  if (mouseIsPressed && mouseY > 60) {
    stroke(currentColor);
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function createUI() {

  // Red button
  let redBtn = createButton("Red");
  redBtn.position(10, 10);
  redBtn.mousePressed(() => {
    currentColor = color(255, 0, 0);
  });

  // Blue button
  let blueBtn = createButton("Blue");
  blueBtn.position(60, 10);
  blueBtn.mousePressed(() => {
    currentColor = color(0, 100, 255);
  });

  // Green button
  let greenBtn = createButton("Green");
  greenBtn.position(120, 10);
  greenBtn.mousePressed(() => {
    currentColor = color(0, 255, 100);
  });

  // Black button
  let blackBtn = createButton("Black");
  blackBtn.position(190, 10);
  blackBtn.mousePressed(() => {
    currentColor = color(0);
  });

  // Eraser
  let eraserBtn = createButton("Eraser");
  eraserBtn.position(260, 10);
  eraserBtn.mousePressed(() => {
    currentColor = color(255);
  });

  // Clear canvas
  let clearBtn = createButton("Clear");
  clearBtn.position(330, 10);
  clearBtn.mousePressed(() => {
    background(255);
  });

  // Save button
  let saveBtn = createButton("Save");
  saveBtn.position(390, 10);
  saveBtn.mousePressed(() => {
    saveCanvas("myDrawing", "png");
  });

  // Brush size slider
  slider = createSlider(1, 50, 10);
  slider.position(470, 15);
}

function mouseDragged() {
  brushSize = slider.value();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}