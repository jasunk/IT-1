let alfabet = "abcdefghijklmnopqrstuvwxyzæøå,.;:)(/1234567890 "
let active=false
/* let targetString =  */
let targetText;
let currentText = ""
let letter;
let i =0

setInterval(update,3)
function update(){
    
    if(active==true){
        targetText=(document.getElementById("targetText").value.toLowerCase())
    

   
        letter=alfabet[parseInt(Math.random()*alfabet.length)]
        console.log(letter)
        console.log(targetText)
        
        if(letter==targetText[i]){currentText+=letter;i++}
        console.log(currentText)
        
        if (targetText.length==currentText.length){letter=""}
        document.querySelector(".result").innerHTML=currentText + letter
        
    }
    
}


function wallah(){
    active=true
}


