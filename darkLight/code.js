let dark = false

let sizing = 1

function darkLight(){
    
    if (!dark) {        
        
        document.body.style.setProperty("background", "var(--dark-bg-color)")
        document.body.style.setProperty("color", "var(--dark-txt-color)")
        dark=true
        document.getElementById("mode").innerHTML ="toggle lightmode"
        
        
    }else{
        document.body.style.setProperty("background", "var(--light-bg-color)")
        document.body.style.setProperty("color", "var(--light-txt-color)")
        dark=false
        document.getElementById("mode").innerHTML ="toggle darkmode"
    }
}


function fontSize(x){
    if (x=="up") {
        sizing+=0.25
    }else  {
        sizing-=0.25   
    }
    
    document.body.style.setProperty("font-size", sizing + "vw" )
}
