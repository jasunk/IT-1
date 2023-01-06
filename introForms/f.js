const skjema = document.getElementById("skjemaRegistrering")

skjema.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log(document.querySelector("#inputEpost").value, document.querySelector("#inputPassord").value)
})