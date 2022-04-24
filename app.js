// Bildegalleri
var tilbake = document.getElementById("tilbakeKnapp");
var neste = document.getElementById("nesteKnapp");
var description = document.getElementById("description");
var bilde = document.getElementById("bilde");
var currentImage = 0;

var bilder = [
  {
  link: "img/Bildegalleri001.jpeg",
  text: "Rondane 2021"
},
{
  link: "img/Bildegalleri002.jpeg",
  text: "Svenneby Drivhus"
},
{
  link: "img/Bildegalleri003.jpeg",
  text: "Nanjing 2018"
},
{
  link: "img/Bildegalleri004.jpeg",
  text: "Taormina Togstasjon"
},
{
  link: "img/Bildegalleri005.jpeg",
  text: "Alma, Isabel og Lars"
},
{
  link: "img/Bildegalleri006.jpeg",
  text: "Ferje fra Sicilia"
}
];


tilbake.addEventListener("click", function(){
  currentImage = currentImage + 1;
  if(currentImage === bilder.length){
    currentImage = 0;
  }
bilde.src = bilder[currentImage].link;
description.textContent = bilder[currentImage].text;
});

neste.addEventListener("click", function(){
  currentImage = currentImage - 1;
  if(currentImage === - 1){
    currentImage = bilder.length - 1;
  }
bilde.src = bilder[currentImage].link;
description.textContent = bilder[currentImage].text
});
