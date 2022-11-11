
/* NedtellingSTART */
setInterval(nedtelling, 1000)

let antallSekunder = parseInt(prompt("sekunder broder?"));

let musikkFerdig = new Audio("myOwnSummer.mp3")
let musikkBG = new Audio("sleepwalk.mp3")



function nedtelling(){
    document.getElementById("nedtelling").innerHTML = antallSekunder
    document.title = "timer: " + antallSekunder
    
    if (antallSekunder<=3){
        document.getElementById("nedtelling").style.color = "red";
    }
    
    if (antallSekunder<=0){
        
        musikkFerdig.play();
        document.getElementById("nedtelling").style.color = "rgb(112, 211, 92)";
        document.getElementById("nedtelling").innerHTML = "Timeren er ferdig broder"
        document.title = "Ferdig"
        document.getElementById("nedtelling").style.animation = "shake 0.7s infinite"
        clearInterval(nedtelling)
        
    }

    antallSekunder-=1
}

document.body.addEventListener.addEventListener("click", spillMusikk);

function spillMusikk(){
    musikkBG.play();
}



/* NedtellingSTOPP */

/*
    To-do:
    - bakgrunnsmusikk (NB: autoavspeling av lyd er fy-fy)
    - musikk når ferdig
*/

/* KlokkeSTART */
setInterval(timer, 1000)

function timer(){
    d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString()
}
/* KlokkeSTOPP */

