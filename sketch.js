const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pendulum1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let option = {

        mouse : canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, option);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum(200, 200, "blue");



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    pendulum1.display();

}
function mouseDragged(){

    Matter.body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}