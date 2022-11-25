let level1 = 
[
    1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,1,0,0,3,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,1,1,1,2,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,2,0,0,0,1,
    1,0,0,0,0,2,0,0,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1
]

let level2 = 
[
    1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,0,0,1,0,1,
    1,0,1,0,0,0,0,1,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,2,1,0,0,0,0,1,1,1,
    1,2,1,0,0,0,0,0,0,1,
    1,0,1,1,1,0,0,1,0,1,
    1,3,0,2,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1
]

let level3= [
    1,1,1,1,1,1,1,1,1,1,
    1,2,0,2,0,2,0,2,3,1,
    1,0,1,1,1,1,1,1,0,1,
    1,2,1,0,0,0,0,1,2,1,
    1,0,1,0,1,1,0,1,0,1,
    1,2,1,0,1,1,0,1,2,1,
    1,0,1,0,0,0,0,1,0,1,
    1,2,1,1,1,1,1,1,2,1,
    1,0,0,2,0,2,0,2,0,1,
    1,1,1,1,1,1,1,1,1,1
]

let level4=[
    1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,1,0,1,
    1,0,1,1,1,1,0,1,0,1,
    1,0,1,0,3,1,0,1,0,1,
    1,0,1,0,0,2,0,2,0,1,
    1,0,1,0,1,1,0,1,0,1,
    1,0,1,0,0,0,0,1,0,1,
    1,0,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1
]

let level5=[
    1,1,1,1,1,1,1,1,1,1,
    1,1,0,0,0,0,0,0,3,1,
    1,1,2,1,2,1,1,1,0,1,
    1,1,0,2,0,4,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1
]

let level6=[
    1,1,1,1,1,1,1,1,1,1,
    1,0,3,0,1,0,0,2,0,1,
    1,0,1,4,1,2,1,1,0,1,
    1,0,1,0,1,0,0,2,0,1,
    1,0,1,0,1,1,0,1,0,1,
    1,0,1,0,0,0,0,4,0,1,
    1,0,1,1,1,1,1,1,0,1,
    1,0,0,0,0,1,0,2,0,1,
    1,1,1,4,0,0,0,1,0,1,
    1,1,1,1,1,1,1,1,1,1
]


/* Posisjonen av målet i forige lvl */
let spawn= [11,18,81,18,34,18,12]

/* Husk å legge inn levels i array */
let levels = [level1,level2,level3,level4,level5,level6]
let divs = document.querySelector("#levelArea").children

let lvlNumber = 1

let level = levels[lvlNumber-1]

/* STATS */
let blocksBroken=0
let deaths=0
let moves = 0

/* STATES */
let hasWon=false
let canMove=true


/* Nah */
let levelRandom = []

for (let i = 0; i < 100; i++) {
    levelRandom.push(parseInt(Math.random()*2))
}
/* Nah */



/*       - MAL -       */
/* [
    1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1
] */

/* 0 bakke */
/* 1 vegg */
/* 2 knuselig */
/* 3 win */
/* 4 ouch */





/* Genererer level */
function generate(){
    level = levels[lvlNumber-1]
for (let i = 0; i < divs.length; i++) {
    if (level[i]==1){
        divs[i].classList.add("wall")
    }else{divs[i].classList.remove("wall")}
    if (level[i]==2){
        divs[i].classList.add("breakable")
    }else{divs[i].classList.remove("breakable")}
    if (level[i]==3){
        divs[i].classList.add("winPoint")
    }else{divs[i].classList.remove("winPoint")}
    if (level[i]==4){
        divs[i].classList.add("ouch")
    }else{divs[i].classList.remove("ouch")}
}

}

generate()
let moved=false

/* DISPLAY STATS */
setInterval(textUpdate,50)
function textUpdate(){
    document.querySelector(".counters").innerHTML = "   Blocks broken: " + blocksBroken + "   Level: " + lvlNumber +"<br> Deaths: " +deaths+ "   Moves: " +moves
}

/* Movement og kollisjon */
document.addEventListener('keydown', function(event) {
    
    if(canMove){
    if(event.keyCode == 37) {
        
        for (let i = 0; i < divs.length; i++) {
            
            if (divs[i].firstChild){
                
                if (!moved && level[(i-1)] != 1){
                    moves++
                    var original = document.querySelector(".character");
                    var clone = original.cloneNode(true);
                    (divs[(i-1)]).appendChild(clone);
                    divs[i].removeChild(divs[i].firstChild)
                    moved=true
                }
                setTimeout(resetMoved,50)
            }
            
        }

    }
    else if(event.keyCode == 39) {
        for (let i = 0; i < divs.length; i++) {
            
            if (divs[i].firstChild){
                if (!moved && level[(i+1)] != 1){
                    moves++
                    var original = document.querySelector(".character");
                    var clone = original.cloneNode(true);
                    (divs[(i+1)]).appendChild(clone);
                    divs[i].removeChild(divs[i].firstChild)
                    moved=true
                }
                setTimeout(resetMoved,50)
            }
            
        }
    }
    else if(event.keyCode == 38) {
        for (let i = 0; i < divs.length; i++) {
            
            if (divs[i].firstChild){
                if (!moved && level[(i-10)] != 1){
                    moves++
                    var original = document.querySelector(".character");
                    var clone = original.cloneNode(true);
                    (divs[(i-10)]).appendChild(clone);
                    divs[i].removeChild(divs[i].firstChild)
                    moved=true
                }
                setTimeout(resetMoved,50)
            }
            
        }
    }
    else if(event.keyCode == 40) {
        for (let i = 0; i < divs.length; i++) {
            
            if (divs[i].firstChild){
                
                if (!moved && level[(i+10)] != 1){
                    moves++
                    var original = document.querySelector(".character");
                    var clone = original.cloneNode(true);
                    (divs[(i+10)]).appendChild(clone);
                    divs[i].removeChild(divs[i].firstChild)
                    moved=true
                }
                setTimeout(resetMoved,50)
            }
            
        }
    }
}


    /* HitDetection */
    for (let i = 0; i < divs.length; i++) {
            
        if (divs[i].firstChild){
            if (level[i] == 2 ){
                level[i] = 0
                
                blocksBroken++
                document.body.classList.add("shake")
                setTimeout(stopShake,600)
                generate()
                console.log("breakable at " + i)
            }
            else if(level[i]==3 && !hasWon){
                hasWon=true
                canMove=false
                
                console.log(i)
                setTimeout(nextLevel,1200)
                document.querySelector("#displayText").innerHTML = "EZ DUBS"
                document.querySelector("#displayText").classList.add("textShow")
                

            }
            else if(level[i]==4){
                
                canMove=false
                setTimeout(respawn,1200)
                document.querySelector("#displayText").classList.add("textShow")
                document.querySelector("#displayText").innerHTML = "DEAD"
                

            }
            
        }
        
    }



});

function stopShake(){
    document.body.classList.remove("shake")
}
function resetMoved(){
    moved=false
}

function nextLevel(){
    canMove=true
    hasWon=false
    document.querySelector("#displayText").classList.remove("textShow")
    lvlNumber++
    generate()
}

function respawn(){
    deaths++
    canMove=true
    document.querySelector("#displayText").classList.remove("textShow")
    for (let i = 0; i < divs.length; i++) {
            
        if (divs[i].firstChild){
            let childPos=i
            var original = document.querySelector(".character");
            divs[childPos].removeChild(divs[i].firstChild)
            var clone = original.cloneNode(true);
            (divs[spawn[lvlNumber-1]]).appendChild(clone);
                
        }
        
    }
}