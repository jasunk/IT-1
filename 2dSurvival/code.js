let divsHoriz =window.innerWidth/ (window.innerWidth/100*2.5)
let divnr= divsHoriz*22
let divs = (document.querySelector("#level").children)

/* playerVisual */
let pTop = 0.5
let pLeft = 0.5
let playerRef = document.getElementById("visual")

/* Player general */
let playerpos;
let canmove = true
let canAttack =true
let level = []
let speed = 50


/* enemies */
let enemyInitSpawnAmount = parseInt(Math.random()*10)
let enemyPos = []

/* attack */
let whatRemove = []
let attackPos= [1,-1,divsHoriz,-divsHoriz]

/* Genererer level */
for (let i = 0; i < divnr; i++) {
    document.querySelector("#level").appendChild(document.createElement('div'))
   if (i==1) {
    document.querySelector("#level").childNodes[1].appendChild(document.createElement('div'))
    document.querySelector("#level").childNodes[1].childNodes[0].classList.add("character")
  }
  if (i>0){
    document.querySelector("#level").childNodes[i].classList.add("ground")
    level.push(document.querySelector("#level").childNodes[i])
  }
  
}
document.body.removeChild(document.body.childNodes[1])

/* oppdaterer visuell posisjon */
setInterval(update,50)
function update(){
  playerRef.style.left = pLeft + "vw"
    playerRef.style.top = pTop + "vw"
}

/* Input */
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    
  
    switch (event.key) {
        case "s":
        movement(40)
        break;
      case "w":
        movement(-divsHoriz)
        break;
      case "a":
        movement(-1)
        break;
      case "d":
        movement(1)
        break;
      case " ":
        attack()
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window


window.addEventListener('click', (event) => {
    console.log(event.button)

    var target = (event.target) ? event.target : event.srcElement;
    if (target.classList != "unclickable"){target.classList.add("wall"); target.classList.remove("ground")}

    
})

window.addEventListener('contextmenu', (event) => {
    console.log(event.button)
    var target = (event.target) ? event.target : event.srcElement;
    if (target.classList != "unclickable"){target.classList.remove("wall"); target.classList.add("ground")}
})




/* Behandler bevegelse */
function movement(levelCheck){
  
  for (let i = 0; i < divs.length; i++) {        
    if (divs[i].firstChild && divs[i].firstChild.classList=="character" ){   
        if (canmove && level[(i+levelCheck)].classList == "ground" ){
            canmove=false
            setTimeout(resetMove,speed)
            var original = document.querySelector(".character");
            var clone = original.cloneNode(true);
            (divs[(i+levelCheck)]).appendChild(clone);
            divs[i].removeChild(divs[i].firstChild)  
            playerpos=divs[(i+levelCheck)]
            if (levelCheck==1){
              pLeft+=2.5
            }else if (levelCheck==-1){
              pLeft-=2.5
            }else if (levelCheck==divsHoriz){
              pTop+=2.5
            }else {
              pTop-=2.5
            }
        }  
    }
  }
 
}

function resetMove(){
  canmove=true
}


/* angrep */
function attack(){
  
  for (let i = 0; i < divs.length; i++) {     
    
    if (canAttack && divs[i].firstChild && divs[i].firstChild.classList=="character"){   
      for (let a = 0; a < attackPos.length; a++) {
        
        
      if (level[(i+attackPos[a])].classList == "ground" ){
            
           
            level[(i+attackPos[a])].appendChild(document.createElement('div'))
            level[(i+attackPos[a])].childNodes[0].classList.add("attack")
            whatRemove.push(level[(i+attackPos[a])])
            setTimeout(remove,500)
            console.log(whatRemove)
            

            
        }  
      }
    }
    
  }canAttack=false
}

/* Fjerner ild */
function remove(){
  canAttack=true
  for (let i = 0; i < whatRemove.length; i++) {
    whatRemove[i].removeChild(whatRemove[i].firstChild)
    
  }
  
  whatRemove.length=0
}



/* if pos + width > player -> ned, else if pos > player -> høyre*/


console.log(enemyInitSpawnAmount)
for (let i = 0; i < enemyInitSpawnAmount; i++) {
  let ERP = parseInt(Math.random()*divnr)
  
  enemyPos.push( Array.from(
  document.querySelector("#level").children
).indexOf(document.querySelector("#level").childNodes[ERP]))
  document.querySelector("#level").childNodes[ERP].appendChild(document.createElement('div'))
  document.querySelector("#level").childNodes[ERP].firstChild.classList.add("enemy")
  console.log(enemyPos)
}
