// Code for project 1

let btnOne = document.getElementById("infobutton-1");
let contOne = document.getElementById("infocontainer-1");
let infoOne = document.getElementById("infohandler-1");
let eOne = 1;

btnOne.onclick = function() {

    switch(eOne) {

    case 1:
        transformToX();
        contOne.style.transition = "1s" // To avoid the div crawling along the screen when flipping phone
        contOne.classList.remove("infocontainer");
        contOne.classList.add("infocontainer-show");
        btnOne.style.opacity = "1";
        btnOne.style.bottom = "-30px";
        setTimeout(function(){
            infoOne.style.opacity = "1";
            contOne.style.transition = "0s";
        }, 1000)
        eOne = 2
        break;
    
    case 2:
        transformToI();
        contOne.style.transition = "1s" 
        contOne.classList.remove("infocontainer-show");
        contOne.classList.add("infocontainer");
        btnOne.style.opacity = "0.7";
        btnOne.style.bottom = "3vh";
        infoOne.style.opacity = "0"
        eOne = 1
        setTimeout(function(){contOne.style.transition = "0s"}, 1000)
        break;
    }
}