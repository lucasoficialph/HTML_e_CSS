var Menu = document.querySelector("#menuPrincipal")
var main = document.querySelector("#main")
var closeMenuBackground = document.querySelector(".closeMenuBackground")

function openMenu(){ 
    main.style = "padding-left: 200px" 
    closeMenuBackground.style = "display: block"
    Menu.style = "transform: translateX(200px)"
}

function closeMenu(){
    main.style = "padding-right: none"
    closeMenuBackground.style = "display: none"
    Menu.style = "transform: translateX(0px)"
}

closeMenuBackground.addEventListener("click", function(){
    closeMenuBackground.style = "display: none"
    Menu.style = "transform: translateX(0px)"
    main.style = "padding-right: none"
})