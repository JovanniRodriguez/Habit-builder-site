/////////////////////////////////////
//  Profile page (profile.html)   //
///////////////////////////////////

//vars
var accountSettings = document.getElementById("accountSettings");
var themeSettings = document.getElementById("themeSettings");
var notificationSettings = document.getElementById("notificationSettings");


//initials
accountSettings.style.color = "#FFFFFF";
themeSettings.style.color = "#70747c";
notificationSettings.style.color = "#70747c";


//methods
accountSettings.addEventListener('click', function(){
    accountSettings.style.color = "#FFFFFF";
    themeSettings.style.color = "#70747c";
    notificationSettings.style.color = "#70747c";
});

themeSettings.addEventListener('click', function(){
    themeSettings.style.color = "#FFFFFF";
    accountSettings.style.color = "#70747c";
    notificationSettings.style.color = "#70747c";
});

notificationSettings.addEventListener('click', function(){
    notificationSettings.style.color = "#FFFFFF";
    accountSettings.style.color = "#70747c";
    themeSettings.style.color = "#70747c";
});