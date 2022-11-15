
setInterval(update,500)


function update(){
    document.querySelector("#pikslerH").innerHTML = window.innerWidth
    document.querySelector("#pikslerV").innerHTML = window.innerHeight
    document.querySelector("#fil").innerHTML = document.location

    let userAgent = navigator.userAgent;
    let browserName = userAgent;
         
        if(userAgent.match(/chrome|chromium|crios/i)){
            browserName = "chrome";
        }else if(userAgent.match(/firefox|fxios/i)){
            browserName = "firefox";
        }else if(userAgent.match(/safari/i)){
            browserName = "safari";
        }else if(userAgent.match(/edg/i)){
            browserName = "edge";
        }else{
            browserName="No browser detection";
        }
    document.querySelector("#browser").innerHTML = browserName
}

function lukk(){
    window.close()
}