// window.onload      = responsiveAnimation()  ;

window.onscroll = function() {
pageScrollIndicator();
pageScrollIndicatorResponsive();
saveNowQuote();
saveNowSchets1();
saveNowSchets2();
saveNowSchets3();
saveNowEindresultaat();
saveNowExpenses();
saveNowToevoegen();
saveNowAnalyse();
saveNowArticles();
saveNowDebt();
volgendeCase();
aanHetScrollen();
startAnimation(x);
};

const NAME = "once";

function loadWebsiteCheck() {
    if (this.name !== NAME) {
      this.name = NAME;
      loadWebsite();
    } else {
     websiteIsLoaded();
    }
}

function loadWebsite(){
	document.getElementById('loadWebsite').style.opacity = "1";
	document.getElementById('loadWebsiteWit').style.height = "100%";
	document.getElementById('caseSwitchAnimation').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.getElementById('loadWebsiteTitel').style.transform = "translateY(0px)";
	setTimeout(1000);
	
	document.getElementById('loadWebsiteBarFilled').style.width = "100%";

	setTimeout(function(){ 
	  document.body.style.overflowY = "scroll";
	  document.getElementById('loadWebsite').style.opacity = "0";
	  document.getElementById('loadWebsiteWit').style.opacity = "0";
	  document.getElementById('loadWebsiteWit').style.display = "none";
	  document.getElementById('welkom-foto-1').style.backgroundSize = "100%";
	document.getElementById('welkom-foto-1').style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0) 100%), url('../Afbeeldingen/Welkom/welkom-foto-1.jpg')";

	}, 3000);

	setTimeout(function(){ 
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "2.5s";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('welkom').style.opacity = "1";
	document.getElementById('welkom-bericht').style.opacity = "1";
	document.getElementById('welkom-bericht').style.transform = "translateX(0px)";
	}, 900);

	setTimeout(function(){
		document.getElementById('loadWebsite').style.display = "none";
		document.getElementById('caseSwitchAnimation').style.display = "none";
		document.getElementById('desktop').style.animationName = "navDown";
		document.getElementById('desktop').style.opacity = "1";
		document.getElementById('responsive-nav-list').style.display = "none";
	}, 4000);
}

function websiteIsLoaded(){
	document.getElementById('welkom').style.opacity = "1";
	document.getElementById('loadWebsiteWit').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "none";
	document.getElementById('welkom-bericht').style.transitionDelay = "0s";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('welkom-bericht').style.opacity = "1";
	document.getElementById('welkom-bericht').style.transform = "translateX(0px)";
	document.getElementById('loadWebsite').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('desktop').style.opacity = "1";
	document.getElementById('welkom-foto-1').style.backgroundSize = "100%";
	document.getElementById('welkom-foto-1').style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0) 100%), url('../Afbeeldingen/Welkom/welkom-foto-1.jpg')";
	setTimeout(function(){
		document.getElementById('caseSwitchAnimation').style.display = "none";
		document.getElementById('responsive-nav-list').style.display = "none";
	}, 1000);
}


