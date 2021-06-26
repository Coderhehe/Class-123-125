function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550)
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotResult);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw() {
    background(51);
}


function gotResult(result) {
   if(result.length > 0){
console.log(result);
   } 
}