/////////////////////////////////////
//  Welcome page (welcome.html)   //
///////////////////////////////////

//vars
var signupButton = document.getElementById("signupButton");
var loginButton = document.getElementById("loginButton");



//methods
signupButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
signupButton.addEventListener('mouseleave', function () {
    this.style.backgroundColor = "#FFFFFF";
    this.style.borderColor = "#FFFFFF";
})

loginButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
loginButton.addEventListener('mouseleave', function () {
    this.style.backgroundColor = "#FFFFFF";
    this.style.borderColor = "#FFFFFF";
})