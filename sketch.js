var bg,bgImg;
var player, shooterImg, shooter_shooting;
var manga, manga_podre, abelha, mel;
var abelha_fim;
var mangas, mangas_podres, meis;


function preload(){
  shooterImg = loadImage("assets/shooter_2.png");
  bgImg = loadImage("assets/bg.jpeg");
  manga = loadImage("assets/manga_boa.jpg");
  manga_podre = loadImage("assets/manga_podre.jpg");
  abelha = loadImage("assets/abelha.jpg");
  mel = loadImage("assets/pote_mel.jpg");
  abelha_fim = loadImage("assets/abelha_fim.jpg");
}

function setup() {
 
createCanvas(windowWidth,windowHeight);
//adicione a imagem de fundo
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;
  
//crie o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(shooterImg);
player.scale = 0.3;
player.debug = true;
player.setCollider("rectangle",0,0,300,300);

mangas = new Group();
mangas_podres = new Group();
meis = new Group();

addSprites(mangas, 6, manga, 0.2);
addSprites(mangas_podres, 6, manga_podre, 0.02)
addSprites(meis, 6, mel, 0.2);
}

function draw() {
background(0); 
 
if(keyDown("UP_ARROW")|| touches.length>0){
  player.y = player.y-10;
}

if(keyDown("DOWN_ARROW")|| touches.length>0){
 player.y = player.y+10;
}

if(keyDown("LEFT_ARROW")|| touches.length>0){
  player.x = player.x-10;
}

if(keyDown("RIGHT_ARROW")|| touches.length>0){
  player.x = player.x+10;
}

criarAbelhas();
drawSprites();

}

function addSprites(spriteGroup, numberOfSprites, imageSprite, scale){
  for(var i = 0; i< numberOfSprites; i++){
    var x, y;

    x = random(width/2 + 500, width/2 - 500);
    y = random(height/2 + 500, height/2 - 500);

    var sprite = createSprite(x, y);
    sprite.addImage("sprite", imageSprite);
    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}

function criarAbelhas(){
  if(frameCount % 60 === 0){
    abelhinha = createSprite(random(0, 1000), random(500, 1000), 40, 40);
    abelhinha.addImage(abelha);
    abelhinha.scale = 0.1;
    abelhinha.velocityX = -3;

    abelhinha.lifeTime = 600;
  }
}
