let divt = document.querySelector(".div-t")
let lside = document.querySelector(".lside")
let fechar = document.querySelector(".fechar")
let bar = document.querySelector(".bar")
function abrirMenu(){
    lside.style.position = "relative"
    lside.style.display = "flex"
    lside.style.transform = "translateY(0)"
    bar.style.display = "none"
    fechar.style.display = "flex"
}
function fecharMenu(){
    lside.style.position = "absolute"
    lside.style.transform = "translateY(-950px)"
    lside.style.display = "none"
    bar.style.display = "flex"
    fechar.style.display = "none"
}


function tamanhoTela(){
    var windowWidth = window.innerWidth;
  
   if(windowWidth <= 768){
    lside.style.position = "absolute"
    lside.style.transform = "translateY(-950px)"
    bar.style.display = "flex"
    fechar.style.display = "none"
    divt.classList.add("container")
    }else{
    lside.style.position = "fixed"
    lside.style.transform = "translateY(0)"
    bar.style.display = "none"
    fechar.style.display = "none"
    divt.classList.remove("container")
    }
  };
  
  tamanhoTela();
  
  window.addEventListener('resize', function(){
      tamanhoTela();
      
  });