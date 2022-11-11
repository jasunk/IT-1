let alive = true


let left = [0,500,-900]

let ref = [".enemy1", ".enemy2", ".house"]
let scale = [0.2,0.2,0.2]
let speed = [0.01, 0.01, 0]


for (let i = 0; i < ref.length; i++) {
    document.querySelector(ref[i]).style.marginLeft = left[i].toString()
}
   
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        shoot(); 
        /* Oppdater */
        if (leftPos1<100 && leftPos1>-100){document.querySelector(".enemy1").classList.add("die"); setTimeout(despawn,500)}
        if (leftPos2<100 && leftPos2>-100){document.querySelector(".enemy2").classList.add("die"); setTimeout(despawn,500)}
        
    }else if (event.keyCode == 37){
        console.log("left")

        for (let i = 0; i < ref.length; i++) {
            left[i]+= 35
        }
        
    }
    else if(event.keyCode == 39) {
        console.log("right")
        for (let i = 0; i < ref.length; i++) {
            left[i]-= 35
        }
    }
    console.log(left)
    
    for (let i = 0; i < ref.length; i++) {
        document.querySelector(ref[i]).style.marginLeft = left[i].toString()+"px"
    }
    
});

/* Oppdater */
setInterval(grow, 100)
let scale1 = 0.2
let scale2 = 0.2

function grow(){
    
    
    /* if (alive){ */
    /* Oppdater */
        scale1+=0.01
        scale2+=0.01
        
        /* document.getElementById("enemy").style.transform = "scale(",toString(scale),",",toString(scale),")" */
        document.querySelector(".enemy1").style.transform = "scale("+scale1.toString()+ ","+scale1.toString()+")"
        document.querySelector(".enemy2").style.transform = "scale("+scale2.toString()+ ","+scale2.toString()+")"
    /* } */
    
}

function despawn(){
    
    
   /*  if (document.querySelector(".enemy1").classList="die"){
        document.querySelector(".enemy1").classList.add("dead")
    }
    if (document.querySelector(".enemy2").classList="die"){
        document.querySelector(".enemy2").classList.add("dead")
    } */
    
    
    alive=false
}

function shoot(){
    
    document.getElementById("gun").classList.add("shoot")
    setTimeout(gunreset, 500)
}

function gunreset(){
    document.getElementById("gun").classList.remove("shoot")
}