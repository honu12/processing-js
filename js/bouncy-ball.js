var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);

//ProgramCodeGoesHere
// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

var draw = function() {
    background(127, 204, 255);

    fill(66, 66, 66);
    ellipse(200, y, 50, 50);

    if (y > 375) {
        speed = -2;
    }

    if (y < 25) {
        speed = 2;
    }

    // move the ball
    y = y + speed;
};


}};