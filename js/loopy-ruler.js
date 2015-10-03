var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere
fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
while(x < 351) {
    text(x, x, 10);

    x += 50;
}

var y = 0;
while(y < 351) {
    text(y, 10, y);
    y += 50;
}

}};