//Als er op de button geklikt wordt, komt er een img van Nyancat in de body

//wat is de button
var button = document.getElementById(button);

//wat is de img

 var nyancat = document.createElement("img");

//welke handeling (click)

  button.addEventListener ('click', mouseClick);

function mouseClick(){
  if (document.getElementById("button")) {
    return;

  }
  var element = document.createElement("img");
  nyancat.src="nyan_cat.png";
  nyancat.id="cat";

  }
