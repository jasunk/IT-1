/* Setter nåværende modus til forige huskede modus, 
om ikke det er lagret data er det mulig knappen på trykkes 2 ganger på */
let currentMode = localStorage.getItem("modus")
localStorage.setItem("modus", currentMode)

/* Kjører et IF-statement ved oppstart for å bestemmer riktig tema på siden
basert på forige åpnede vindu */
if (currentMode=="dark"){
    document.getElementById("modeIcon").innerHTML= "light_mode"
    document.body.style.setProperty("--bg-color", "#815355")
    document.body.style.setProperty("--theme-color", "#523249")
    document.body.style.setProperty("--button-color", "#EBEEE7")
    document.body.style.setProperty("--txt-color", "#EBEEE7")
}else{
    document.getElementById("modeIcon").innerHTML= "dark_mode"
    document.body.style.setProperty("--bg-color", "#EBEEE7")
    document.body.style.setProperty("--theme-color", "#DBEBC0")
    document.body.style.setProperty("--button-color", "#CABBA5")
    document.body.style.setProperty("--txt-color", "#523249")
}


/* Kalles ved trykk på DIVen "darkMode" */
function mode(){
    
    if (currentMode=="light"){
        currentMode="dark"
        localStorage.setItem("modus", currentMode)
        document.getElementById("modeIcon").innerHTML= "light_mode"
        document.body.style.setProperty("--bg-color", "#815355")
        document.body.style.setProperty("--theme-color", "#523249")
        document.body.style.setProperty("--button-color", "#EBEEE7")
        document.body.style.setProperty("--txt-color", "#EBEEE7")
    }else{
        currentMode="light"
        localStorage.setItem("modus", currentMode)
        document.getElementById("modeIcon").innerHTML= "dark_mode"
        document.body.style.setProperty("--bg-color", "#EBEEE7")
        document.body.style.setProperty("--theme-color", "#DBEBC0")
        document.body.style.setProperty("--button-color", "#CABBA5")
        document.body.style.setProperty("--txt-color", "#523249")
    }
}


/* 
lightMode:
--bg-color:#EBEEE7;
--theme-color:#DBEBC0;
--button-color:#CABBA5;
--txt-color:#523249; 
*/

/* 
darkMode:
--bg-color:#815355;
--theme-color:#523249;
--button-color:#523249;
--txt-color:#EBEEE7; 
*/