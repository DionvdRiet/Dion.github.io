window.onscroll = function() {

startAnimation()

};


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

function startAnimation() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
