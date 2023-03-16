const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c77cbcd4f1msh22437ad9ce9cc04p1f55b5jsnd83502dc14ac',
		'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
	}
};


//variabler broder
let søk = ""
let albumsInList = []

//referanser
const homeScreen = document.querySelector("#home")
const addAlbum = document.querySelector("#addAlbum")
const listeningList = document.querySelector("#listeningList")
const beforeSearch = document.querySelector("#beforeSearch")
const results = document.querySelector("#results")




//runs the search using theaudioDB !!!100 uses daily!!!
function search(){

    //bytte ut denne metoden? evt funksjon?
    document.querySelector("#loading").style.opacity=1
    
    
    søk = (document.getElementById("inputArtist").value)
    
    fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?s='+søk.toString(), options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(response => spawnOptions(response))
        .catch(err => console.error(err));


    //samma her
    beforeSearch.style.opacity=0
    

}


//spawning in albums by chosen artist
function spawnOptions(response){

    //!!!
    document.querySelector("#loading").style.opacity=0
    
    //oppdater med ny skikkelig slettefunskjon fra listen
    let elementsInResults=results.children
    let spawnedElements = 0
    for (let i = 0; i < elementsInResults.length; i++) {
        elementsInResults[i].style.display="none"
        spawnedElements++
        
    }

    //mækker elementer vettu
    for(i=0;i<response.album.length;i++){
        //console.log(response)
        let albumDisplay = document.createElement("div")
        let albumText = document.createElement("div")
        let albumImage = document.createElement("img")

        //spawning
        document.querySelector("#results").appendChild(albumDisplay)
        albumDisplay.classList.add("albumDisplay")
        albumDisplay.appendChild(albumImage)
        albumDisplay.appendChild(albumText)
        
        //tilfeldigheter
        albumDisplay.style.rotate = (Math.random()*10)-5 + "deg"
        albumDisplay.style.scale = 1+(Math.random()/2) + "deg"

        //innhold
        albumText.innerHTML= "<strong>"+(response.album[i].strAlbum)+"</strong>" + " by: "+søk
        albumImage.src = response.album[i].strAlbumThumb
        albumImage.alt="albumCover"
        //behandler legging til i listen
        albumDisplay.addEventListener("click",function(){
            let added = document.createElement("div")
            
            this.appendChild(added)
            added.classList.add("added")
            var child = this
            var parent = child.parentNode;
            var index = Array.prototype.indexOf.call(parent.children, child);
            
            added.innerHTML = "added to list"
            
            let albumData = new Object()
            //console.log(spawnedElements)
            //getTracks(response.album[0].idAlbum)
            albumData.cover = response.album[parseInt(index)-spawnedElements].strAlbumThumb
            albumData.name = response.album[parseInt(index)-spawnedElements].strAlbum
            
            albumData.artist = søk
            if (albumData != undefined){
                albumsInList.push(albumData)
                addToCollection(albumData)
                getUsersAlbums()
            }
            
            
    
        })

        

    }
    results.style.opacity=1
    results.style.scale=1
    let backButton = document.createElement("div")
        document.querySelector("#results").appendChild(backButton)
        backButton.innerHTML="Back"
        backButton.classList.add("button")
        backButton.classList.add("resultsButton")
        backButton.addEventListener("click", beforeSearchScene)
}

//switching "scenes"
//må byttes ut man, dette e wack
function addAlbums(){
    homeScreen.style.opacity=0
    addAlbum.style.opacity=1
    addAlbum.style.scale=1
    beforeSearch.style.opacity=1
    
}

function showList(){
    homeScreen.style.opacity=0
    listeningList.style.opacity=1
    listeningList.style.scale=1
    makeList()
}

function home(){
    homeScreen.style.opacity=1
    addAlbum.style.opacity=0
    addAlbum.style.scale=0
    listeningList.style.scale=0
    listeningList.style.opacity=0
    beforeSearch.style.opacity=0
}

function beforeSearchScene(){
    results.style.opacity=0
    results.style.scale=0
    beforeSearch.style.opacity=1
    
}


