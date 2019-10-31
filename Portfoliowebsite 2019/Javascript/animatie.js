   window.onscroll = function() {

    indicator1()
    indicator2()
    indicator3()
    indicator4()
    
    };


function indicator(){
    document.getElementById("indicator").style.marginLeft = "0px";
    document.getElementById("indicator-1").style.width = "50px";
    document.getElementById("indicator-2").style.width = "25px";
    document.getElementById("indicator-3").style.width = "25px";
    document.getElementById("indicator-1").style.backgroundColor = "#FFED00";
    document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
    document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
}

function up(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0) {
        document.getElementById("up").style.animation = "up 1s ease-in-out forwards";
    }
}


function indicator1() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("indicator-1").style.backgroundColor = "#FFED00";
        document.getElementById("indicator-1").style.width = "50px";
        document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-2").style.width = "25px";
        document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-3").style.width = "25px";
        document.getElementById("indicator-4").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-4").style.width = "25px";
    } 
}

function indicator2() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("indicator-1").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-1").style.width = "25px";
        document.getElementById("indicator-2").style.backgroundColor = "#FFED00";
        document.getElementById("indicator-2").style.width = "50px";
        document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-3").style.width = "25px";
        document.getElementById("indicator-4").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-4").style.width = "25px";
    } 
}

function indicator3() {
    if (document.body.scrollTop > 1300|| document.documentElement.scrollTop > 1300) {
        document.getElementById("indicator-1").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-1").style.width = "25px";
        document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-2").style.width = "25px";
        document.getElementById("indicator-3").style.backgroundColor = "#FFED00";
        document.getElementById("indicator-3").style.width = "50px";
        document.getElementById("indicator-4").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-4").style.width = "25px";
    } 
}

function indicator4() {
    if (document.body.scrollTop > 2200|| document.documentElement.scrollTop > 2200) {
        document.getElementById("indicator-1").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-1").style.width = "25px";
        document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-2").style.width = "25px";
        document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-3").style.width = "25px";
        document.getElementById("indicator-4").style.backgroundColor = "#FFED00";
        document.getElementById("indicator-4").style.width = "50px";
    } 
}

function indicatorOneOn(){
   document.getElementById("indicator-1").style.backgroundColor = "#FFED00";
   document.getElementById("indicator-1").style.width = "50px";
}

function indicatorTwoOn(){
   document.getElementById("indicator-2").style.backgroundColor = "#FFED00";
   document.getElementById("indicator-2").style.width = "50px";
}

function indicatorTwoOff(){
   document.getElementById("indicator-2").style.backgroundColor = "inherit";
   document.getElementById("indicator-2").style.width = "initial";
}

function indicatorThreeOn(){
   document.getElementById("indicator-3").style.backgroundColor = "#FFED00";
   document.getElementById("indicator-3").style.width = "50px";
}

function lineChange(){
	document.getElementById('projecten-lijn').style.textDecoration = "line-through";
	document.getElementById('projecten-lijn').style.textDecorationColor = "#FFED00";
}

function lineNormal(){
	document.getElementById('projecten-lijn').style.textDecoration = "none";
}

function projectDicht(){
	document.getElementById('p').style.height = "0vh";
	// document.getElementById('project-1').style.gridRow = "2/4";
	document.getElementById('button').style.backgroundSize = "100% 100%";
    // document.getElementById('button').style.background = "background:linear-gradient(to right,rgba(229, 248, 56,1) 0%,rgba(229,248,56,1) 100%)";
	document.getElementById('button').style.color = "white";
	document.getElementById('sectie-1').style.opacity = "0";

	// document.getElementById('button').style.background = "linear-gradient(to right, rgba(67,233,123,1) 0%, rgba(56,249,215,1) 100%)"
}

function project2Dicht(){
    document.getElementById('project-2').style.height = "0%";
    document.getElementById('button2').style.backgroundSize = "100% 100%";
    document.getElementById('button2').style.color = "white";
    document.getElementById('sectie-2').style.opacity = "0";

    // document.getElementById('button').style.background = "linear-gradient(to right, rgba(67,233,123,1) 0%, rgba(56,249,215,1) 100%)"
}

function project3Dicht(){
    document.getElementById('project-3').style.height = "0%";
    document.getElementById('button3').style.backgroundSize = "100% 100%";
    document.getElementById('button3').style.color = "white";
    document.getElementById('sectie-3').style.opacity = "0";

    // document.getElementById('button').style.background = "linear-gradient(to right, rgba(67,233,123,1) 0%, rgba(56,249,215,1) 100%)"
}

function projectOpen(){
	document.getElementById('project-1').style.height = "100%";
	document.getElementById('project-1').style.gridRow = "1/4";
}

function saveNow(){
    document.getElementById('caseSwitchAnimation').style.opacity = "1";
    document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
    setTimeout("location.href = 'save-now.html';",2000)
}

