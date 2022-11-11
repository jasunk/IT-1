
let navn = prompt("username: ")
let passord = prompt("password: ")


console.log(navn + passord)



if (navn=="jasunk" && passord=="heisann") {
    document.getElementById("profilbilde").style = "content: url(jasunk.jpg);"
    document.getElementById("profilNavn").innerHTML = "Jasunk"
} else if(navn=="bolouf" && passord=="rompe") {
    document.getElementById("profilbilde").style = "content: url(bolouf.jpg);"
    document.getElementById("profilNavn").innerHTML = "Bolouf"
}else if(navn=="karen" && passord=="hysj") {
    document.getElementById("profilbilde").style = "content: url(hysj.jpeg);"
    document.getElementById("profilNavn").innerHTML = "Karen"
}else{
    document.getElementById("profilNavn").innerHTML = "Wrong username or password"
}

