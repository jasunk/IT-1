let mode= 1

var path = window.location.pathname;
var page = path.split("/").pop();

let fontSize = 1;


/* Hent localStorage data, start timer for å endre etter lasting */
mode=localStorage.getItem("localMode")
fontSize=Number(localStorage.getItem("localFont"))
setTimeout(setAlert, 0);

function setAlert(){
    document.body.style.fontSize = Number(localStorage.getItem("localFont"))+ "vw"
}

console.log("post avlutt: " + localStorage.getItem("localMode") + "font: " + fontSize)

/* darkmode on load */
document.title="Jasunks nettside -> " + page
if (mode==1){
    document.getElementById("mode").innerHTML="brightness_2" 
    
    if (page=="home.html"){document.getElementById("home").style = "--home-bg: rgb(177, 95, 95);--home-theme:rgb(212, 161, 161);--home-txt:black;background-color:var(--home-bg);color: var(--home-txt);"}
    else if (page=="settings.html"){document.getElementById("settings").style="background-color:#ABC4BC; color:black;"}
    else{document.getElementById("ttt").style.backgroundColor="beige"}
    
}
else{
    document.getElementById("mode").innerHTML="wb_sunny"
    if (page=="home.html"){document.getElementById("home").style = "--home-bg: #4a4042;--home-theme:#7B767F;--home-txt:#ABC4BC;background-color:var(--home-bg);color: var(--home-txt);"}
    else if (page=="settings.html"){document.getElementById("settings").style="background-color:#4A4042; color:white;"}
    else{document.getElementById("ttt").style.backgroundColor="#4A4042"}
}


/* darkmode ved knapp */
function darkmode(){
    if (mode==1){
        document.getElementById("mode").innerHTML="wb_sunny"
        mode=2   
        console.log("dark")
        if (page=="home.html"){document.getElementById("home").style = "--home-bg: #4a4042;--home-theme:#7B767F;--home-txt:#ABC4BC;background-color:var(--home-bg);color: var(--home-txt);"}
        else if (page=="settings.html"){document.getElementById("settings").style="background-color:#4A4042; color:white;"}
        else{document.getElementById("ttt").style.backgroundColor="beige"}
        
    }
    else{
        document.getElementById("mode").innerHTML="brightness_2"
        mode=1
        console.log("light")
        if (page=="home.html"){document.getElementById("home").style = "--home-bg: rgb(70, 63, 63);--home-theme:black;--home-txt:white;background-color:var(--home-bg);color: var(--home-txt);"}
        else if (page=="settings.html"){document.getElementById("settings").style="background-color:#ABC4BC; color:black;"}
        else{document.getElementById("ttt").style.backgroundColor="#4A4042"}
    }

    
    
    localStorage.setItem("localMode",mode)
    console.log("pre avlutt: " + localStorage.getItem("localMode"))
    window.location.reload()
    
}


/* fontEndring */
function font(choice){
    if (choice=="up"){
        fontSize+=0.1
        
    }else if (choice=="reset") {
        fontSize=1.3
    }
    
    
    else {
        fontSize-=0.1
    }
    
    localStorage.setItem("localFont", fontSize)
    console.log(localStorage.getItem("localFont"))
    document.body.style.fontSize = fontSize+ "vw"
}



function reload(){
    window.location.reload()

    
}




let piece = null
let hasPiece = false


window.onclick = e => {
    
    if (page="ttt.html"){

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
}

function reset(){
    window.location.reload()
}