
let xo = 1


document.getElementById("TicTacToe").addEventListener("click", theFunction);

function theFunction(e){ 
    e.target.style ="content: url(cross.png); "
    


    /* if ((botTarget.style != "content: url(cross.png)") && botTarget.style != "content: url(circle.webp)"){
document.getElementById(Math.floor(Math.random() * 10).toString()).style ="content: url(circle.webp); "
    } */
    document.getElementById(Math.floor(Math.random() * 10).toString()).style ="content: url(circle.webp); "

    
}

