///////////////////////////////////////////
//  Create Account page (signup.html)   //
/////////////////////////////////////////

//vars
var createAccountButton = document.getElementById("createAccountButton");


//methods
createAccountButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
createAccountButton.addEventListener('mouseleave', function () {
    this.style.backgroundColor = "#FFFFFF";
    this.style.borderColor = "#FFFFFF";
})