function pageScrollIndicator(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function pageScrollIndicatorResponsive(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBarResponsive").style.width = scrolled + "%";
}



function overlay(){
	document.getElementById('responsive-nav-list-item-1').style.opacity = "1";
    document.getElementById('responsive-nav-list-item-2').style.opacity = "1";
    document.getElementById('responsive-nav').style.height = "100vh";
    document.getElementById('responsive-nav-list').style.display = "flex";
    document.getElementById('responsive-nav-list').style.opacity = "1";
    document.getElementById('responsive-nav-list').style.backgroundColor = "#FFED00";
    document.getElementById('responsive-nav-list').style.height = "100%";

    document.getElementById('hamburger-1').style.transform = "rotate(-45deg)";
    document.getElementById('hamburger-2').style.transform = "rotate(45deg)";
    document.getElementById('hamburger-2').style.marginTop = "-8px";
    document.getElementById('hamburger-menu').id = "close-overlay";

    document.getElementById("close-overlay").onclick = function(){closeOverlay()};
}

function closeOverlay(){
    document.getElementById('responsive-nav').style.height = "120px";
    document.getElementById('responsive-nav-list').style.display = "none";
    document.getElementById('close-overlay').id = "hamburger-menu";
    document.getElementById('hamburger-1').style.marginBottom = "5px";
    document.getElementById('hamburger-2').style.marginTop = "5px";
    document.getElementById('hamburger-2').style.backgroundColor = "#252e45";

    document.getElementById('hamburger-1').style.transform = "rotate(0deg)";
    document.getElementById('hamburger-2').style.transform = "rotate(0deg)";
    document.getElementById('hamburger-2').style.transform = "translateY(0px)";

    document.getElementById("hamburger-menu").onclick = function(){overlay()};
}



function responsiveAnimation(x) {
  if (x.matches) { // If media query matches
    startAnimation();
  } else {
    startResponsiveAnimation();
  }
}

var x = window.matchMedia("(min-width: 1001px)")
responsiveAnimationTest(x)
x.addListener(responsiveAnimationTest)


function openProject(){
	document.getElementById('button-1').style.fontSize = "19px";
	document.getElementById('button-1').style.boxShadow = "none";
	document.getElementById('button-1').style.textShadow = "none";
}

function aanHetScrollen() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // document.getElementById("scroll-beneden").style.opacity = "0";
        document.getElementById("desktop").style.height = "50px";
        document.getElementById("active-page").style.fontSize = "20px";
        document.getElementById("inactive-page").style.fontSize = "20px";
        document.getElementById("active-page").style.margin = "-5px 20px";
        document.getElementById("inactive-page").style.margin = "-5px 20px";
        document.getElementById("active-page").style.color = "#575757";
        document.getElementById("inactive-page").style.color = "#575757";
        // document.getElementById("inactive-page").style.textDecorationColor = "white";
    } 

    else{
    	// document.getElementById("scroll-beneden").style.opacity = "1";
    	document.getElementById("desktop").style.height = "inherit";
    	document.getElementById("active-page").style.fontSize = "25px";
    	document.getElementById("inactive-page").style.fontSize = "25px";
    	document.getElementById("active-page").style.margin = "0px 30px";
        document.getElementById("inactive-page").style.margin = "0px 30px";
       	document.getElementById("active-page").style.color = "#252e45";
       	document.getElementById("inactive-page").style.color = "#252e45";
    }
}

function headerSizeNormal(){
		document.getElementById("desktop").style.height = "inherit";
		document.getElementById("active-page").style.fontSize = "25px";
		document.getElementById("inactive-page").style.fontSize = "25px";
		document.getElementById("active-page").style.margin = "0px 30px";
	    document.getElementById("inactive-page").style.margin = "0px 30px";
	    document.getElementById("active-page").style.color = "#252e45";
	    document.getElementById("inactive-page").style.color = "#252e45";
}

function headerSizeBack(){
        document.getElementById("desktop").style.height = "50px";
        document.getElementById("active-page").style.fontSize = "20px";
        document.getElementById("inactive-page").style.fontSize = "20px";
        document.getElementById("active-page").style.margin = "-5px 20px";
        document.getElementById("inactive-page").style.margin = "-5px 20px";
        document.getElementById("active-page").style.color = "#575757";
        document.getElementById("inactive-page").style.color = "#575757";
}

function startAnimation() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sectie-indicatie-achtergrond").style.transform = "translateX(0px)";
        document.getElementById("case-title").style.transform = "translateY(0px)";
        document.getElementById("case-title").style.opacity = "1";
        document.getElementById("animateIn1").style.opacity = "1";
        document.getElementById("animateIn2").style.opacity = "1";
        document.getElementById("animateIn3").style.opacity = "1";
        document.getElementById("animateIn4").style.opacity = "1";
        document.getElementById("animateIn5").style.opacity = "1";
        document.getElementById("animateIn6").style.opacity = "1";
        document.getElementById("animateIn7").style.opacity = "1";
    } 
}

