nosex=0;
nosey=0;
difference=0;
leftwx=0;
rightwx=0;
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
document.getElementById("spansquare").innerHTML="Width And Height Of Square Is "+difference+" Pixels";
fill("#fcf403");
stroke("#fcf403");
square(nosex,nosey,difference);
}


function gotResult(result) {
   if(result.length > 0){
console.log(result);
nosex=result[0].pose.nose.x;
nosey=result[0].pose.nose.y;
console.log("Nose X = "+nosex+" Nose Y = "+nosey);
leftwx=result[0].pose.leftWrist.x;
rightwx=result[0].pose.rightWrist.x;
difference=floor(leftwx-rightwx)
   } 
}