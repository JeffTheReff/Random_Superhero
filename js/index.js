var Heros = ["Batman", "Superman", "Green Lantern", "Deadpool", "Hulk", "Captain America", "Thor", 
"Spiderman", "Wonderwoman", "Ant Man", "Iron Man", "Black Panther", "Doctor Strange", "Wolverine",
"Black Widow", "Ultron", "Loki", "Red Skull", "Magneto", "Scarecrow", "Poison Ivy", "Green Goblin",
"Hawkeye", "Quicksilver", "War Machine"]

function pickHero(){

var hero1 = Math.floor(Math.random()*Heros.length);

var hero2 = Math.floor(Math.random()*Heros.length);

document.getElementById('super').innerHTML = "<h1>"+Heros[hero1] + " vs "+Heros[hero2]+"</h1>"


}

