const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bgImg ;

var response;
var responseJSON;
var dateTime;
var hour;


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    {
        background(backgroundImg);
    }
    
    textSize(30);
    if(hour >= 0 && hour <= 22)
    {
        fill(0);
    }
    else
    {
        fill(255);
    }

    if(hour >= 0 && hour <= 12)
    {
        text("AM", 125, 100);
    }
    else
    {
        text("PM", 230, 100);
    }

    text("Time : " + hour, 100, 100);

    Engine.update(engine);

}

async function getBackgroundImg(){

    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    responseJSON = await response.json();
    dateTime = responseJSON.datetime;
    hour = dateTime.slice(11, 13);
    console.log(hour);
    if(hour >= 04 && hour <= 06)
    {
        bgImg = "sunrise1.png";
    }
    else if(hour >= 06 && hour <= 08)
    {
        bgImg = "sunrise2.png";
    }
    else if(hour >= 08 && hour <= 10)
    {
        bgImg = "sunrise3.png";
    }
    else if(hour >= 10 && hour <= 12)
    {
        bgImg = "sunrise4.png";
    }
    else if(hour >= 12 && hour <= 14)
    {
        bgImg = "sunrise5.png";
    }
    else if(hour >= 14 && hour <= 16)
    {
        bgImg = "sunrise6.png";
    }
    else if(hour >= 16 && hour <= 18)
    {
        bgImg = "sunset7.png";
    }
    else if(hour >= 18 && hour <= 20)
    {
        bgImg = "sunset8.png";
    }
    else if(hour >= 20 && hour <= 22)
    {
        bgImg = "sunset9.png";
    }
    else if(hour >= 22 && hour <= 24)
    {
        bgImg = "sunset10.png";
    }
    else if(hour >= 24 && hour <= 02)
    {
        bgImg = "sunset11.png";
    }
    else
    {
        bgImg = "sunset12.png";
    }
    backgroundImg = loadImage(bgImg);
    console.log(backgroundImg);

}
