// window.onload      = responsiveAnimation()  ;

window.onscroll = function() {
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
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.body.style.overflowY = "hidden";
	document.getElementById('loadWebsite').style.opacity = "1";
	document.getElementById('loadWebsiteBarFilled').style.width = "100%";

	setTimeout(function(){ 
	  document.body.style.overflowY = "scroll";
	  document.getElementById('loadWebsite').style.opacity = "0";
	  document.getElementById('loadWebsiteWit').style.opacity = "0";
	  document.getElementById('loadWebsiteWit').style.display = "none";

	}, 3000);

	setTimeout(function(){ 
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "2.5s";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('welkom-bericht').style.opacity = "1";
	 document.getElementById('welkom-bericht').style.transform = "translateX(0px)";
	}, 500);

	setTimeout(function(){
		document.getElementById('loadWebsite').style.display = "none";
		document.getElementById('caseSwitchAnimation').style.display = "none";
	}, 10000);
}

function websiteIsLoaded(){
	document.getElementById('loadWebsiteWit').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "none";
	document.getElementById('welkom-bericht').style.transitionDelay = "0s";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('welkom-bericht').style.opacity = "1";
	document.getElementById('welkom-bericht').style.transform = "translateX(0px)";
	document.getElementById('loadWebsite').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.display = "none";

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

	// document.getElementById('volgende-case-1').style.width = "100vw";
	// document.getElementById('volgende-case-1').style.zIndex = "1";
	// document.getElementById('volgende-case-2').style.zIndex = "0";
	// document.getElementById('volgende-case-1').style.top = "-100px";
	// document.getElementById('volgende-case-1').style.opacity = "0";
	// document.getElementById('volgende-case-1').style.transform = "translate(0%, -500px)";

	// document.getElementById('volgende-cases').style.justifyContent = "space-between";
	// document.getElementById('volgende-cases').style.opacity = "0";
	// document.getElementById('volgende-cases').style.transition = "opacity 0.5s ease-in";
}

function aanHetScrollen() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-beneden").style.opacity = "0";
        document.getElementById("desktop").style.height = "50px";
        document.getElementById("active-page").style.fontSize = "20px";
        document.getElementById("inactive-page").style.fontSize = "20px";
        document.getElementById("active-page").style.margin = "-5px 20px";
        document.getElementById("inactive-page").style.margin = "-5px 20px";
        document.getElementById("active-page").style.color = "#F5F5F5";
        document.getElementById("inactive-page").style.color = "#F5F5F5";
        // document.getElementById("inactive-page").style.textDecorationColor = "white";
    } 

    else{
    	document.getElementById("scroll-beneden").style.opacity = "1";
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
        document.getElementById("active-page").style.color = "#F5F5F5";
        document.getElementById("inactive-page").style.color = "#F5F5F5";
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
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'index.html';",1500)
}

function overMij(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'persoonlijk.html';",1500)
}

function contact(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'contact.html';",1500)
}

function saveNow(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNext(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'play-next.html';",1500)
}

function benVerlengproces(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
}

function noothulp(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";

	setTimeout("location.href = 'noothulp.html';",1500)
}

function caseSwitchAnimationDown(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	setTimeout(noOpacity, 1000);
}

function noOpacity(){
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.getElementById("caseSwitchAnimation").style.display = "none";
}

