
let setningStartObjekter = [
    "du minner meg om en ",
    "du er et prakteksemplar av en ",
    "du gir vibesene til en ",
    "utseende ditt er på linje med en "
]

let styggeObjekter = [
    "påkjørt nakenrotte ",
    "eksplosiv fis ",
    "slimete, uattraktiv frosk ",
    "overvektig klump ",
    "forbanna incel ",
    "illeluktende orangutang ",
    "massiv turnoff ",
    "fis "

]

let setningEndObjekter = [
    "to be honest.",
    ", og det er på en god dag.",
    ".",".",
    ", og det gjør meg trist.",
    "og du vet det.",
    ", til og med mormoren din synes det."
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let sso = randomIntFromInterval(0,setningStartObjekter.length-1)
let so = randomIntFromInterval(0,styggeObjekter.length-1)
let seo = randomIntFromInterval(0,setningEndObjekter.length-1)






let setningStartAdjektiv = [
    "du er ",
    "mer enn noen andre, er du ",
    "fuck deg, du e fakkings "
]

let styggeAdjektiv = [
    "stygg ",
    "feit ",
    "illeluktende ",
    "motbydelig ",
    "like avskyelig som imagine dragons ",
    "like shit som nye u2 "
]

let setningEndAdjektiv = [
    ", og du vet det.",
    ", forbanna taper.",".",".",
    ", det må være trist å leve"
]
let ssa = randomIntFromInterval(0,setningStartAdjektiv.length-1)
let sa1 = randomIntFromInterval(0,styggeAdjektiv.length-1)
let sa2 = randomIntFromInterval(0,styggeAdjektiv.length-1)
let sea = randomIntFromInterval(0,setningEndAdjektiv.length-1)



function diss(){
    navn = document.querySelector("#navn").value
    document.querySelector("#disrespectObjekter").innerHTML = navn + ", "+setningStartObjekter[sso]+styggeObjekter[so]+setningEndObjekter[seo]
    document.querySelector("#disrespectAdjektiv").innerHTML = navn + ", "+setningStartAdjektiv[ssa]+styggeAdjektiv[sa1]+" og "+styggeAdjektiv[sa2]+setningEndAdjektiv[sea]
}

function update(){
     sso = randomIntFromInterval(0,setningStartObjekter.length-1)
 so = randomIntFromInterval(0,styggeObjekter.length-1)
 seo = randomIntFromInterval(0,setningEndObjekter.length-1)
 ssa = randomIntFromInterval(0,setningStartAdjektiv.length-1)
 sa1 = randomIntFromInterval(0,styggeAdjektiv.length-1)
 sa2 = randomIntFromInterval(0,styggeAdjektiv.length-1)
 sea = randomIntFromInterval(0,setningEndAdjektiv.length-1)
 diss()


    
}