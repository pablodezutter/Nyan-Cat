//Als er op de button geklikt wordt, komt er een img van Nyancat in de body

//wat is de button
var button = document.getElementById("btn-cat");

//wat is de img
/*var naam = ["text1", "text2"];
naam[0].style.left = "0";
naam[1].style.top = "50px";*/
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
  nyancat.setAttribute("width", "50px");
  
 // console.log (nyancat);
  catmove();
 
  function catmove(){
   var element=document.getElementsByClassName("animationcat");
   console.log(element);
   var pos=0;
   var id= setInterval(frame,5);
   function frame(){
     if (pos== 200){
     clearInterval(id);
   }
   else {
   pos++;
   element[0].style.top= pos +"px";
   element[0].style.left= pos +"px";
    }
   }

 }
  }
  




//Animation:
//1.Nyancat valt schuin (45°) naar beneden
//var fallingcat= document.getElementsByClassName ("animationcat")



//2.Meerdere Nyancats vallen naar beneden
//Functie schrijven om méér elementen te creëren

//3.Background verandert naar Nyan bg



//4.Nyancats vallen 10 seconden
//5.Soundtrack
