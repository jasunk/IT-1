
let sizing=1


function fontSize(x){
    if (x=="opp") {
        sizing+=0.25
    }else  {
        sizing-=0.25   
    }
    
    document.body.style.setProperty("font-size", sizing + "vw" )
}
