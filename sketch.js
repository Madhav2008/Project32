const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var score = 0;

function preload() {
    getBackgroundImage();
}

function setup() {
    createCanvas(1536, 720);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400, 200, 400, 30);
    ground2 = new Ground(700, 350, 400, 30);

    block1 = new Block(320, 190, 30, 30);
    block2 = new Block(340, 190, 30, 30);
    block3 = new Block(360, 190, 30, 30);
    block4 = new Block(380, 190, 30, 30);
    block5 = new Block(400, 190, 30, 30);
    block6 = new Block(420, 190, 30, 30);
    block7 = new Block(440, 190, 30, 30);
    block8 = new Block(460, 190, 30, 30);
    block9 = new Block(480, 190, 30, 30);
    block10 = new Block(340, 170, 30, 30);
    block11 = new Block(360, 170, 30, 30);
    block12 = new Block(380, 170, 30, 30);
    block13 = new Block(400, 170, 30, 30);
    block14 = new Block(420, 170, 30, 30);
    block15 = new Block(440, 170, 30, 30);
    block16 = new Block(460, 170, 30, 30);
    block17 = new Block(360, 150, 30, 30);
    block18 = new Block(380, 150, 30, 30);
    block19 = new Block(400, 150, 30, 30);
    block20 = new Block(420, 150, 30, 30);
    block21 = new Block(440, 150, 30, 30);
    block22 = new Block(380, 130, 30, 30);
    block23 = new Block(400, 130, 30, 30);
    block24 = new Block(420, 130, 30, 30);
    block25 = new Block(400, 110, 30, 30);

    block26 = new Block(620, 290, 30, 30);
    block27 = new Block(640, 290, 30, 30);
    block28 = new Block(660, 290, 30, 30);
    block29 = new Block(680, 290, 30, 30);
    block30 = new Block(700, 290, 30, 30);
    block31 = new Block(720, 290, 30, 30);
    block32 = new Block(740, 290, 30, 30);
    block33 = new Block(760, 290, 30, 30);
    block34 = new Block(780, 290, 30, 30);
    block35 = new Block(640, 270, 30, 30);
    block36 = new Block(660, 270, 30, 30);
    block37 = new Block(680, 270, 30, 30);
    block38 = new Block(700, 270, 30, 30);
    block39 = new Block(720, 270, 30, 30);
    block40 = new Block(740, 270, 30, 30);
    block41 = new Block(760, 270, 30, 30);
    block42 = new Block(660, 290, 30, 30);
    block43 = new Block(680, 290, 30, 30);
    block44 = new Block(700, 290, 30, 30);
    block45 = new Block(720, 290, 30, 30);
    block46 = new Block(740, 290, 30, 30);
    block47 = new Block(680, 310, 30, 30);
    block48 = new Block(700, 310, 30, 30);
    block49 = new Block(720, 310, 30, 30);
    block50 = new Block(700, 330, 30, 30);
    polygon = new Polygon(1300, 500, 20);
    slingShot = new SlingShot(polygon.body, { x: 1300, y: 100 });
}

function draw() {
    if (backgroundImg)
        background(backgroundImg);

    strokeWeight(4);

    ground1.display();
    ground2.display();

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
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display();
    block48.display();
    block49.display();
    block50.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
    block33.score();
    block34.score();
    block35.score();
    block36.score();
    block37.score();
    block38.score();
    block39.score();
    block40.score();
    block41.score();
    block42.score();
    block43.score();
    block44.score();
    block45.score();
    block46.score();
    block47.score();
    block48.score();
    block49.score();
    block50.score();

    slingShot.display();
    polygon.display();

    drawSprites();

    strokeWeight(10);
    stroke("lightgreen");
    fill("magenta");
    textSize(80);
    text("DRAG THE STONE & RELEASE IT,", 100, 500);
    text("TO LAUNCH IT TOWARDS THE BLOCKS", 10, 650);
    textSize(50);
    text("PRESS SPACE TO GET SECOND CHANCE", 500, 50);
    text("SCORE : " + score, 50, 50);
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(polygon.body);
    }
}

function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(polygon.body);
    }
}
async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if (hour >= 06 && hour <= 18) {
        bg = "bg1.png";
    } else {
        bg = "bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}