let a;
let r;
let size;
let FOUR_PI;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(100, 0, 100);
    a = 0;
    r = 50;
    size = 140;
    FOUR_PI = PI * 4;

}

function draw() {
    background(200, 200, 200, 10);
    translate(windowWidth / 2, windowHeight / 2);
    x = r * cos(a);
    y = r * sin(a);
    y1 = r * cos(a) + r * 1.3;
    if (a % FOUR_PI < TWO_PI) {
        ellipse((x * -1) + r, y, size);
        ellipse((x * -1) + r, y1, size);
    } else {
        ellipse(x - r, y, size);
        ellipse(x - r, y1, size);
    }
    a += 0.04;

}

function mousePressed() {
    // size += 5;
    fill(random(255), random(255), random(255));
}