let mouse_x;
let mouse_y;

setInterval(update,10)

function update()
{
    document.querySelector("div").style.marginLeft =mouse_x+"px"
    document.querySelector("div").style.marginTop =mouse_y+"px"
}
window.addEventListener("mousemove", visPosisjon);
window.addEventListener("click", clicked)

// Funksjon som finner musepekerens posisjon
function visPosisjon(e) {
    
  mouse_x = e.clientX -10 ;
  mouse_y = e.clientY -10;
  console.log(mouse_x,mouse_y)
}
function clicked(){
    document.querySelector("div").classList.toggle("click")
    setTimeout(nah,350)
}
function nah(){
    document.querySelector("div").classList.toggle("click")
}