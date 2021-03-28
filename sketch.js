const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

const diameter = 50;

let ball1, ball2, ball3, ball4, ball5;
let chain1, chain2, chain3, chain4, chain5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width / 2, 100);

	ball1 = new Ball(width / 2 - diameter * 2, 500);
	ball2 = new Ball(width / 2 - diameter, 500);
	ball3 = new Ball(width / 2, 500);
	ball4 = new Ball(width / 2 + diameter, 500);
	ball5 = new Ball(width / 2 + diameter * 2, 500);

	chain1 = new Chain(ball1.body, roof.body, -diameter * 2, 0);
	chain2 = new Chain(ball2.body, roof.body, -diameter, 0)
	chain3 = new Chain(ball3.body, roof.body, 0, 0);
	chain4 = new Chain(ball4.body, roof.body, +diameter, 0);
	chain5 = new Chain(ball5.body, roof.body, +diameter * 2, 0);
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	frameRate(50);
	background(0);

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	noStroke();
	roof.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	if(mouseIsPressed){
		Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
	}
}