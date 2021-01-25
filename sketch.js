const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20);
    box = new Box(70,50,50,50);
    box1 = new Box(90,25,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box.display();
    box1.display();
}
