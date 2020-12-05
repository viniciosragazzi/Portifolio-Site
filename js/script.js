let x = document.getElementById("myAudio"); 
let playA = document.querySelector(".play"); 
let pauseA = document.querySelector(".pause");
let mutarA = document.querySelector(".mutar");
let desmutarA = document.querySelector(".desmutar");
x.volume = "0.1" 
function playAudio() { 
  x.play(); 
    playA.style.display = "none"
    pauseA.style.display = "inline"
} 

function pauseAudio() { 
  x.pause(); 
  playA.style.display = "inline"
  pauseA.style.display = "none"
} 

function stopAudio(){
    x.pause();
    x.currentTime = "0"
    playA.style.display = "inline"
    pauseA.style.display = "none"

}
function mutaraudio(){
    x.volume = "0"
    mutarA.style.display = "none"
    desmutarA.style.display = "inline"
}
function desmutaraudio(){
    x.volume = "0.1"
    mutarA.style.display = "inline"
    desmutarA.style.display = "none"
}