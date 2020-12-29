
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var score=0
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ground= new Ground(600,height,1200,20)
	platform1= new Ground(200,500,400,20)
	platform2= new Ground(600,250,400,20)

	//for platform 1 
	//level 4
	block1=new Box(230,450,30,40)
	block2=new Box(260,450,30,40)
	block3=new Box(290,450,30,40)
	block4=new Box(320,450,30,40)
	block5=new Box(350,450,30,40)
	block6=new Box(380,450,30,40)
	block7=new Box(410,450,30,40)
	//level 3 
	block8=new Box(260,410,30,40)
	block9=new Box(290,410,30,40)
	block10=new Box(320,410,30,40)
	block11=new Box(350,410,30,40)
	block12=new Box(380,410,30,40)	
   
	//level 2 
	block13=new Box(290,370,30,40)
	block14=new Box(320,370,30,40)
	block15=new Box(350,370,30,40)

	//top level
	block16=new Box(320,330,30,40)

	//for platform 2
	//level 4
	block17=new Box(630,200,30,40)
	block17=new Box(660,200,30,40)
	block19=new Box(690,200,30,40)
	block20=new Box(720,200,30,40)
	block21=new Box(750,200,30,40)
	block22=new Box(780,200,30,40)
	block23=new Box(810,200,30,40)
		//level 3 
		block24=new Box(660,160,30,40)
		block25=new Box(690,160,30,40)
		block26=new Box(720,160,30,40)
		block27=new Box(750,160,30,40)
		block28=new Box(780,160,30,40)	
	   
		//level 2 
		block29=new Box(690,120,30,40)
		block30=new Box(720,120,30,40)
		block31=new Box(750,120,30,40)
	
		//top level
		block32=new Box(720,90,30,40)

		polygon=new Polygon(50,200,20)
		slingshot=new Slingshot(polygon.Body,{x:200,y:500})
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("SCORE",+score,750,40)
  drawSprites();
  ground.display()
  platform1.display()
  platform2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()	
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()	
  block29.display()
  block30.display()
  block31.display()
  block32.display()
  polygon.display()
  slingshot.display()
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
