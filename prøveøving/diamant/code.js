
let xo = 1

document.getElementById("TicTacToe").addEventListener("click", theFunction);

function theFunction(e){ 
    
    if(xo==0){
    e.target.style ="content: url(circle.webp); "
    xo=1
    }else{
    e.target.style ="content: url(cross.png); "
    xo=0
}

}

