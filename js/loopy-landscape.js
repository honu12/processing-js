var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere
background(144, 240, 234);

// Draw the sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

// Draw the tree and grass once
var x = 0;
while (x < 301) {
    image(grass, x, 270);
    image(tree, x, 200);
    x += 100;

}


}};