//Creating elements on the listeninglist-page
function makeList(){
    let elementsInResults=listeningList.children
    for (let i = 0; i < elementsInResults.length; i++) {
        elementsInResults[i].style.display="none"
        
    }
    //holder styr på hvor mange elementer som er slettes, 
    //brukes i slettefunsksjonen for å få riktig index
    
    
    //her mækkes displays for albumene 
    for(i=0;i<albumsInList.length;i++){
        if(albumsInList[i].name!=undefined){
            
            let albumDisplay = document.createElement("div")
            let albumText = document.createElement("div")
            let albumImage = document.createElement("img")

            listeningList.appendChild(albumDisplay)
            albumDisplay.classList.add("albumDisplay")
            albumDisplay.setAttribute("id",i)

            albumDisplay.appendChild(albumImage)
            albumDisplay.appendChild(albumText)

            console.table(albumsInList[i].name,albumsInList[i].cover,albumsInList[i].artist)

            albumDisplay.style.rotate = (Math.random()*10)-5 + "deg"
            albumDisplay.style.scale = 1+(Math.random()/2) + "deg"
            albumText.innerHTML= "<strong>"+(albumsInList[i].name)+"</strong>" + " by: "+albumsInList[i].artist
            albumImage.src = albumsInList[i].cover


            //sletter elementer som blir trykket på
            albumDisplay.addEventListener("click",function(){
              
                albumsInList.pop(this.id)
                this.parentElement.removeChild(this.parentElement.children[parseInt(this.id)])
                elementsInResults=listeningList.children

                for (let i = 0; i < elementsInResults.length; i++) {
                    elementsInResults[i].setAttribute("id",i)
                    
                }
                
                
            })
        }
    }

    //mækker back-knapp
    let backButton = document.createElement("div")
    listeningList.appendChild(backButton)
    backButton.innerHTML="Back"
    backButton.classList.add("button")
    backButton.addEventListener("click", home)
}




//TODO:
/* 
- autocomplete?
- (localstorage) FIREBASE
- SQL
- huske hva som er lagret allered (localstorage?)
- vise låter?
- kanskje slippe å fetche hver gang (kanskje umulig)
- Fonter som er scalable
- Bedre knapper?
- Enter-knapp for søk
 !!! FLERE ARTISTER FUNKER IKKE, MILDT KRISE !!! (cannot read undefined elns) (er muligens fikset?)
 */




/*  function getTracks(albumId){


    fetch('https://theaudiodb.p.rapidapi.com/track.php?m='+albumId.toString(), options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


 }

function spawnSongList(response){
    console.log(response)
    console.log("^^^")
 } */




 //!!! FIREBASE
 const firebaseConfig = {
    apiKey: "AIzaSyDdMPY780dlSmWk6o-53ACa7AYP128SAxE",
    authDomain: "listeninglist.firebaseapp.com",
    projectId: "listeninglist",
    storageBucket: "listeninglist.appspot.com",
    messagingSenderId: "838577196012",
    appId: "1:838577196012:web:ca0c1603b55f0e49510ec9",
    measurementId: "G-3D98BEB86N"
  };
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// Lager en referanse til databasen
let db = firebase.firestore();

let aktiveDocs = []

function getFromBase(){
db.collection("listeningList").get().then((snapshot) => {
    // Henter ut dokumentene
    let dokumenter = snapshot.docs;
    aktiveDocs.length = 0
    for (let i = 0; i < dokumenter.length; i++) {
        aktiveDocs.push(dokumenter[i].data().username)
        
    }

    // Skriver dokumentene til konsollen
    console.log(dokumenter);
    console.log(dokumenter[0].data())
   
   
});}
getFromBase()

let username = ""
let savedUsers = []

function getUsernames(){
db.collection("usernames").get().then((snapshot) => {
    // Henter ut dokumentene
    let dokumenter = snapshot.docs;
    savedUsers.length = 0
    for (let i = 0; i < dokumenter.length; i++) {
        savedUsers.push(dokumenter[i].data())
        
    }

    // Skriver dokumentene til konsollen
    console.log(dokumenter);
    
    createUser()
   
   
});}
getUsernames()
function createUser(){
    console.log(savedUsers)
    if(document.getElementById("username").value==""){
        return
    }
    
    let canAdd = true


    

    for (let i = 0; i < savedUsers.length; i++) {
        if (savedUsers[i].username == document.getElementById("username").value && savedUsers[i].password == document.getElementById("password").value){
        alert("Du er nå logget inn som "+savedUsers[i].username)
        getUsersAlbums()
        canAdd=false
        username = document.getElementById("username").value
        return
        }else if(savedUsers[i].username == document.getElementById("username").value){
            alert("dette brukernavnet er i bruk")
            canAdd=false
            return
        }else{
            alert("Ny bruker med navn " + document.getElementById("username").value + " registrert" )
            getUsersAlbums()
        }
    }
    if (canAdd){
    db.collection("usernames").add({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    });
    username = document.getElementById("username").value
    
    }
}


function addToCollection(Data){
    db.collection("listeningList").add({
        albumInfo:Data,
        username:username
    });
}

let usersAlbums = []


function getUsersAlbums(){
    db.collection("listeningList").get().then((snapshot) => {
        // Henter ut dokumentene
        let dokumenter = snapshot.docs;
        
        for (let i = 0; i < dokumenter.length; i++) {
            if (dokumenter[i].data().username == username){
                usersAlbums.push(dokumenter[i].data())
                console.log(dokumenter[i].data().albumInfo.name)
            }
            
        }
        
    
        // Skriver dokumentene til konsollen
        console.log(dokumenter);
        
        
       
       
    });
}
