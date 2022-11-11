/* Definerer gameobjects */
let alive = [true,true,false, true]
let left = [0,500,-900, -600]
let ref = [".enemy1", ".enemy2", ".house", ".enemy3"]
let scale = [0.2,0.2,1, 0.1]
let speed = [0.01, 0.01, 0, 0.01]
let score = 0

let newAlive = [true,true,true]
let newLeft = [200, 1000, -400]
let newRef = [".enemy4",".enemy5",".enemy6"]
let newScale = [0.2,0.1,0.3]
let newSpeed = [0.01,0.015,0.075]

let mouseAccel=1
const vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))/2

/* Oppdaterer posisjon */
for (let i = 0; i < ref.length; i++) {document.querySelector(ref[i]).style.marginLeft = left[i].toString()}
   
document.addEventListener('keydown', function(event) {

    if(event.keyCode == 32) {
        shoot(); 
        for (let i = 0; i < ref.length; i++) {
            if (left[i]<100 && left[i]>-100){
                score++
                document.querySelector("#score").innerHTML = score
                document.querySelector(ref[i]).classList.add("die"); kill(i);
            } 
        }

    }else if (event.keyCode == 37){
        console.log("left")
        mouseAccel+=7.5
        for (let i = 0; i < ref.length; i++) {
            left[i]+= 35+mouseAccel
            
        }
        
    }
    else if(event.keyCode == 39) {
        console.log("right")
        mouseAccel+=7.5
        for (let i = 0; i < ref.length; i++) {
            left[i]-= 35+mouseAccel
        }
    }
    
    for (let i = 0; i < ref.length; i++) {
        document.querySelector(ref[i]).style.marginLeft = left[i].toString()+"px"
    }
    
});

document.addEventListener("keyup",function(){
    mouseAccel=1
})


setInterval(grow, 100)
function grow(){
    
    
        for (let i = 0; i < scale.length; i++) {
            if (alive[i]==true){
                scale[i]+= speed[i]
                document.querySelector(ref[i]).style.transform = "scale("+scale[i].toString()+ ","+scale[i].toString()+")"
            }        
        }
}

function kill(i){
    
    alive[i]=false
    
    /* delete alive[i];
    delete left[i];
    delete ref[i];
    delete speed[i];
    delete scale[i]; */

    alive.splice(i, 1); 
    left.splice(i, 1); 
    ref.splice(i, 1); 
    speed.splice(i, 1); 
    scale.splice(i, 1); 

    console.log("alive:",alive,"ref", ref,"left", left,"speed", speed,"scale", scale)

}

function shoot(){
    spawn()
    document.getElementById("gun").classList.add("shoot")
    setTimeout(gunreset, 500)
}

function gunreset(){
    document.getElementById("gun").classList.remove("shoot")
}

function spawn(){
    const node = document.getElementById("enemyInactive");
    const clone = node.cloneNode(true);
    document.body.appendChild(clone);
    
    clone.classList.add("enemy")
    clone.classList.add(newRef[0])
    clone.style.marginLeft = newLeft[0].toString +"px"
    console.log(ref)
    let mengde = ref.length+1
    
    alive.push(newAlive[0])
    ref.push(newRef[0])
    left.push(newLeft[0])
    speed.push(newSpeed[0])
    scale.push(newScale[0])

    console.log("alive:",alive,"ref", ref,"left", left,"speed", speed,"scale", scale)

    newRef.shift();
     
}