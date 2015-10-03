var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere

var xPositions = [100, 300];
var yPositions = [200, 250];

var drawStars = function() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

var mouseClicked = function () {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    drawStars();
};



}};