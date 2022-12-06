let overskrift = document.querySelector("#Overskrift");

let nyttElement = document.createElement("div")
let i = 0
overskrift.appendChild(nyttElement)


function hei(){
    nyttElement.className="active"
}

function en(){
    nyttElement.classList.toggle("active")
}

function tekst(){
    nyttElement.innerHTML = "Jeg liker "
}

function pikk(){
    setInterval(tiss,15)
    antallPikk=0
    
}
let antallPikk=0
function tiss(){
    let ord = "pikk "
    if (antallPikk<=49){nyttElement.innerHTML += ord[i];i++;}
    antallPikk++
    if (i== ord.length){i=0}
    
}




setInterval(update,50)
function update(){
    let former = document.querySelectorAll(".svart")
for (let i = 0; i < former.length; i++) {
    
    former[i].style.width= former[i].dataset.bredde +"px"
    former[i].style.heigth= former[i].dataset.høyde + "px"  
}}

