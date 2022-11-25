
const song1 = ["Bro bro brille", "bilder/musikk/broAlbum.jpg", "133","lydfiler/beat.wav" ]
const song2 = ["Heisann", "bilder/musikk/iverAlbum.jpg", "230"]
const song3 = ["Du er kul", "bilder/musikk/eirikAlbum.jpg", "20"]

let currentSong= song2

var audio = new Audio(currentSong[3]); audio.play();
let durationNR = parseInt(currentSong[2]) 
let durationMinus = 100/(durationNR-1)
let durationWidth = 0

let playing=true


setInterval(duration, 1000)

document.getElementById("albumBilde").src = currentSong[1]
document.getElementById("songName").innerHTML = currentSong[0] + " - VAFFELGUTANE"

function duration(){
    durationNR -= 1
    durationWidth+=durationMinus
    console.log(durationNR + durationMinus, durationWidth)
    

    document.getElementById("durationTime").innerHTML = parseInt(durationNR).toString()
    
    if (durationWidth<100+durationMinus){
        document.getElementById("duration").style.width = durationWidth + "%"
    }
    
    
}

function skip(){
    
    currentSong = song3
    infoReset()
}
function back(){
    currentSong = song1
    infoReset()
}


function infoReset(){
    var audio = new Audio(currentSong[3]); audio.play();

    durationNR = parseInt(currentSong[2]) 
    durationMinus = 100/(durationNR-1)
    durationWidth = 0
    durationWidth = 0
    document.getElementById("albumBilde").src = currentSong[1]
    document.getElementById("songName").innerHTML = currentSong[0] + " - VAFFELGUTANE"
   
}

function pause(){
    if (playing){
        playing=false
    }else{
        playing=true
    }
}