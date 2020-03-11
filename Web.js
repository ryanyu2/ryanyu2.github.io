function setup() {
    createCanvas(1355, 685);
    //background
    background(232, 39, 26); //red background
    print("code")
}

function draw() {

    //ellipse
    noStroke();
    fill(64, 232, 26, 100); //green squares
    rect(mouseX, mouseY, 25, 25);
}

function mousePressed() {
    background(232, 39, 26);
}