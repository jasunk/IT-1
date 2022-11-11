
let mode = 0
function modeToggle(){
    if (mode==0) {
        mode=1
        document.getElementById("mode").style.content= "url('sun.png')"
        document.body.style.backgroundColor = "var(--d-bg)"
        document.body.style.color = "var(--d-txt)"
        document.body.style.setProperty("--l-theme", "#3E4F51")


    }else{
        mode=0
        document.getElementById("mode").style.content= "url('moon.png')"
        document.body.style.backgroundColor = "var(--l-bg)"
        document.body.style.color = "var(--l-txt)"
        document.body.style.setProperty("--l-theme", "#AEDCC0")
    }
    console.log(mode)
}