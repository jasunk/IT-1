
let scale = 50

function fontSize(value){
    if (value=="up"){
        scale+=5
    }else{
        scale-=5
    }

    document.body.style.backgroundSize = scale+"%"
}