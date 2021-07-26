function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(40, 275);
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw() {
    image(video, 0,0,450,450);
    tint(tintcolor);
}

function take_snapshot() {
    save("myimage.png");
}

function addtint() {
    tintcolor = document.getElementById("color").value;
}