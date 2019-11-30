
let scrOne = document.getElementById("aboutme");
let scrTwo = document.getElementById("project-1");
let scrThree = document.getElementById("project-2");
let scrFour = document.getElementById("project-3");
let scrFive = document.getElementById("curriculumv");

let menuBtnOne = document.getElementById("about");
let menuBtnTwo = document.getElementById("frontend");
let menuBtnThree = document.getElementById("uiux");
let menuBtnFour = document.getElementById("design");
let menuBtnFive = document.getElementById("resume");

menuBtnOne.onclick = function () {
    closeAll();
    scrOne.scrollIntoView();
}

menuBtnTwo.onclick = function () {
    closeAll();
    scrTwo.scrollIntoView();
}

menuBtnThree.onclick = function () {
    closeAll();
    scrThree.scrollIntoView();
}

menuBtnFour.onclick = function () {
    closeAll();
    scrFour.scrollIntoView();
}

menuBtnFive.onclick = function () {
    closeAll();
    scrFive.scrollIntoView();
}

let ctaArrow = document.getElementById("clickarrow");

ctaArrow.onclick = function () {
    closeAll();
    scrTwo.scrollIntoView();
}