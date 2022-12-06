let cells = document.querySelectorAll(".cell")
console.log(cells)
let suns=1000
let plants = ["shooter", "flower", "potato", "bomb"]
let imgRef = ["shooter.png", "flower.png", "wall.png", "bomb.png"]
let plantSelected = 0
let active =false
let bunnprisBoost=0

let potatoState =[]
let potatoRef = []
let price;
var selected;



document.querySelector(".playGrid").addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
    selected=e.target
    /* target.innerHTML = plants[plantSelected] */
    if (active && !e.target.firstChild && e.target.classList=="cell"){
        suns-=price
        shoot(e.target)
        if (price>suns){active=false}
        let div =document.createElement( "div" )
        target.appendChild(div)
        div.classList.add(plants[plantSelected]+"P")


        if (plants[plantSelected]=="flower"){
            let butikkType = parseInt(Math.random()*3)
            if (butikkType==1){
                div.classList.add("bunnpris")
            }else if (butikkType==2){
                div.classList.add("kiwi")
            }else{
                div.classList.add("rema")
            }
            
            
        }
        if (plantSelected==0){shooter()}
        if (plantSelected==1){bunnprisBoost+=75}
        if (plantSelected==2){potet()}
       if (plantSelected==3){setTimeout(BOOM,1000)}
       
        /* target.style.content = "url("+imgRef[plantSelected]+")"    */ 
    }
    document.getElementById("suns").innerHTML="Cash: "+suns
}, false);


let plantButtons = document.querySelector(".plantSelector").children

for (let i = 0; i < plants.length; i++) {
    plantButtons[i].addEventListener("click",pbclicked)
    
}
let bunnprisAll = document.querySelectorAll(".flowerP")
let moneySpawnRate = 4000-bunnprisBoost
setTimeout(spawnSun,moneySpawnRate)
let sunNr = 0
function spawnSun(){
    bunnprisAll = document.querySelectorAll(".flowerP")
    console.log(moneySpawnRate)
    moneySpawnRate = 3000-bunnprisBoost
    let div =document.createElement( "div" )
    
    document.querySelector(".playGrid").appendChild( div)
    div.classList.add("sun")
    document.querySelector(".playGrid").children[sunNr+35].style.top = parseInt(Math.random()*70) + "%"
    sunNr++
    div.addEventListener("pointerenter",sunremove)
    setTimeout(autoC,400)
    div.style.left = Math.random()*50 + "%"
    setTimeout(spawnSun,moneySpawnRate)

    
    for (let i = 0; i < bunnprisAll.length; i++) {
        bunnprisAll[i].classList.add("cashGet")
        setTimeout(bunnprisReset, 500)
    }
}
function bunnprisReset(){
    
    for (let i = 0; i < bunnprisAll.length; i++) {
        bunnprisAll[i].classList.remove("cashGet")
        
    }
}

function pbclicked(e){
    
    if (e.target.classList=="shooter" && suns>=100){plantSelected=0;   active=true; price=100}
    if (e.target.classList=="flower" && suns>=50){plantSelected=1;  active=true;price=50}
    if (e.target.classList=="potato"&& suns>=50){plantSelected=2; active=true;price=50}
    if (e.target.classList=="bomb" && suns>=25){plantSelected=3;  active=true;price=25}
    
}

function sunremove(e){
    (e.target).style.display = "none"
    suns+=50
    document.getElementById("suns").innerHTML="Cash: "+suns
}

/* var msg = new SpeechSynthesisUtterance();


let lines = ["Sup baby girl", "Fuck", "Hello", "Sup cuh"]
    var voices = window.speechSynthesis.getVoices();
    console.log(voices)
    msg.voice = voices[0]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 0.6; // From 0.1 to 10
    msg.pitch = 0.2; // From 0 to 2
    

 */

function shooter(){
    /* msg.text = lines[parseInt(Math.random()*4)]
    msg.lang = 'en';
    speechSynthesis.speak(msg); */
    console.log("hei")
}

function potet(){
    potatoState.push("0")
    potatoRef.push(selected)
    console.log(potatoRef[0])
    
}

let bombRef=[]

function BOOM(){
    setTimeout(despawnBomb,650)
    bombRef.push(selected.firstChild)
    let div =document.createElement( "div" )
    bombRef[0].appendChild(div)
    div.classList.add("BOOM")
   
}

function despawnBomb(){
    
    bombRef[0].style.display="none"
    console.log(bombRef[0])
    
    bombRef.pop()
}

let bulletElements = []
let bulletLeft = []
let bulletTop = []
let bulletLeftOrig= 44
let bulletTopOrig= 17.5
let bulletIndex=[]
let bulletActive = []
let bulletNR = 0
function shoot(pos){
    
    
    bulletIndex.push( Array.from(
        document.querySelector(".playGrid").children
      ).indexOf(pos))
    console.log(bulletIndex)
    let div =document.createElement( "div" )
    document.body.appendChild(div)
    div.classList.add("bullet")
    div.classList.add("b"+bulletNR)
    bulletNR++
    
    bulletElements.push(div)
    
    for (let i = 0; i < bulletTop.length+1; i++) {
        if (bulletIndex[i]<7){
            bulletTop.push(bulletTopOrig)
            bulletLeft.push(bulletLeftOrig+parseInt(bulletIndex[i]*10))
        }
        if (bulletIndex[i]>7 && bulletIndex[i]<14){
            
            bulletTop.push(bulletTopOrig+10)
            bulletLeft.push(bulletLeftOrig+parseInt(bulletIndex[i]*10-70))
        }
        bulletActive.push(true)
        document.querySelector(".bullet").style.top ="calc("+bulletTop[i]+"vw*0.8)"
        document.querySelector(".bullet").style.left ="calc("+bulletLeft[i]+"vw*0.8)"
        
        if (bulletActive.includes(true)) {
            setInterval(bulletMove, 30)
        }
    }
    
   

}

function bulletMove() {
    let oldBLeft = bulletLeft
    for (let i = 0; i < bulletElements.length; i++) {
    bulletLeft[i]++
    document.querySelector(".bullet").style.top ="calc("+bulletTop[i]+"vw*0.8)"
    document.querySelector(".bullet").style.left ="calc("+bulletLeft[i]+"vw*0.8)"
    if (bulletLeft[i]>120){bulletElements[i].remove();bulletLeft[i]=oldBLeft[i] }
    console.log(i)
    }

    
}

document.querySelector(".AUTOCOLLECT").addEventListener("click", autocollect)

let autocollectorActive=false
function autocollect(){
    if (!autocollectorActive){
        autocollectorActive=true
        suns-=500
        document.getElementById("suns").innerHTML="Cash: "+suns
        document.querySelector(".AUTOCOLLECT").classList.add("clicked")
        autoC()
    }
    
}
document.getElementById("suns").innerHTML="Cash: "+suns
function autoC(){
    if (autocollectorActive){
        let allSuns=(document.querySelectorAll(".sun"))
    for (let i = 0; i < allSuns.length; i++) {
        allSuns[i].style.display="none"
        
    }
    suns+=50
        document.getElementById("suns").innerHTML="Cash: "+suns
    }
    
}