// Code for project 1

let btnOne = document.getElementById("infobutton-1");
let contOne = document.getElementById("infocontainer-1");
let infoOne = document.getElementById("infohandler-1");
let eOne = 1;

btnOne.onclick = function() {

    switch(eOne) {

    case 1:
        transformOneToX();
        contOne.style.transition = "1s" // To avoid the div crawling along the screen when flipping phone
        contOne.classList.remove("infocontainer");
        contOne.classList.add("infocontainer-show");
        btnOne.style.opacity = "1";
        btnOne.style.bottom = "-30px";
        infoOne.style.display = "block";
        setTimeout(function(){
            infoOne.style.opacity = "1";
            contOne.style.transition = "0s";
        }, 1000)
        eOne = 2
        break;
    
    case 2:
        transformOneToI();
        contOne.style.transition = "1s" 
        contOne.classList.remove("infocontainer-show");
        contOne.classList.add("infocontainer");
        btnOne.style.opacity = "0.8";
        btnOne.style.bottom = "3vh";
        infoOne.style.display = "none";
        infoOne.style.opacity = "0"
        eOne = 1
        setTimeout(function(){contOne.style.transition = "0s"}, 1000)
        break;
    }
}

// Code for project 2

let btnTwo = document.getElementById("infobutton-2");
let contTwo = document.getElementById("infocontainer-2");
let infoTwo = document.getElementById("infohandler-2");
let eTwo = 1;

btnTwo.onclick = function() {

    switch(eTwo) {

    case 1:
        transformTwoToX();
        contTwo.style.transition = "1s" 
        contTwo.classList.remove("infocontainer");
        contTwo.classList.add("infocontainer-show");
        btnTwo.style.opacity = "1";
        btnTwo.style.bottom = "-30px";
        infoTwo.style.display = "block";
        setTimeout(function(){
            infoTwo.style.opacity = "1";
            contTwo.style.transition = "0s";
        }, 1000)
        eTwo = 2
        break;
    
    case 2:
        transformTwoToI();
        contTwo.style.transition = "1s" 
        contTwo.classList.remove("infocontainer-show");
        contTwo.classList.add("infocontainer");
        btnTwo.style.opacity = "0.8";
        btnTwo.style.bottom = "3vh";
        infoTwo.style.display = "none";
        infoTwo.style.opacity = "0"
        eTwo = 1
        setTimeout(function(){contTwo.style.transition = "0s"}, 1000)
        break;
    }
}

// Code for project 3

let btnThree = document.getElementById("infobutton-3");
let contThree = document.getElementById("infocontainer-3");
let infoThree = document.getElementById("infohandler-3");
let eThree = 1;

btnThree.onclick = function() {

    switch(eThree) {

    case 1:
        transformThreeToX();
        contThree.style.transition = "1s" 
        contThree.classList.remove("infocontainer");
        contThree.classList.add("infocontainer-show");
        btnThree.style.opacity = "1";
        btnThree.style.bottom = "-30px";
        infoThree.style.display = "block";
        setTimeout(function(){
            infoThree.style.opacity = "1";
            contThree.style.transition = "0s";
        }, 1000)
        eThree = 2
        break;
    
    case 2:
        transformThreeToI();
        contThree.style.transition = "1s" 
        contThree.classList.remove("infocontainer-show");
        contThree.classList.add("infocontainer");
        btnThree.style.opacity = "0.8";
        btnThree.style.bottom = "3vh";
        infoThree.style.display = "none";
        infoThree.style.opacity = "0"
        eThree = 1
        setTimeout(function(){contThree.style.transition = "0s"}, 1000)
        break;
    }
}