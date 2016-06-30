var Heros = ["<img src='../assets/Batman.jpg'>",
"<img src='../assets/Superman.jpg'>",
"<img src='../assets/GreenLantern.jpg'>",
"<img src='../assets/Deadpool.jpg'>",
"<img src='../assets/Hulk.jpg'>",
"<img src='../assets/Captain.jpg'>",
"<img src='../assets/Thor.jpg'>",
"<img src='../assets/Spider.jpg'>",
"<img src='../assets/Wonder.jpg'>",
"<img src='../assets/Ant.jpg'>",
"<img src='../assets/Iron.jpg'>",
"<img src='../assets/Black.jpg'>",
"<img src='../assets/Doctor.jpg'>",
"<img src='../assets/Wolverine.jpg'>",
"<img src='../assets/BlackWidow.jpg'>",
"<img src='../assets/Ultron.jpg'>",
"<img src='../assets/Loki.jpg'>",
"<img src='../assets/Red.jpg'>",
"<img src='../assets/Magneto.jpg'>",
"<img src='../assets/Scare.jpg'>",
"<img src='../assets/Poison.jpg'>",
"<img src='../assets/Green.jpg'>",
"<img src='../assets/Hawk.jpg'>",
"<img src='../assets/Quick.jpg'>",
"<img src='../assets/War.jpg'>",
"<img src='../assets/Flash.jpg'>"
]

function pickHero(){

var hero1 = Math.floor(Math.random()*Heros.length);

var hero2 = Math.floor(Math.random()*Heros.length);

document.getElementById('super').innerHTML = "<h1>"+Heros[hero1] + " vs"+Heros[hero2]+"</h1>"


}

