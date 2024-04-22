/////////////////////////////////
//  Quotes Page (quotes.html) //
///////////////////////////////


//vars
var savedQuotesButton = document.getElementById("savedQuotesButton");
var nextQuoteButton = document.getElementById("nextQuoteButton");


//initials
savedQuotesButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
    savedQuotesButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = "#FFFFFF";
        this.style.borderColor = "#FFFFFF";
    })
nextQuoteButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "#949494";
    this.style.borderColor = "#949494";
})
    nextQuoteButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = "#FFFFFF";
        this.style.borderColor = "#FFFFFF";
    })