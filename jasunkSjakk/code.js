let piece = null
let hasPiece =false

window.onclick = e => {
    
    if (e.target.tagName!="BUTTON") {
        
    
        if (!hasPiece) {
            hasPiece=true;
            piece = e.target.innerHTML
            e.target.innerHTML = " "

            document.getElementById("hover").innerHTML = piece
        }else{
            hasPiece = false;
            e.target.innerHTML= piece
        }
    
    }
    console.log(hasPiece + piece);  // to get the element
} 

function reset(){
    window.location.reload()
}
