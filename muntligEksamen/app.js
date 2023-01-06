document.querySelector(".submit").addEventListener("click", generateInputFields)

let globalAmount;
function generateInputFields(){
    let amount = parseInt(document.querySelector(".antall").value)
    globalAmount = amount
    for (let i = 0; i < amount; i++) {
        let inputField = document.createElement("input")
        document.querySelector("#personersInput").appendChild(inputField)
        inputField.placeholder="Person "+(i+1) + " betalt"
    }
}

document.querySelector(".prices").addEventListener("click", generateStats)

let average=0
function generateStats(){
    let sum=0
    for (let i = 0; i < globalAmount; i++) {
        
        sum+= parseInt(document.getElementById("personersInput").children[i].value)
    }
    average = sum/(globalAmount)
    
    for (let i = 0; i < globalAmount; i++) {
        if(parseInt(document.getElementById("personersInput").children[i].value)<average){
            let differanse = average-(parseInt(document.getElementById("personersInput").children[i].value))
            console.log("person "+i+" skylder " + differanse)
        }
        
    }
}