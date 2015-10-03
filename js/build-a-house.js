var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere
background(219, 255, 255);

//Roof
fill(163, 169, 204);
triangle(200, 28, 350, 150, 50, 150);

//Wall
fill(209, 193, 129);
rect(60, 150, 280, 207);

//Door
fill(120, 80, 19);
rect(242, 280, 40, 77);

//Grass
for (var i = 0; i < 41; i++) {
    fill(38, 255, 0);
    ellipse(i * 10, 380, 5, 60);
}

//Top Windows
for (var j = 0; j < 3; j++) {
    stroke(10, 9, 9);
    fill(212, 204, 204);
    rect(108 + (j*80) , 174, 20, 20);
}

//Bottom Window
for (var h = 0; h < 3; h++) {
    stroke(10, 9, 9);
    fill(212, 204, 204);
    rect(108 + (h * 20), 253, 20, 20);
    rect(108 + (h * 20), 273, 20, 20);
    rect(108 + (h * 20), 293, 20, 20);
}

//Sun
noStroke();
fill(245, 252, 33);
ellipse(375, 25, 100, 100);










}};