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
  nyancat.style.width="100px";
  nyancat.style.height="100px";
}

//Animation:

// function myMove() {
//   var elem = document.getElementById("cat");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
