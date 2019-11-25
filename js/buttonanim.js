// Code for button animation
let spanaOne = document.getElementById("icon-one-1");
let spanbOne = document.getElementById("icon-two-1");
let spanaTwo = document.getElementById("icon-one-2");
let spanbTwo = document.getElementById("icon-two-2");
let spanaThree = document.getElementById("icon-one-3");
let spanbThree = document.getElementById("icon-two-3");

let circle = "buttonicon-circle-i";
let hidden = "buttonicon-hidden-i"
let hiddenMerge = "buttonicon-hidden-merge"
let lineI = "buttonicon-line-90-i";
let lineMerge = "buttonicon-line-90";
let line45 = "buttonicon-line-45";
let lineN45 = "buttonicon-line--45";

// Function button One

function transformOneToX () {
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

function transformOneToI () {
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

// Function button Two

function transformTwoToX () {
    setTimeout(function(){
        spanaTwo.classList.remove(circle);
        spanaTwo.classList.add(lineMerge);
        spanbTwo.classList.remove(lineI);
        spanbTwo.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaTwo.classList.remove(lineMerge);
        spanaTwo.classList.add(line45);
        spanbTwo.classList.remove(lineMerge);
        spanbTwo.classList.add(lineN45);
    }, 700)
}

function transformTwoToI () {
    setTimeout(function(){
        spanaTwo.classList.remove(line45);
        spanaTwo.classList.add(lineMerge);
        spanbTwo.classList.remove(lineN45);
        spanbTwo.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaTwo.classList.remove(lineMerge);
        spanaTwo.classList.add(hiddenMerge);
    }, 700)

    setTimeout(function(){
        spanaTwo.classList.remove(hiddenMerge);
        spanaTwo.classList.add(hidden);
    }, 850)

    setTimeout(function(){
        spanaTwo.classList.remove(hidden);
        spanaTwo.classList.add(circle);
        spanbTwo.classList.remove(lineMerge);
        spanbTwo.classList.add(lineI);
    }, 1000)
}

// Function button Three

function transformThreeToX () {
    setTimeout(function(){
        spanaThree.classList.remove(circle);
        spanaThree.classList.add(lineMerge);
        spanbThree.classList.remove(lineI);
        spanbThree.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaThree.classList.remove(lineMerge);
        spanaThree.classList.add(line45);
        spanbThree.classList.remove(lineMerge);
        spanbThree.classList.add(lineN45);
    }, 700)
}

function transformThreeToI () {
    setTimeout(function(){
        spanaThree.classList.remove(line45);
        spanaThree.classList.add(lineMerge);
        spanbThree.classList.remove(lineN45);
        spanbThree.classList.add(lineMerge);
    }, 100)

    setTimeout(function(){
        spanaThree.classList.remove(lineMerge);
        spanaThree.classList.add(hiddenMerge);
    }, 700)

    setTimeout(function(){
        spanaThree.classList.remove(hiddenMerge);
        spanaThree.classList.add(hidden);
    }, 850)

    setTimeout(function(){
        spanaThree.classList.remove(hidden);
        spanaThree.classList.add(circle);
        spanbThree.classList.remove(lineMerge);
        spanbThree.classList.add(lineI);
    }, 1000)
}

spanaOne.classList.add(circle);
spanbOne.classList.add(lineI);

spanaTwo.classList.add(circle);
spanbTwo.classList.add(lineI);

spanaThree.classList.add(circle);
spanbThree.classList.add(lineI);

