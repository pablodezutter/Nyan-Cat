//Als er op de button geklikt wordt, komt er een img van Nyancat in de body

//wat is de button
var button = document.getElementById("btn-cat");

//wat is de img

 var nyancat = document.createElement('img');
console.log (nyancat);
//welke handeling (click)

button.addEventListener ('click', mouseClick);

function mouseClick(){
  // if (document.getElementById("btn-cat")) {
  //
  // }
  var element = document.body.appendChild (nyancat);
  nyancat.src="nyan_cat.png";
  nyancat.id="cat";
  nyancat.className="animationcat"
  nyancat.style.width="100px";
  nyancat.style.height="100px";
  
  
  


  }
  




//Animation:
//1.Nyancat valt schuin (45°) naar beneden
var fallingcat= document.getElementsByClassName ("cat")
nyancat.style


//2.Meerdere Nyancats vallen naar beneden
//3.Background veranderd naar Nyan bg
var 
function mouseClick(){


//4.Nyancats vallen 10 seconden
//5.Soundtrack
