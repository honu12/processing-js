var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere

var paintBrush = {
    x: 100,
    y: 100,
    img: getImage("avatars/leafers-seedling")
};

var paintCanvas = function() {
        imageMode(CENTER);
        image(paintBrush.img, paintBrush.x, paintBrush.y);
    };

var mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;

    paintCanvas();
};




}};