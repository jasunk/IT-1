document.onkeydown = checkKey;
document.onkeyup = checkRelease;

let character = document.getElementById("character")
let venstre=650
let topp=250
let speed = 12.5

let dir = 3


character.style.top = topp+"px"
character.style.left = venstre+"px"
character.style.animation="none"

    function checkRelease(e) {

        e = e || window.event;

        if (e.keyCode=="37" || e.keyCode=="38" ||e.keyCode=="39" || e.keyCode=="40" ){
            character.style.animation="none"
            if (dir==0){
                character.style.background= "url('img/seksten.png') 0 0"
            }else if(dir==2){
                character.style.background= "url('img/seksten.png') -133.5px 199.75px"
            }
            else if(dir==1){
                character.style.background= "url('img/seksten.png') 0 399.5px"
            }else{
                character.style.background= "url('img/seksten.png') 0 599.25px"
            }
            
        }}


function checkKey(e) {

    e = e || window.event;
    

    if (e.keyCode == '38') {
        // up arrow
        dir=3
        topp-=speed
        character.style.animation = "walkDown 0.5s step-end infinite"
        
    }
    else if (e.keyCode == '40') {
        dir=0
        topp+=speed
        // down arrow
        character.style.animation = "walkUp 0.5s step-end infinite"
    }
    else if (e.keyCode == '37') {
        dir=1
       // left arrow
       venstre-=speed
       character.style.animation = "walkLeft 0.5s step-end infinite"
    }
    else if (e.keyCode == '39') {
       // right arrow
       dir=2
       venstre+=speed
       character.style.animation = "walkRight 0.5s step-end infinite"
    }else if (e.keyCode == '32'){
        document.getElementById("speach").innerHTML="hei"
    }
    character.style.top = topp+"px"
    character.style.left = venstre+"px"
    

}