function playNext(){
    document.getElementById('caseSwitchAnimation').style.opacity = "1";
    document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	setTimeout("location.href = 'play-next.html';",2000)
}

function benVerlengproces(){
    document.getElementById('caseSwitchAnimation').style.opacity = "1";
    document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
    setTimeout("location.href = 'ben-verlengproces.html';",2000)
}

function noothulp(){
    document.getElementById('caseSwitchAnimation').style.opacity = "1";
    document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
    setTimeout("location.href = 'noothulp.html';",2000)
}

function projectContainer(){
    // document.getElementById('project-container').style.marginTop = "0px";
    document.getElementById('informatie-p').style.opacity = "1";
    document.getElementById('informatie-h2-1').style.opacity = "1";
    document.getElementById('informatie-h2-2').style.opacity = "1";
    document.getElementById('informatie-h2-3').style.opacity = "1";
    document.getElementById('yellow-line').style.color = "#FFED00";
    document.getElementById('yellow-line').style.opacity = "1";
    document.getElementById('yellow-line-2').style.color = "#FFED00";
    document.getElementById('yellow-line-2').style.opacity = "1";
    document.getElementById('transformTitle').style.transform = "translate3d(0px, 0px, 0px)";

}

function overlay(){
    document.getElementById('overlay').style.height = "100vh";
    document.getElementById('hamburger-1').style.margin = "10px 0px";
    document.getElementById('hamburger-2').style.margin = "10px 0px";
    document.getElementById('hamburger-3').style.margin = "10px 0px";
    document.getElementById('hamburger-1').style.backgroundColor = "#FFED00";
    document.getElementById('hamburger-2').style.backgroundColor = "white";
    document.getElementById('hamburger-3').style.backgroundColor = "white";
    document.getElementById('overlay-menu-1').style.display = "block";
    document.getElementById('overlay-menu-2').style.display = "block";
    document.getElementById('overlay-menu-3').style.display = "block";
    document.getElementById('overlay-menu-1').style.opacity = "0.9";
    document.getElementById('overlay-menu-2').style.opacity = "1";
    document.getElementById('overlay-menu-3').style.opacity = "1";
    document.getElementById('header').style.backgroundColor = "#131A2B";
    document.getElementById('header').style.border = "1px solid rgba(255,255,255,0.15)";
    document.getElementById('hamburger-menu').id = "close-overlay";

    document.getElementById("close-overlay").onclick = function(){closeOverlay()};

    function closeOverlay() {
    document.getElementById('overlay').style.height = "0vh";
    // document.getElementById('overlay').style.width = "100vw";
    // document.getElementById('overlay').style.display = "0vh";
    document.getElementById('hamburger-1').style.margin = "5px 0px";
    document.getElementById('hamburger-2').style.margin = "5px 0px";
    document.getElementById('hamburger-3').style.margin = "5px 0px";
    document.getElementById('hamburger-1').style.backgroundColor = "#131A2B";
    document.getElementById('hamburger-2').style.backgroundColor = "#131A2B";
    document.getElementById('hamburger-3').style.backgroundColor = "#131A2B";
    document.getElementById('overlay-menu-1').style.display = "none";
    document.getElementById('overlay-menu-2').style.display = "none";
    document.getElementById('overlay-menu-3').style.display = "none";
    document.getElementById('overlay-menu-1').style.filter = "opacity(0)";
    document.getElementById('overlay-menu-2').style.filter = "opacity(0)";
    document.getElementById('overlay-menu-3').style.filter = "opacity(0)";
    document.getElementById('header').style.backgroundColor = "white";
    document.getElementById('header').style.border = "1px solid rgba(112,112,112,0.15)";
    document.getElementById("close-overlay").id = "hamburger-menu";
    document.getElementById("hamburger-menu").onclick = function(){overlay()};
}

}


function responsiveProjectOne(){
    document.getElementById('responsive-project-line-1').style.height = "100vh";
    document.getElementById('responsive-project-line-1').style.alignSelf = "center";
    document.getElementById('responsive-title-1').style.alignSelf = "center";
    document.getElementById('responsive-title-1').style.fontSize = "100px";
    document.getElementById('responsive-par-1').style.alignSelf = "center";
    document.getElementById('responsive-par-1').style.position = "relative";
    document.getElementById('responsive-par-1').style.marginTop = "400px";
    document.getElementById('responsive-par-1').style.fontSize = "60px";
    document.getElementById('responsive-image-1').style.display = "none";
    // document.getElementById('responsive-image-1').style.width = "1500px";
    // document.getElementById('responsive-image-1').style.top = "-100px";
    // document.getElementById('responsive-image-1').style.filter = "opacity(0.1)";
    document.getElementById('responsive-project-line-1').style.background = 'linear-gradient('
        + 'rgba(229, 248, 56, 0.90)' + ', ' + 'rgba(229, 248, 56, 0.90)' + '), url(../Afbeeldingen/Gaming/full-overzicht.jpg)';
    document.getElementById("responsive-project-line-1").style.transition = "height 1s ease-in-out forwards";
    document.getElementById("responsive-project-line-1").style.backgroundSize = "cover";
    document.getElementById("responsive-project-line-1").style.backgroundPosition = "center";
    document.getElementById("project-box").style.backgroundColor = "transparent";
    document.getElementById("project-box").style.border = "none";
    document.getElementById("project-box").style.height = "80vh";
    document.getElementById("responsive-project-2").style.display = "none";
    document.getElementById("responsive-project-3").style.display = "none";
    document.getElementById("responsive-button").style.display = "none";
    document.getElementById('responsive-project-line-1').style.height = "100vh";
    setTimeout(projectOmhoog, 500)
    setTimeout("location.href = 'play-next.html';",1000)
}

