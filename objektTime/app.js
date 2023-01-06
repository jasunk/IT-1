let personer = [
    {navn:"Jasunki", år:2005},
    {navn:"Klump", år:1956},
    {navn:"Tim", år:2009}
]

let alder = []

let dato = new(Date)
dato = dato.getFullYear()


for (let i = 0; i < personer.length; i++) {
    alder.push(parseInt(dato)-parseInt(personer[i].år))
    if (alder[i]>=18){
       console.log(personer[i].navn, "blir eller er eldre enn 18 år i år, med ", alder[i], "år under beltet.")
    }else{
        console.log(personer[i].navn, "er under 18 i år, med sine ", alder[i], "år. BIG L!")
    }
}