function startResponsiveAnimation() {
        document.getElementById("sectie-indicatie-achtergrond").style.transform = "translateX(0px)";
        document.getElementById("case-title").style.transform = "translateY(0px)";
        document.getElementById("case-title").style.opacity = "1";
        document.getElementById("animateIn1").style.opacity = "1";
        document.getElementById("animateIn2").style.opacity = "1";
        document.getElementById("animateIn3").style.opacity = "1";
        document.getElementById("animateIn4").style.opacity = "1";
        document.getElementById("animateIn5").style.opacity = "1";
        document.getElementById("animateIn6").style.opacity = "1";
        document.getElementById("animateIn7").style.opacity = "1";
}

function home(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";
	document.getElementById("arrow-left").style.transform = "translateY(+90%)";
	document.getElementById("arrow-left").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Welkom";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";
	setTimeout("location.href = 'index.html';",1500)
}

function contact(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'contact.html';",1500)
}

function saveNowOn(){
	document.getElementById('welkom-save-now').style.backgroundSize = "103%";
	document.getElementById('welkom-save-now').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function playNextOn(){
	document.getElementById('welkom-play-next').style.backgroundSize = "103%";
	document.getElementById('welkom-play-next').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function onNieuw(){
	document.getElementById('volgendeCaseNieuw').style.backgroundSize = "103%";
	document.getElementById('volgendeCaseNieuw').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function benVerlengprocesOn(){
	document.getElementById('welkom-ben').style.backgroundSize = "103%";
	document.getElementById('welkom-ben').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function noothulpOn(){
	document.getElementById('welkom-noothulp').style.backgroundSize = "103%";
	document.getElementById('welkom-noothulp').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function caseOff(){
	document.getElementById('volgendeCaseNieuw').style.backgroundSize = "100%";
	document.getElementById('volgendeCaseNieuw').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

	document.getElementById('welkom-save-now').style.backgroundSize = "100%";
	document.getElementById('welkom-save-now').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

	document.getElementById('welkom-play-next').style.backgroundSize = "100%";
	document.getElementById('welkom-play-next').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

	document.getElementById('welkom-ben').style.backgroundSize = "100%";
	document.getElementById('welkom-ben').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

	document.getElementById('welkom-noothulp').style.backgroundSize = "100%";
	document.getElementById('welkom-noothulp').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}


function saveNowWelkom(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Save Now";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";
	// document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNextWelkom(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Play Next";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1500)
}

function benVerlengprocesWelkom(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Ben Verlengproces";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
}

function noothulpWelkom(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Noothulp";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'noothulp.html';",1500)
}

function saveNow(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";
	// document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNext(){
	document.getElementById('volgendeCasePlayNext').style.color = "#FFED00";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1500)
}

function saveNowNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNextNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1500)
}

function benVerlengprocesNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
}

function noothulpNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'noothulp.html';",1500)
}

function benVerlengproces(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
}

function noothulp(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'noothulp.html';",1500)
}

function caseSwitchAnimationDown(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById("header-image").style.backgroundSize = "100%";
	// document.getElementById("heade").style.filter = "blur(0px)";
	setTimeout(noOpacity, 1000);
}

function noOpacity(){
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.getElementById("caseSwitchAnimation").style.display = "none";
	document.getElementById('responsive-nav-list').style.display = "none";
}

function linkedIn(){
	window.open('https://www.linkedin.com/in/dion-van-der-riet-217479158/', '_blank');
}

function emailUp(){
	document.getElementById('email-popup').style.display = "flex";
}

function emailDown(){
	document.getElementById('email-popup').style.display = "none";
}

function emailCopied(){
	var copyText = document.getElementById("email-popup-text");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");

	document.getElementById('emailCopyButton').innerHTML = "GEKOPIËERD";
	document.getElementById('emailCopyButton').style.color = "#FFED00";
	document.getElementById('emailCopy').style.backgroundColor = "#252e45";
	document.getElementById('email-popup-text').style.backgroundColor = "#FFED00";
}

