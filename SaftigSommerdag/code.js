setInterval(timer, 1000)

function timer(){
    d = new Date();
    document.getElementById("klokke").innerHTML = d.toLocaleTimeString()
}


