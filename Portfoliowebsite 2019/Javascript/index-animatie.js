window.onscroll = function() {
caseOne();
caseTwo();
caseThree();
caseFour();
};

function caseOne(){
	if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
	    document.getElementById("welkom-save-now").style.transform = "translateX(0%)";
	    document.getElementById("welkom-save-now").style.opacity = "1";
	    document.getElementById("save-now-project-info").style.opacity = "1";
	} 
}

function caseTwo(){
	if (document.body.scrollTop > 1650 || document.documentElement.scrollTop > 1650) {
	    document.getElementById("welkom-play-next").style.transform = "translateX(0%)";
	    document.getElementById("play-next-project-info").style.opacity = "1";
	} 
}

function caseThree(){
	if (document.body.scrollTop > 2550 || document.documentElement.scrollTop > 2550) {
	    document.getElementById("welkom-ben").style.transform = "translateX(0%)";
	    document.getElementById("ben-project-info").style.opacity = "1";
	} 
}

function caseFour(){
	if (document.body.scrollTop > 3450 || document.documentElement.scrollTop > 3450) {
	    document.getElementById("welkom-noothulp").style.transform = "translateX(0%)";
	    document.getElementById("noothulp-project-info").style.opacity = "1";
	} 
}