function responsiveProjectTwo(){
    document.getElementById('responsive-project-line-1').style.height = "100vh";
    document.getElementById('responsive-project-line-1').style.alignSelf = "center";
    document.getElementById('responsive-title-1').style.alignSelf = "center";
    document.getElementById('responsive-title-1').style.fontSize = "100px";
    document.getElementById('responsive-par-1').style.alignSelf = "center";
    document.getElementById('responsive-par-1').style.position = "relative";
    document.getElementById('responsive-par-1').style.marginTop = "400px";
    document.getElementById('responsive-par-1').style.fontSize = "60px";
    document.getElementById('responsive-image-1').style.display = "none";
    // document.getElementById('responsive-image-1').style.width = "1500px";
    // document.getElementById('responsive-image-1').style.top = "-100px";
    // document.getElementById('responsive-image-1').style.filter = "opacity(0.1)";
    document.getElementById('responsive-project-line-1').style.background = 'linear-gradient('
        + 'rgba(229, 248, 56, 0.90)' + ', ' + 'rgba(229, 248, 56, 0.90)' + '), url(../Afbeeldingen/Gaming/full-overzicht.jpg)';
    document.getElementById("responsive-project-line-1").style.transition = "height 1s ease-in-out forwards";
    document.getElementById("responsive-project-line-1").style.backgroundSize = "cover";
    document.getElementById("responsive-project-line-1").style.backgroundPosition = "center";
    document.getElementById("project-box").style.backgroundColor = "transparent";
    document.getElementById("project-box").style.border = "none";
    document.getElementById("project-box").style.height = "80vh";
    document.getElementById("responsive-project-2").style.display = "none";
    document.getElementById("responsive-project-3").style.display = "none";
    document.getElementById("responsive-button-ben").style.display = "none";
    document.getElementById('responsive-project-line-1').style.height = "100vh";
    setTimeout(projectOmhoog, 500)
    setTimeout("location.href = 'ben-verlengproces.html';",1000)
}

function responsiveProjectThree(){
    document.getElementById('responsive-project-line-3').style.height = "100vh";
    document.getElementById('responsive-project-line-3').style.alignSelf = "center";
    document.getElementById('responsive-title-3').style.alignSelf = "center";
    document.getElementById('responsive-title-3').style.fontSize = "100px";
    document.getElementById('responsive-par-3').style.alignSelf = "center";
    document.getElementById('responsive-par-3').style.position = "relative";
    document.getElementById('responsive-par-3').style.marginTop = "400px";
    document.getElementById('responsive-par-3').style.fontSize = "60px";
    document.getElementById('responsive-image-3').style.display = "none";
    // document.getElementById('responsive-image-1').style.width = "1500px";
    // document.getElementById('responsive-image-1').style.top = "-100px";
    // document.getElementById('responsive-image-1').style.filter = "opacity(0.1)";
    document.getElementById('responsive-project-line-3').style.background = 'linear-gradient('
        + 'rgba(229, 248, 56, 0.90)' + ', ' + 'rgba(229, 248, 56, 0.90)' + '), url(../Afbeeldingen/Noothulp/home-test.jpg)';
    document.getElementById("responsive-project-line-3").style.transition = "height 1s ease-in-out forwards";
    document.getElementById("responsive-project-line-3").style.backgroundSize = "cover";
    document.getElementById("responsive-project-line-3").style.backgroundPosition = "center";
    document.getElementById("project-box").style.backgroundColor = "transparent";
    document.getElementById("project-box").style.border = "none";
    document.getElementById("project-box").style.height = "80vh";
    document.getElementById("responsive-project-1").style.display = "none";
    document.getElementById("responsive-project-2").style.display = "none";
    document.getElementById("responsive-button-noothulp").style.display = "none";
    document.getElementById('responsive-project-line-3').style.height = "100vh";
    setTimeout(projectOmhoog, 500)
    setTimeout("location.href = 'noothulp.html';",1000)
}

function projectOmhoog(){
    // document.getElementById('responsive-project-line-1').style.height = "100vh";
    document.getElementById('project-omhoog').style.height = "2000px";
    document.getElementById('project-omhoog').style.marginTop = "-50px";
}

