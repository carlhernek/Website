// Code for button animation
let spanaOne = document.getElementById("icon-one-1");
let spanbOne = document.getElementById("icon-two-1");

let circle = "buttonicon-circle-i";
let hidden = "buttonicon-hidden-i"
let lineI = "buttonicon-line-90-i";
let lineMerge = "buttonicon-line-90";
let line45 = "buttonicon-line-45";
let lineN45 = "buttonicon-line--45";

function transformToX () {
    setTimeout(function(){
        spanaOne.classList.remove(circle);
        spanaOne.classList.add(lineMerge);
        spanbOne.classList.remove(lineI);
        spanbOne.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaOne.classList.remove(lineMerge);
        spanaOne.classList.add(line45);
        spanbOne.classList.remove(lineMerge);
        spanbOne.classList.add(lineN45);
    }, 700)
}

function transformToI () {
    setTimeout(function(){
        spanaOne.classList.remove(line45);
        spanaOne.classList.add(lineMerge);
        spanbOne.classList.remove(lineN45);
        spanbOne.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaOne.classList.remove(lineMerge);
        spanaOne.classList.add(hidden);
    }, 500)

    setTimeout(function(){
        spanaOne.classList.remove(hidden);
        spanaOne.classList.add(circle);
        spanbOne.classList.remove(lineMerge);
        spanbOne.classList.add(lineI);
    }, 800)
}

spanaOne.classList.add(circle);
spanbOne.classList.add(lineI);


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