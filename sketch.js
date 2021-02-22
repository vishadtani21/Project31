const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionheight = 300;


function setup() {
 var canvas = createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;


  for (var d=0; d<=width ; d=d+50){
    divisions.push(new Division (d,height-divisionheight/2,10,divisionheight))
  }

  for (var p=40; p<=width ; p=p+50){
    plinkos.push(new Plinko (p,105,10))
  } 

  for(var p=40; p<=width-40; p=p+50){
    plinkos.push(new Plinko(p,145,10))
  }

  for(var p=40; p<=width-40; p=p+50){
    plinkos.push(new Plinko(p,185,10))
  }

  for(var p=40; p<=width-40; p=p+50){
      plinkos.push(new Plinko(p,225,10))
  }

  ground = new Ground (240,height,480,20);

}

function draw() {
  background(0);  
  Engine.update(engine);
  
 for(d=0; d<divisions.length;d++){
  divisions[d].display();
}
 
for(p=0; p<plinkos.length;p++){
 plinkos[p].display();
}

if(frameCount%50===0){
 particles.push(new Particle(random(250,450),10,10))

}

for(p=0; p <particles.length;p++){
 particles[p].display();
}

ground.display();

}