//Als er op de button geklikt wordt, komt er een img van Nyancat in de body

//wat is de button
var button = document.getElementById("btn-cat");

//wat is de img
/*var naam = ["text1", "text2"];
naam[0].style.left = "0";
naam[1].style.top = "50px";*/
//welke handeling (click)

//constante aanmaken om bodyelement te benoemen en  terug te vinden in array:

//const body = document.getElementsByTagName("body")[0];

document.getElementById("btn-cat").addEventListener ('click', regen);

function createCat(){
  var nyancat = document.createElement('img');
  
  
  nyancat.src="nyan_cat.png";
  nyancat.className="animationcat";
   nyancat.style.transform= "none";

  
  //parseINt = neem het cijfergedeelte van het resultaat
let linkerPositie= Math.floor(parseInt(document.body.clientWidth)*Math.random());
 linkerPositie*= Math.floor(Math.random()*2)==1 ? 1 : -1;
  //Math floor rond af, Math. random: kiest getal tussen 0 en 1, is het 1 dan uitkomst = 1, is het 0 dan uitkomst -1
  nyancat.style.left= linkerPositie + "px";
  nyancat.style.top= "-150px";
  document.body.appendChild (nyancat);
 
  return nyancat;



 // console.log (nyancat);
 // console.log (linkerPositie);
  
  
  
}

function regen(){
  document.body.style.backgroundImage="url('bckground_nyan.png')";
  var regeninterval = setInterval(function(){
  var cat= createCat ();
  catmove (cat);
  
  }, 100);
  setTimeout (function(){
    clearInterval(regeninterval);
    catsGone(); 
    document.body.style.backgroundImage= "none";
  },10000);
}  







  function catmove(cat){
    console.log(cat.style.left);
    //console.log(100vw);
     
    let linkerPositie= parseInt(cat.style.left) + parseInt(document.body.clientWidth);
    //nieuwe random linkerpositie voor de animatie
    var snelheid = Math.random()* 7;//*linkerPositie)/10 +2;
   //var snelheid = 3;
    //var vertraging = 1;
    var vertraging = Math.floor (Math.random ()* (parseInt(document.body.clientWidth)/100));
    cat.style.transition = "all " + snelheid + "s ease-in " + vertraging + 's';
    cat.style.left = linkerPositie +"px"; 
    cat.style.top = "100vh";

  }

  function catsGone(){
    var alleKatten = document.getElementsByClassName("animationcat");
    while(alleKatten[0] != undefined ){
      console.log("cat nr " );
      alleKatten[0].remove();


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
