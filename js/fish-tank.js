var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);

//ProgramCodeGoesHere

background(89, 216, 255);

//define functions
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

var drawSeaweed = function(X, Y) {
    stroke(31, 25, 25);
    fill(88, 232, 98);
    ellipse(X, Y, 20, 400);
};

var drawPebble = function(pebbleX, pebbleY) {
    stroke(28, 25, 28);
    fill(30, 30, 115);
    ellipse(pebbleX, pebbleY, 20, 10);
};

// call functions
drawPebble(131, 392);
drawPebble(191, 392);
drawPebble(232, 392);
drawPebble(277, 392);
drawPebble(330, 392);
drawPebble(379, 392);
drawPebble(32, 392);
drawPebble(85, 392);
drawPebble(218, 392);
drawPebble(198, 382);
drawPebble(143, 382);
drawPebble(62, 382);
drawPebble(78, 382);
drawPebble(114, 382);
drawPebble(28, 382);
drawPebble(237, 382);
drawPebble(316, 382);
drawPebble(356, 382);
drawPebble(393, 382);
drawPebble(264, 382);

drawSeaweed(100, 400);
drawFish(100, 200, 75, 118, color(133, 31, 123));
drawFish(300, 203, 100, 75, color(227, 220, 143));
drawFish(200, 50, 115, 115, color(26, 199, 173));
drawSeaweed(250, 258);
drawFish(140, 320, 80, 80, color(255, 0, 98));
drawFish(280, 290, 100, 75, color(119, 81, 176));
drawSeaweed(373, 357);
drawFish(240, 125, 120, 75, color(222, 159, 13));
drawFish(50, 75, 75, 120, color(136, 255, 0));
drawSeaweed(20, 400);

drawPebble(364, 392);
drawPebble(349, 392);
drawPebble(254, 392);
drawPebble(306, 392);
drawPebble(218, 392);
drawPebble(290, 392);
drawPebble(175, 392);
drawPebble(154, 392);
drawPebble(115, 392);
drawPebble(8, 392);
drawPebble(52, 392);

}};