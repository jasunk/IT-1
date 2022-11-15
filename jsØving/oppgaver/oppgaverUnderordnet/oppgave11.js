let by = "Llanfairpwllgwyngyllgogerychwyrndrobwyllllantysiliogogogoch"
let ås = "Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu"

let byTegn = by.length
let åsTegn = ås.length



let differanse = parseInt(byTegn)-parseInt(åsTegn)

document.querySelector("#by").innerHTML = by
document.querySelector("#ås").innerHTML = ås
document.querySelector("#byTegn").innerHTML = byTegn
document.querySelector("#åsTegn").innerHTML = åsTegn
document.querySelector("#differanse").innerHTML = differanse

function lukk(){
    window.close()
}