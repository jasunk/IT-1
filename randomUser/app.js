fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    // .then(resonse => console.log(response))
    .then(response => behandleSvar(response))
    .then(response => spawnMessage())
    .catch(err => console.error(err));



let profilePics = []
let names = []
let colors = []
let i = 0
let personI=0



function behandleSvar(svar){
    
    for (let i = 0; i < 10; i++) {
        profilePics.push(svar.results[i].picture.large)
        names.push(svar.results[i].name.first)
    }

}
let messages0= ["Hei", "Hei på deg din fjert", "BRO DU MESSER", "Nah broder, du er en fis no cap", "wallah, du må jække deg et par hakk", "fakkoff", "PASS SPRÅKET FOLKENS", "hvordan lage pepperkakedeig", "Du har mangel på hjerneceller"]
let messages1 = ["Noen som e keen på å møtes i morgen?", "Nah, har bokmarathon as", "Hah, du leser vel kattekrigerne elns du, din lille nerdetøs", "kommer fra personen som har lest mein kampf 13 ganger", "Du må lære å skille kunst fra kunstner", "Wallah", "for gale", "har ringt mine opps, du fjernes snart"]
let messages2 = ["Hvordan bli kvitt hemmorider", "Bruv, tror du har bommet litt på nettsted", "jeg er sulten på litt hemmorider, ngl", "Du trenger seriøst hjelp", "Ignore the haters, prøv det med karri på!", "Skadet folk as, skadet", "Hva er hemmorider?", "Smertefult, believe me", "send bilde da amigo"]
let samlingMelding = [messages0, messages1, messages2]
let messages = samlingMelding[parseInt(Math.random()*samlingMelding.length)]

let lastPersonI=0


/* 
fetch("http://api.weatherapi.com/v1/current.json?key=f6b3929fc9384d8a975143144231701&q=Bergen&aqi=no")
    .then(response => response.json())
    .then(response => vær(response))
    .catch(err => console.error(err));

function vær(værData){
    
    document.body.innerHTML += "<img src="+værData.current.condition.icon +">" + værData.current.condition.text
}
 */
//setTimeout(spawnMessage,1000)

let antallMeldinger=0

function spawnMessage(){
    if (antallMeldinger<messages.length){
        let mySound = new Audio('notif.mp3')
        mySound.play()
   
    let messageElement = document.createElement("div")
    let imageElement = document.createElement("img")
    let nameElement = document.createElement("div")
    let messageContent = document.createElement("div")

    messageElement.classList.add("message")
    imageElement.src=profilePics[personI]
    imageElement.classList.add("pic")
    nameElement.innerText = names[personI]
    nameElement.classList.add("name")
    messageContent.innerText = messages[i]
    messageContent.classList.add("content")

    document.body.appendChild(messageElement)
    messageElement.appendChild(imageElement)
    messageElement.appendChild(nameElement)
    messageElement.appendChild(messageContent)
    lastPersonI=personI
    personI = parseInt(Math.random()*9 )
    if (personI==lastPersonI){
        personI = parseInt(Math.random()*9 )
    }
    i++
    antallMeldinger++
    setTimeout(spawnMessage,1500)
    
    }
}


