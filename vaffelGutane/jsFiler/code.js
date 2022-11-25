setInterval(clock, 1000);
function clock() {
    let time = new Date();
    document.getElementById("clock").innerHTML=time.toLocaleTimeString();
}
