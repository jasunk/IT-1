
function oppgave1(){
    document.getElementById("oppgave1").style.backgroundColor="green"

    let binærtTall = prompt("Skriv et binært tall her:  ")
    alert(binærtTall + " representert som et heltall er: " + parseInt(binærtTall,2).toString())
}

function oppgave2(){
    document.getElementById("oppgave2").style.backgroundColor="green"
    
    let hex = prompt("Skriv et hexadesimalt tall her:  ")
    alert(hex + " representert som et heltall er: " + parseInt(hex,16).toString())
}

