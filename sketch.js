const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28;
var block29,block30,block31;
var block32;
var string,ball;

function setup()
{
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,480,1000,20); 

    stand1 = new Ground(500,350,140,20);

    stand2 = new Ground(800,250,140,20);

    block1 = new Box(440,327,20,30);

    block2 = new Box(460,327,20,30);

    block3 = new Box(480,327,20,30);

    block4 = new Box(500,327,20,30);

    block5 = new Box(520,327,20,30);

    block6 = new Box(540,327,20,30);

    block7 = new Box(560,327,20,30);

    block8 = new Box(460,298,20,30);

    block9 = new Box(480,298,20,30);

    block10 = new Box(500,298,20,30);

    block11 = new Box(520,298,20,30);

    block12 = new Box(540,298,20,30);

    block13 = new Box(480,268,20,30);

    block14 = new Box(500,268,20,30);

    block15 = new Box(520,268,20,30);

    block16 = new Box(500,238,20,30);

    block17 = new Box(740,230,20,30);

    block18 = new Box(760,230,20,30);

    block19 = new Box(780,230,20,30);

    block20 = new Box(800,230,20,30);

    block21 = new Box(820,230,20,30);

    block22 = new Box(840,230,20,30);

    block23 = new Box(860,230,20,30);

    block24 = new Box(760,207,20,30);

    block25 = new Box(780,207,20,30);

    block26 = new Box(800,207,20,30);
    
    block27 = new Box(820,207,20,30);

    block28 = new Box(840,207,20,30);

    block29 = new Box(780,177,20,30);

    block30 = new Box(800,177,20,30);

    block31 = new Box(820,177,20,30);

    block32 = new Box(800,147,20,30);

    ball = new Ball(200,250,40);

    string = new SlingShot(ball.body,{x:200,y:250});

    Engine.run(engine);

}

function draw()
{
    background("black");
    Engine.update(engine);

    ground.display();

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    
    ball.display();
    string.display();
    
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
}

function mouseReleased()
{
    string.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
       string.attach(ball.body);
    }
}
