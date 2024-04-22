/////////////////////////////////
//  Login page (signin.html)  //
///////////////////////////////

//vars
var singinButton = document.getElementById("signinButton");


//methods
signinButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
    signinButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = "#FFFFFF";
        this.style.borderColor = "#FFFFFF";
    })