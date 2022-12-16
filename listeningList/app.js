let addToListValues = [
    {   albumName: "hei" ,
        artistName: "nei" ,
        årstall: 1,
        imageSrc:"" },
  ];

let listNumberToAdd=0;






function toggleActive(kortId){
    document.getElementById(kortId).classList.add("active")
    
}





document.querySelector(".addButton").addEventListener("click", addToList)

function addToList(){
    addToListValues.push()
    addToListValues[listNumberToAdd].albumName = document.getElementById("album").value
    addToListValues[listNumberToAdd].artistName = document.getElementById("artist").value
    addToListValues[listNumberToAdd].årstall = document.getElementById("årstall").value
    addToListValues[listNumberToAdd].imageSrc = document.querySelector(".fileInput").value
    console.log(addToListValues[listNumberToAdd])
    listNumberToAdd++
    addElementToList()
}


document.querySelector(".inputAreaToggle").addEventListener("click", toggleInputs)
function toggleInputs(){
    document.querySelector(".inputFelt").classList.toggle("activeInput")
    
}

function addElementToList(){
    let parentDiv = document.createElement("div")
    document.querySelector("#liste").appendChild(parentDiv)
    parentDiv.classList.add("listElement")

    let image = document.createElement("div")
    parentDiv.appendChild(image)
    image.classList.add("image")
    image.style.backgroundImage = "url("+addToListValues[listNumberToAdd].imageSrc+")"

    let albumName = document.createElement("div")
    parentDiv.appendChild(albumName)
    albumName.classList.add("albumName")
    let artistName = document.createElement("div")
    parentDiv.appendChild(artistName)
    artistName.classList.add("artistName")
    let årstall = document.createElement("div")
    parentDiv.appendChild(årstall)
    årstall.classList.add("årstall")
}

