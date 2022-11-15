/* let txt = "Skjera? Denne siden er laget av Jaa-sunk"
let utterance = new SpeechSynthesisUtterance(txt);
window.speechSynthesis.speak(utterance)
 */
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

function oppgave3(){
    document.getElementById("oppgave3").style.backgroundColor="green"
    
    let spørsmål = prompt("Gidd du fortelle meg om en fet farge?").toLocaleLowerCase()
    
    if (spørsmål.includes("rødt") || spørsmål.includes("rød")){
        alert("Rødt er fett")
        let txt = "Rødt er fett"
        let utterance = new SpeechSynthesisUtterance(txt);
        window.speechSynthesis.speak(utterance)

    }else{
        alert("Fakker du? Koffor svarer du ikke rødt?")
        let txt = "Fakker du? Hvorfor svarer du ikke rødt?"
        let utterance = new SpeechSynthesisUtterance(txt);
        window.speechSynthesis.speak(utterance)
    }
}

function oppgave4(){
    document.getElementById("oppgave4").style.backgroundColor="green"
}

function oppgave5(){
    document.getElementById("oppgave5").style.backgroundColor="green"
    let tall1 = prompt("gi meg et tall")
    let tall2 = prompt("gi meg et tall til")
    let resultat = parseInt(tall1)+ parseInt(tall2)
    alert( tall1 + " + " + tall2 + " = " + resultat)
}

function oppgave6(){
    document.getElementById("oppgave6").style.backgroundColor="green"
    document.getElementById("oppg").innerHTML="Nah Bro"
    setTimeout(reset6,1000)
}
function reset6(){
    document.getElementById("oppg").innerHTML="Oppgave 6"
}

function oppgave7(){
    document.getElementById("oppgave7").style.backgroundColor="green"
    
    
    let tall1 = "5"
    let tall2 = "10"
    let tall3 = parseInt(tall1) * parseInt(tall2)
    alert(tall1 + " ganger " + tall2 + " er " + tall3)
    
}

function oppgave8(){
    document.getElementById("oppgave8").style.backgroundColor="green"
    let fornavn = ["kjartan","eirik", "jakob", "fridtjof","klump"]
    let etternavn = ["Danielson","Gelemauren", "Fis", "Smith","Larsen"]
    let domene = ["@gmail.com","@icloud.com", "@iskule.no", "@bergen.kommune.no","@hehehe.com"]
    function randomIntFromInterval(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}
    let mail = fornavn[randomIntFromInterval(1, 5)-1]+etternavn[randomIntFromInterval(1, 5)-1]+domene[randomIntFromInterval(1, 5)-1]
    alert("tilfeldig mail: " + mail)
}

function oppgave9(){
    document.getElementById("oppgave9").style.backgroundColor="green"
    document.getElementById("oppg9").innerHTML="Ez dubs"
    setTimeout(reset9,1500)
}
function reset9(){
    document.getElementById("oppg9").innerHTML="Oppgave 9"
}
function oppgave10(){
    document.getElementById("oppgave10").style.backgroundColor="green"
    document.getElementById("oppg10").innerHTML="Bro gi meg JS"
    setTimeout(reset10,1500)
}
function reset10(){
    document.getElementById("oppg10").innerHTML="Oppgave 10"
}
function oppgave11(){
    document.getElementById("oppgave11").style.backgroundColor="green"
}
