let t1Farger = document.getElementById('t1').children;
let t2Farger = document.getElementById('t2').children;
let t3Farger = document.getElementById('t3').children;
let forsøk = 0

let vunnet = false
let hold = [false,false,false]

let en = 
[
0,0,0,
0,1,0,
0,0,0
]
let to = 
[
1,0,0,
0,0,0,
0,0,1
]
let tre =
[
1,0,0,
0,1,0,
0,0,1
]
let fire =
[
1,0,1,
0,0,0,
1,0,1
]
let fem =
[
1,0,1,
0,1,0,
1,0,1
]
let seks =
[
1,0,1,
1,0,1,
1,0,1
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  

let terningFjes = [en,to,tre,fire,fem,seks]

let t1Nummer =  terningFjes[randomIntFromInterval(1,6)-1]
let t2Nummer = terningFjes[randomIntFromInterval(1,6)-1]
let t3Nummer = terningFjes[randomIntFromInterval(1,6)-1]



function trill(){

    

    forsøk++
    document.querySelector("#Forsøk").innerHTML = "Antall forsøk: "+ forsøk
    if (hold[0]==false){t1Nummer =  terningFjes[randomIntFromInterval(1,6)-1]}
    if (hold[1]==false){t2Nummer =  terningFjes[randomIntFromInterval(1,6)-1]}
    if (hold[2]==false){t3Nummer =  terningFjes[randomIntFromInterval(1,6)-1]}
   
    for (var i=0; i < t1Farger.length; i++) {
        if (t1Nummer[i]==1){
          t1Farger[i].classList.add("black")
        }else{
          t1Farger[i].classList.remove("black")
        }
      }
      
      for (var i=0; i < t2Farger.length; i++) {
          if (t2Nummer[i]==1){
            t2Farger[i].classList.add("black")
          }else{
            t2Farger[i].classList.remove("black")
          }
      }
      
      for (var i=0; i < t3Farger.length; i++) {
          if (t3Nummer[i]==1){
            t3Farger[i].classList.add("black")
          }else{
            t3Farger[i].classList.remove("black")
          }
      }
      if (vunnet){
        window.location.reload()
    }

    if (t1Nummer==t2Nummer && t2Nummer==t3Nummer){
        document.querySelector("#winText").classList.add("win")
        vunnet=true
        document.querySelector("#trillTekst").innerHTML = "Restart?"
        document.querySelector("#t1").classList.add("seier")
        document.querySelector("#t2").classList.add("seier")
        document.querySelector("#t3").classList.add("seier")

    }
    
}

function hold1(){
    document.getElementById("t1").classList.toggle("hold")
    if (hold[0]==true){
        hold[0]=false
    }else{
        hold[0]=true
    }
}
function hold2(){
    document.getElementById("t2").classList.toggle("hold")
    if (hold[1]==true){
        hold[1]=false
    }else{
        hold[1]=true
    }
}
function hold3(){
    document.getElementById("t3").classList.toggle("hold")
    if (hold[2]==true){
        hold[2]=false
    }else{
        hold[2]=true
    }

    
}

