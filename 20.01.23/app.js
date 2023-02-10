let body = document.body
let mouseX;
let mouseY;
let holdingMouse=false
let elements = []
let index = 0

window.addEventListener("mousemove", function(evt){
    body.innerHTML= evt.pageX +"<br>"+ evt.pageY
    mouseX=evt.pageX
    mouseY=evt.pageY
})

window.addEventListener("mousedown",function(){
    holdingMouse=true
})
window.addEventListener("mouseup",function(){
    holdingMouse=false
})


setInterval(spawnBlock,100)
function spawnBlock(){
    if (holdingMouse){
        elements.push(element = (document.createElement("div")))
        elements[index].style.backgroundColor = getRandomColor()
        elements[index].style.left = mouseX -12.5+ "px"
        elements[index].style.top = mouseY -12.5+ "px"
        body.appendChild(elements[index])
        index++
    }
    
}


function getRandomColor(){
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    return "rgb("+r+","+g+","+b+")"
}