
let land = [
    "Norge",
    "Japan",
    "USA",
    "Italia",
    "Canada",
    "Russland",
    "Sør-Korea",
    "Kina"
]
let sted = [
    "Lillehammer",
    "Nagano",
    "Salt Lake City",
    "Torino",
    "Vancouver",
    "Sotsji",
    "Pyeongchang",
    "Bejing"
]
let årstall = [
    "1994",
    "1998",
    "2002",
    "2006",
    "2010",
    "2014",
    "2018",
    "2022"
]

let tid = 0
let rett= 0
let feil = 0

for (let i = 0; i < land.length; i++) {
    console.log("Vinter-OL i ",årstall[i], " ble arrangert i ", sted[i], " i ",land[i])
    
}

function whichPlace(year){
    console.log(sted[årstall.indexOf(year)])
}
function whichYear(place){
    console.log(årstall[sted.indexOf(place)])
}

whichPlace("2002")
whichYear("Sotsji")

console.log(årstall[parseInt(Math.random()*8)])


let knapper = document.querySelector("#buttons").children

let startSetninger =[
    "I hvilken by ble vinter-OL i ",
    "Når ble vinter-OL i ",
    "I hvilket land ble vinter-OL i "
]
let alternativer = [
    land,sted,årstall
]

let x = parseInt(Math.random()*3)
let spørsmålOm = alternativer[x]
let svarIndex = parseInt(Math.random()*8)
console.log(spørsmålOm)
document.querySelector("#question").innerHTML = startSetninger[x] + spørsmålOm[svarIndex] + " arrangert?"
restart()

function restart(){
    document.body.style.backgroundColor="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")"
    x = parseInt(Math.random()*3)
    spørsmålOm = alternativer[x]
    svarIndex = parseInt(Math.random()*8)
    document.querySelector("#question").innerHTML = startSetninger[x] + spørsmålOm[svarIndex] + " arrangert?"

for (let i = 0; i < knapper.length; i++) {
    if (x==0){
        knapper[i].innerHTML=sted[i]
    }
    if (x==1){
        knapper[i].innerHTML=årstall[i]
    }
    
    if (x==2){
        knapper[i].innerHTML=land[i]
    }
    knapper[i].classList.remove("correct")
    knapper[i].classList.remove("wrong")
    document.querySelector("#respons").innerHTML="..."
    document.querySelector("#respons").style.color="black"
}


}

function knapp(nummer){
    nummer-=1
    if (nummer==svarIndex){
        
        knapper[nummer].classList.add("correct")
        document.querySelector("#respons").innerHTML="JA BRO, MAD NICE!"
        document.querySelector("#respons").style.color="rgb(54, 175, 54)"
        rett++
    }else{
        knapper[nummer].classList.add("wrong")
        document.querySelector("#respons").innerHTML="NAH BRO"
        document.querySelector("#respons").style.color="red"
        feil++
    }
    document.querySelector(".rett").innerHTML = rett + " riktige svar"
    document.querySelector(".feil").innerHTML = feil + " feile svar"

}


setInterval(tidOpp,1000)

function tidOpp(){
    tid ++
    document.querySelector(".tid").innerHTML = tid + " s"
}

document.querySelector(".rett").innerHTML = tid + " riktige svar"
document.querySelector(".feil").innerHTML = tid + " feile svar"

