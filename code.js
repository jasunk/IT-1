var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');

window.onscroll = function(e) {
    if(oldScrollY < window.scrollY){
        
        document.querySelector(".headerFlexbox").style.height="7vh"
        document.querySelector(".headerFlexbox").style.fontSize="1.5vw"
        
        document.querySelector(".logoMain").style.top="0.4vw"
    } else {
        document.querySelector(".headerFlexbox").style.height="12vh"
        document.querySelector(".headerFlexbox").style.fontSize="2.5vw"
        document.querySelector(".logoMain").style.top="2.5vh"
    }
        oldScrollY = window.scrollY;
}