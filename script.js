var FirstsButtons = document.querySelectorAll("#FirstsButtons")
var SecondsButtons = document.querySelectorAll("#SecondsButtons")

FirstsButtons[0].addEventListener('click', function(){
    FirstsButtons[0].style.color = "white"
    FirstsButtons[0].style.background = "#2cca4e"


    FirstsButtons[1].style.color = "black"
    FirstsButtons[1].style.background = "white"
})

FirstsButtons[1].addEventListener('click', function(){
    FirstsButtons[1].style.color = "white"
    FirstsButtons[1].style.background = "#dc3545"

    FirstsButtons[0].style.color = "black"
    FirstsButtons[0].style.background = "white"
})


SecondsButtons[0].addEventListener('click', function(){
    SecondsButtons[0].style.color = "white"
    SecondsButtons[0].style.background = "#2cca4e"


    SecondsButtons[1].style.color = "black"
    SecondsButtons[1].style.background = "white"
})

SecondsButtons[1].addEventListener('click', function(){
    SecondsButtons[1].style.color = "white"
    SecondsButtons[1].style.background = "#dc3545"

    SecondsButtons[0].style.color = "black"
    SecondsButtons[0].style.background = "white"
})

