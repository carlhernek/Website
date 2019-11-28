
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
    scrOne.scrollIntoView();
}

menuBtnTwo.onclick = function () {
    scrTwo.scrollIntoView();
}

menuBtnThree.onclick = function () {
    scrThree.scrollIntoView();
}

menuBtnFour.onclick = function () {
    scrFour.scrollIntoView();
}

menuBtnFive.onclick = function () {
    scrFive.scrollIntoView();
}

let ctaArrow = document.getElementById("clickarrow");

ctaArrow.onclick = function () {
    scrTwo.scrollIntoView();
}