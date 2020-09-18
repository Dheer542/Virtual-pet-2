//Create variables here
var  dog, happyDog, database, foodS, foodStock, milkBottle;
var FeedTime, lastFed, foodObj;
var Milk;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("happydog.png");
  milkBottle = loadImage("images/Milk.png");

}

function setup() {
	createCanvas(800, 600);
  dog=createSprite(250,300,150,150);
   dog.addImage(dogImg);
    dog.scale=0.15;
    database = firebase.database();
    console.log(database);
    foodStock=database.ref('Food');
    foodStock.on("value", readStock);

    feed = createButton("Feed The Dog");
    feed.position(700,95);
    feed.mousePressed(addFoods);

    addFood = createButton("Add Food");
    addFood.position(800,95);
    addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87);
fill(255,255,254);
textSize(15);
if (lastFed>=12) {
  text("Last Feed : "+lastFed%12 + "PM",350,30);
} else if (lastFed ==0) {
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed : "+lastFed + "AM",350,30);
}
 
  drawSprites();
  //add styles here

}
function readStock(data){
  database.ref('Food');
}
function writeStock(data){
 text("Note : Press UP ARROW key To Feed Dog Milk", 450, 250);
}
function feedDog() {
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
foodS++;
database.ref('/').update({
  Food:foodS
})
}

