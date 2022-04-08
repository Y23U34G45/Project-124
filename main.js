function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#6C91C2');
}
function modalLoaded(){
    console.log('Posenet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}
