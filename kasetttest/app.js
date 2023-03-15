let covers=[
    "https://media.pitchfork.com/photos/5f7208b29c52ebb23ff66518/1:1/w_1500,h_1500,c_limit/ohms_deftones.jpg",
    "https://www.emp-shop.no/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw321112f3/images/4/2/1/8/421825.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    "https://townsquare.media/site/295/files/2016/10/Ride_the_Lightning_album.jpg?w=980&q=75",
    "https://e.snmc.io/i/1200/s/4981d5cc58b6796f4146c4cabc498d7f/3831125",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/FooFighters-TheColourAndTheShape.jpg/220px-FooFighters-TheColourAndTheShape.jpg"
]

let index = 0
for (cassette in document.querySelector("#casettes").children){
    
    if (cassette< document.querySelector("#casettes").children.length){
        document.querySelector("#casettes").children[cassette].style.backgroundImage = "url("+covers[cassette],+")"
        document.querySelector("#casettes").children[cassette].id = index.toString()
        document.querySelector("#casettes").children[cassette].addEventListener("click", function(){
            chooseCasette()
        })
        
        console.log(document.querySelector("#casettes").children[index])
    }
    index++
    
}


function chooseCasette(){
    console.log((this.id))
    
}