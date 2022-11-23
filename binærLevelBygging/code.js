let level = 
[
    1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,1,1,1,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,0,0,0,0,1,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1
]

let divs = document.querySelector("#levelArea").children

for (let i = 0; i < divs.length; i++) {
    if (level[i]==1){
        divs[i].classList.add("wall")
    }
    if (level[i]==2){
        divs[i].classList.add("spike")
    }
    /* var original = document.querySelector(".character");
    var clone = original.cloneNode(true);
    (divs[i]).appendChild(clone); */
    
}
let moved=false





document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        
        for (let i = 0; i < divs.length; i++) {
            
            if (divs[i].firstChild){
                if (!moved && level[(i-1)] == 0){
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
                if (!moved && level[(i+1)] == 0){
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
                if (!moved && level[(i-10)] == 0){
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
                if (!moved && level[(i+10)] == 0){
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


});

function resetMoved(){
    moved=false
}

let enemyDir