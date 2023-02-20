let mouse_x;
let mouse_y;


window.addEventListener("mousemove", visPosisjon);
window.addEventListener("click", clicked)

// Funksjon som finner musepekerens posisjon
function visPosisjon(e) {
    
  mouse_x = e.clientX -10 ;
  mouse_y = e.clientY -10;
  console.log(mouse_x,mouse_y)
  document.querySelector("div").style.left =mouse_x+"px"
    document.querySelector("div").style.top =mouse_y+"px"
}
function clicked(){
    document.querySelector("div").classList.toggle("click")
    setTimeout(nah,350)
}
function nah(){
    document.querySelector("div").classList.toggle("click")
}