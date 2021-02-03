//Create variables here
var dog, happyDog, database, foods, foodStock, dogimg, happyDogimg;
function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readstock)
  dog.scale = 0.25;
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogimg);
  }

  drawSprites();
  //add styles here
  textSize()

}

function readstock(data){
foods = data.val()
}

function writeStock(x){
  if(x>=0){
    x = 0
  } else{
    x = x-1;
  }

  database.ref('/').update({
    Food : x
  });
}