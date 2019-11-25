// Code for button animation
let spanaOne = document.getElementById("icon-one-1");
let spanbOne = document.getElementById("icon-two-1");

let circle = "buttonicon-circle-i";
let hidden = "buttonicon-hidden-i"
let hiddenMerge = "buttonicon-hidden-merge"
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
        spanaOne.classList.add(hiddenMerge);
    }, 700)

    setTimeout(function(){
        spanaOne.classList.remove(hiddenMerge);
        spanaOne.classList.add(hidden);
    }, 850)

    setTimeout(function(){
        spanaOne.classList.remove(hidden);
        spanaOne.classList.add(circle);
        spanbOne.classList.remove(lineMerge);
        spanbOne.classList.add(lineI);
    }, 1000)
}

spanaOne.classList.add(circle);
spanbOne.classList.add(lineI);

