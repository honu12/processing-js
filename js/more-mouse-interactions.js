var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere

var position = 20;
var speed = 3;

var draw = function() {
    background(202, 255, 97);

    fill(66, 66, 66);
    position = position + speed;
    // mouseX and mouseY
    // mouseIsPressed
    ellipse(position, mouseY, 50, 50);
    if (mousePressed) {
        ellipse(mouseX, position, 50, 50);
    }

    if (position > 375) {
        speed = -5;
    }
    if (position < 25) {
        speed = 5;
    }
};


}};