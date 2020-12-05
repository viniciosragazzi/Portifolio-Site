let x = document.getElementById("myAudio"); 
let playA = document.querySelector(".play"); 
let pauseA = document.querySelector(".pause");
let mutarA = document.querySelector(".mutar");
let desmutarA = document.querySelector(".desmutar");
let horaTela = document.querySelector(".hora")
x.volume = "0.1" 
x.play();
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

function Relogio(){
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let dn = ""

    if(hr<=12){
         dn = "AM"
    }else{
         dn = "PM"
    }
   
    let hora = hr + ":" + min + ":" + seg + dn;
    
    horaTela.innerHTML = hora;
}

setInterval(Relogio,500)
