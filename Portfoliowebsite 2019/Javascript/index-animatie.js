window.onscroll = function() {
aanHetScrollen();
welkomIntroductie();
caseOne();
caseTwo();
caseThree();
caseFour();
projectenIndicator();
};


function projectenIndicator(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("welkom-projecten-indicator").style.opacity = "1";
        document.getElementById("welkom-projecten-indicator").style.transform = "translateX(0%)"; 
        // document.getElementById("welkom-projecten-indicator").style.animation = "indicatorfade 3s backwards";     
    } 

    else{
        document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
        // document.getElementById("welkom-projecten-indicator").style.animation = "indicatorfade 3s forwards";
        // document.getElementById("welkom-projecten-indicator").style.animationDelay = "3s";
    }
}


function aanHetScrollen() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-beneden").style.opacity = "0";
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

function welkomIntroductie(){
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("welkom-introductie").style.opacity = "1";
        document.getElementById("welkom-introductie").style.color = "#575757";
    } 
}

function caseOne(){
	if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
	    document.getElementById("welkom-save-now").style.transform = "translateX(0%)";
	    document.getElementById("welkom-save-now").style.opacity = "1";
	    document.getElementById("save-now-project-info").style.opacity = "1";

        document.getElementById("project-indicator-1").style.backgroundColor = "#FFED00";
        document.getElementById("project-indicator-2").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-3").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-4").style.backgroundColor = "rgba(120, 120, 120, 0.3)";

        document.getElementById("project-indicator-1").style.width = "40px";
        document.getElementById("project-indicator-2").style.width = "20px";
        document.getElementById("project-indicator-3").style.width = "20px";
        document.getElementById("project-indicator-4").style.width = "20px";

        document.getElementById("project-indicator-1").style.boxShadow = "3px 3px 10px rgba(255, 237, 0,0.5)";
        document.getElementById("project-indicator-2").style.boxShadow = "none";
        document.getElementById("project-indicator-3").style.boxShadow = "none";
        document.getElementById("project-indicator-4").style.boxShadow = "none";
	} 
}

function caseTwo(){
	if (document.body.scrollTop > 1650 || document.documentElement.scrollTop > 1650) {
	    document.getElementById("welkom-play-next").style.transform = "translateX(0%)";
	    document.getElementById("play-next-project-info").style.opacity = "1";

        document.getElementById("project-indicator-1").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-2").style.backgroundColor = "#FFED00";
        document.getElementById("project-indicator-3").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-4").style.backgroundColor = "rgba(120, 120, 120, 0.3)";

        document.getElementById("project-indicator-1").style.width = "20px";
        document.getElementById("project-indicator-2").style.width = "40px";
        document.getElementById("project-indicator-3").style.width = "20px";
        document.getElementById("project-indicator-4").style.width = "20px";

        document.getElementById("project-indicator-1").style.boxShadow = "none";
        document.getElementById("project-indicator-2").style.boxShadow = "3px 3px 10px rgba(255, 237, 0,0.5)";
        document.getElementById("project-indicator-3").style.boxShadow = "none";
        document.getElementById("project-indicator-4").style.boxShadow = "none";
	} 
}

function caseThree(){
	if (document.body.scrollTop > 2550 || document.documentElement.scrollTop > 2550) {
	    document.getElementById("welkom-ben").style.transform = "translateX(0%)";
	    document.getElementById("ben-project-info").style.opacity = "1";

        document.getElementById("project-indicator-1").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-2").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-3").style.backgroundColor = "#FFED00";
        document.getElementById("project-indicator-4").style.backgroundColor = "rgba(120, 120, 120, 0.3)";

        document.getElementById("project-indicator-1").style.width = "20px";
        document.getElementById("project-indicator-2").style.width = "20px";
        document.getElementById("project-indicator-3").style.width = "40px";
        document.getElementById("project-indicator-4").style.width = "20px";

        document.getElementById("project-indicator-1").style.boxShadow = "none";
        document.getElementById("project-indicator-2").style.boxShadow = "none";
        document.getElementById("project-indicator-3").style.boxShadow = "3px 3px 10px rgba(255, 237, 0,0.5)";
        document.getElementById("project-indicator-4").style.boxShadow = "none";
	} 
}

function caseFour(){
	if (document.body.scrollTop > 3450 || document.documentElement.scrollTop > 3450) {
	    document.getElementById("welkom-noothulp").style.transform = "translateX(0%)";
	    document.getElementById("noothulp-project-info").style.opacity = "1";

        document.getElementById("project-indicator-1").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-2").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-3").style.backgroundColor = "rgba(120, 120, 120, 0.3)";
        document.getElementById("project-indicator-4").style.backgroundColor = "#FFED00";

        document.getElementById("project-indicator-1").style.width = "20px";
        document.getElementById("project-indicator-2").style.width = "20px";
        document.getElementById("project-indicator-3").style.width = "20px";
        document.getElementById("project-indicator-4").style.width = "40px";

        document.getElementById("project-indicator-1").style.boxShadow = "none";
        document.getElementById("project-indicator-2").style.boxShadow = "none";
        document.getElementById("project-indicator-3").style.boxShadow = "none";
        document.getElementById("project-indicator-4").style.boxShadow = "3px 3px 10px rgba(255, 237, 0,0.5)";
	} 
}