function saveNowQuote(){
	if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
		document.getElementById('doelgroepAnimation').style.opacity = "1";
		document.getElementById('doelgroepBeschrijving').style.opacity = "1";
        document.getElementById('saveNowQuote1').style.opacity = "1";
		document.getElementById('saveNowQuote1').style.transform = "translateY(0%)";
		document.getElementById('saveNowQuote2').style.opacity = "1";
		document.getElementById('saveNowQuote2').style.transform = "translateY(0%)";
		document.getElementById('finance-persona').style.width = "100%";
		document.getElementById('persona-beschrijving').style.opacity = "1";
    } 
}

function saveNowSchets1(){
	if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
		document.getElementById('full-image-save-now-1').style.opacity = "1";
		document.getElementById('full-image-save-now-1').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets2(){
	if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
		document.getElementById('full-image-save-now-2').style.opacity = "1";
		document.getElementById('full-image-save-now-2').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets3(){
	if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
		document.getElementById('full-image-save-now-3').style.opacity = "1";
		document.getElementById('full-image-save-now-3').style.transform = "translateY(0%)";
    } 
}

function saveNowEindresultaat(){
	if (document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300) {
		document.getElementById('saveNowEindresultaat').style.opacity = "1";
		document.getElementById('saveNowEindresultaat').style.backgroundSize = "100%";
    } 
}

function saveNowExpenses(){
	if (document.body.scrollTop > 5100 || document.documentElement.scrollTop > 5100) {
		document.getElementById('saveNowExpenses').style.opacity = "1";
		document.getElementById('saveNowExpenses').style.transform = "translateX(0%)";
		document.getElementById('expenses-tekst').style.opacity = "1";
    } 
}

function saveNowToevoegen(){
	if (document.body.scrollTop > 5800 || document.documentElement.scrollTop > 5800) {
		document.getElementById('saveNowToevoegen').style.opacity = "1";
		document.getElementById('saveNowToevoegen').style.transform = "translateX(0%)";
		document.getElementById('toevoegen-tekst').style.opacity = "1";
    } 
}

function saveNowAnalyse(){
	if (document.body.scrollTop > 6400 || document.documentElement.scrollTop > 6400) {
		document.getElementById('saveNowAnalyse').style.opacity = "1";
		document.getElementById('saveNowAnalyse').style.transform = "translateX(0%)";
		document.getElementById('analyse-tekst').style.opacity = "1";
    } 
}

function saveNowArticles(){
	if (document.body.scrollTop > 7100 || document.documentElement.scrollTop > 7100) {
		document.getElementById('saveNowArticles').style.opacity = "1";
		document.getElementById('saveNowArticles').style.transform = "translateX(0%)";
		document.getElementById('articles-tekst').style.opacity = "1";
    } 
}

function saveNowDebt(){
	if (document.body.scrollTop > 7800 || document.documentElement.scrollTop > 7800) {
		document.getElementById('saveNowDebt').style.opacity = "1";
		document.getElementById('saveNowDebt').style.transform = "translateX(0%)";
		document.getElementById('debt-tekst').style.opacity = "1";
    } 
}

function volgendeCase(){
	if (document.body.scrollTop > 8400 || document.documentElement.scrollTop > 8400) {
		document.getElementById('volgendeCase').style.opacity = "1";
		document.getElementById('volgendeCase').style.transform = "translateY(0%)";
		document.getElementById('volgendeCaseNieuw').style.opacity = "1";
		document.getElementById('volgendeCaseNieuwTekst').style.opacity = "1";
		document.getElementById('volgendeCaseNieuwTekst').style.transform = "translateY(0%)";
		document.getElementById('volgendeCaseButton').style.opacity = "1";
		document.getElementById('volgendeCaseButton').style.width = "40%";
		document.getElementById('footer').style.opacity = "1";
		document.getElementById('footer').style.width = "100vw";

		document.getElementById('linkedIn').style.opacity = "1";
		document.getElementById('email').style.opacity = "1";
    } 
}




