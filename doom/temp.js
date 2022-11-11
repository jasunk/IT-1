let alive = true


let leftPos1 = 0
let leftPos2 = 500
let treePos = -900

document.querySelector(".enemy1").style.marginLeft = leftPos1.toString() +"px"
    document.querySelector(".enemy2").style.marginLeft = leftPos2.toString() +"px"
    
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        shoot(); 
        if (leftPos1<100 && leftPos1>-100){document.querySelector(".enemy1").classList.add("die"); setTimeout(despawn,500)}
        if (leftPos2<100 && leftPos2>-100){document.querySelector(".enemy2").classList.add("die"); setTimeout(despawn,500)}
        
    }else if (event.keyCode == 37){
        console.log("left")
        leftPos1 +=35 *(1+scale1/10)
        leftPos2 +=35
        treePos +=35
        
    }
    else if(event.keyCode == 39) {
        console.log("right")
        leftPos1 -=35
        leftPos2 -=35
        treePos-=35
    }
    document.querySelector(".enemy1").style.marginLeft = leftPos1.toString() +"px"
    document.querySelector(".enemy2").style.marginLeft = leftPos2.toString() +"px"
    document.querySelector(".house").style.marginLeft = treePos.toString() +"px"
    
});

setInterval(grow, 100)
let scale1 = 0.2
let scale2 = 0.2

function grow(){
    
    
    /* if (alive){ */
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