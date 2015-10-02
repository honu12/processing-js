var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var answer = floor(random(1, 20));

if (answer > 19) {
    text("It is ", 190, 200);
    text("certain", 179, 229);
}

else if (answer > 18) {
    text("Without", 176, 200);
    text("a doubt", 176, 229);
}

else if (answer > 17) {
    text("It is", 190, 200);
    text("decidedly so", 163, 229);
}

else if (answer > 16) {
    text("Yes", 188, 200);
    text("definitely", 174, 229);
}

else if (answer > 15) {
    text("You may", 176, 200);
    text(" rely on it", 172, 229);
}

else if (answer > 14) {
    text("As I ", 190, 200);
    text("see it, yes", 172, 229);
}

else if (answer > 13) {
    text("Most", 185, 200);
    text("likely", 185, 229);
}

else if (answer > 12) {
    text("Outlook", 179, 200);
    text("good", 185, 229);
}

else if (answer > 11) {
    text("Yes", 190, 200);
}

else if (answer > 10) {
    text("Signs", 184, 200);
    text("point to yes", 168, 229);
}

else if (answer > 9) {
    text("Reply", 184, 200);
    text("hazy try again", 164, 229);
}

else if (answer > 8) {
    text("Ask", 190, 200);
    text("again later", 171, 229);
}

else if (answer > 7) {
    text("Better not", 173, 200);
    text("tell you now", 167, 229);
}

else if (answer > 6) {
    text("Cannot", 178, 200);
    text("predict now", 167, 229);
}

else if (answer > 5) {
    text("Concentrate", 165, 200);
    text("and ask again", 161, 229);
}

else if (answer > 4) {
    text("Don't ", 183, 200);
    text("count on it", 169, 229);
}

else if (answer > 3) {
    text("My", 194, 200);
    text("reply is no", 172, 229);
}

else if (answer > 2) {
    text("My", 194, 200);
    text("sources say no", 160, 229);
}

else if (answer > 1) {
    text("Outlook", 178, 200);
    text("not so good", 168, 229);
}

else {
    text("Very", 187, 200);
    text("doubtful", 177, 229);
}






}};