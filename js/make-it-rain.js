var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere

var xPositions = [50, 100, 150, 200, 250, 300, 350, ];
var yPositions = [150, 50, 90, 125, 60, 80, 117];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 8, 8);
        yPositions[i] += 5;

        if(yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
};

var mouseClicked = function() {
    xPositions.push(random(0,400));
    xPositions.push(random(0,400));
    xPositions.push(random(0,400));
    xPositions.push(random(0,400));
    xPositions.push(random(0,400));

    yPositions.push(random(0,400));
    yPositions.push(random(0,400));
    yPositions.push(random(0,400));
    yPositions.push(random(0,400));
    yPositions.push(random(0,400));
    yPositions.push(random(0,400));
    //when the mouse is pressed, it 'pushes' a new variable to the xPositions and yPositions arrays.  Although it does not show it on the variables at the top it does add more to them.  I hope this helped you in some way. Cheers! -Afton ☺
};

}};