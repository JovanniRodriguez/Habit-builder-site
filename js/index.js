//////////////////
//  Global JS  //
////////////////

//vars
var homeIcon = document.getElementById("homeIcon");
var tasksIcon = document.getElementById("tasksIcon");
var quoteIcon = document.getElementById("quoteIcon");
var profileIcon = document.getElementById("profileIcon");

var homeTooltip = document.getElementById("homeTooltip");
var statsTooltip = document.getElementById("statsTooltip");
var quotesTooltip = document.getElementById("quotesTooltip");
var profileTooltip = document.getElementById("profileTooltip");


//initials
homeTooltip.style.visibility = "hidden";
statsTooltip.style.visibility = "hidden";
quotesTooltip.style.visibility = "hidden";
profileTooltip.style.visibility = "hidden";





//methods
homeIcon.addEventListener('mouseenter', function () {
    this.style.opacity = 1;
    homeTooltip.style.visibility = "visible";
})
homeIcon.addEventListener('mouseleave', function () {
    this.style.opacity = 0.5;
    homeTooltip.style.visibility = "hidden";
})
tasksIcon.addEventListener('mouseenter', function () {
    this.style.opacity = 1;
    statsTooltip.style.visibility = "visible";
})
tasksIcon.addEventListener('mouseleave', function () {
    this.style.opacity = 0.5;
    statsTooltip.style.visibility = "hidden";
})
quoteIcon.addEventListener('mouseenter', function () {
    this.style.opacity = 1;
    quotesTooltip.style.visibility = "visible";
})
quoteIcon.addEventListener('mouseleave', function () {
    this.style.opacity = 0.5;
    quotesTooltip.style.visibility = "hidden";
})
profileIcon.addEventListener('mouseenter', function () {
    this.style.opacity = 1;
    profileTooltip.style.visibility = "visible";
})
profileIcon.addEventListener('mouseleave', function () {
    this.style.opacity = 0.5;
    profileTooltip.style.visibility = "hidden";
})