img="";
status1="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(650,500);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function draw(){
image(img,0,0,650,500);
fill("#9c1f1f");
text("Dog", 150,100);
noFill();
stroke("#9c1f1f");
rect(100,50,300,400);

fill("#4fe8d1");
text("Cat",400,150);
noFill();
stroke("#4fe8d1");
rect(300,100,300,300);

}
function modelloaded(){
    console.log("modelloaded");
    status1=true;
    objectDetector.detect(img,gotresult());

}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}