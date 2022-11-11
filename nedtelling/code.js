let musikkFerdig = new Audio("myOwnSummer.mp3")
let musikkBG = new Audio("sleepwalk.mp3")

let startTimer= false

var user;
function choose(choice){
    if (choice =="ned"){
        antallSekunder -= 1;
    }else{
        antallSekunder += 1;
    }

    document.getElementById("nedtelling").innerHTML = antallSekunder
    document.title = "timer: " + antallSekunder
}
function test(click){
    
    if (!startTimer){
        document.getElementById("pause").innerHTML = "Pause"
        
        startTimer= true
    }else{
        document.getElementById("pause").innerHTML = "Start"
        startTimer= false
    }
    
    
   
}  


/* NedtellingSTART */

setInterval(nedtelling, 1000)
let antallSekunder = 10


function nedtelling(){
    document.getElementById("nedtelling").innerHTML = antallSekunder
    document.title = "timer: " + antallSekunder
    
    if (antallSekunder >3){
        document.getElementById("nedtelling").style.color = "black";
        document.body.style.color = "black";
    }
    if (antallSekunder<=3){
        document.getElementById("nedtelling").style.color = "red";
    }
    if (antallSekunder<=0){
        antallSekunder=0
        
        document.body.style.backgroundColor = "black";
        musikkFerdig.play();
        document.getElementById("nedtelling").style.color = "rgb(112, 211, 92)";
        document.body.style.color = "rgb(112, 211, 92)";
        document.getElementById("nedtelling").innerHTML = "Timeren er ferdig broder"
        document.title = "Ferdig"
        document.getElementById("nedtelling").style.animation = "shake 0.7s infinite"
        clearInterval(nedtelling)
        musikkBG.pause();
    }  
    if (antallSekunder>0){
        musikkFerdig.pause();
        document.getElementById("nedtelling").style.animation = ""
        document.body.style.backgroundColor = "beige";
    }
    if (startTimer){
    antallSekunder-=1
    }
}

document.body.addEventListener("click", spillMusikk);

function spillMusikk(){
    musikkBG.play();
}

/* NedtellingSTOPP */


/* KlokkeSTART */
setInterval(timer, 1000)

function timer(){
    d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString()
}
/* KlokkeSTOPP */