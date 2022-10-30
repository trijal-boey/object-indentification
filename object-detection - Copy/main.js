img=""

function preload(){
    img=loadImage("nedroom.jpg");
}

function setup(){
    canvas= createCanvas(500,600);
    canvas.center();
}

function draw(){
    image(img,0,0,400,500);
    fill("#ae4a60")
    text("bed",45,320);
    noFill();
    stroke("#ae4a60");
    rect(30,300,350,150);
}