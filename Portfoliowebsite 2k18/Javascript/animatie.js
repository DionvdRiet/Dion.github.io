
window.onscroll = function() {
    myFunction()
    populairFadeIn()
    lijstFadeIn()
    volgFadeIn()
};
// window.onscroll = function() {volgFadeIn()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 350) {
        document.getElementById("indicator-actief").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-actief").style.width = "25px";
        document.getElementById("indicator-inactief").style.backgroundColor = "#38F8D4";
        document.getElementById("indicator-inactief").style.width = "50px";
    } 
    else {
        document.getElementById("indicator-actief").style.backgroundColor = "#38F8D4";
        document.getElementById("indicator-actief").style.width = "50px";
        document.getElementById("indicator-inactief").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-inactief").style.width = "25px";
    }
}

function laden(){
	document.getElementById('load').style.opacity = "1";
}

function lineChange(){
	document.getElementById('projecten-lijn').style.textDecoration = "line-through";
	document.getElementById('projecten-lijn').style.textDecorationColor = "#38F8D4";
}

function lineNormal(){
	document.getElementById('projecten-lijn').style.textDecoration = "none";
}

function projectDicht(){
	document.getElementById('project-1').style.height = "0%";
	// document.getElementById('project-1').style.gridRow = "2/4";
	document.getElementById('button').style.backgroundSize = "100% 100%";
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

function projectOpen(){
	document.getElementById('project-1').style.height = "100%";
	document.getElementById('project-1').style.gridRow = "1/4";
}

function pagina(){
	setTimeout("location.href = 'gaming.html';",2000)
}

function pagina2(){
    setTimeout("location.href = 'ben.html';",2000)
}


function populairFadeIn() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop >650) {
        document.getElementById("populair").style.animation = "fadeIn 0.5s ease-in forwards";
    }
}

function lijstFadeIn() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop >750) {
        document.getElementById("lijst").style.opacity = "1";
        document.getElementById("lijst").style.animation = "fadeIn 0.5s ease-in forwards";
        document.getElementById("lijst-img").style.left = "0px";
        document.getElementById("lijst-img").style.transition = "left 1.2s ease-in-out";
    }
}

function volgFadeIn() {
    if (document.body.scrollTop > 1150 || document.documentElement.scrollTop >1300) {
        document.getElementById("volg").style.opacity = "1";
        document.getElementById("volg").style.animation = "fadeIn 0.5s ease-in forwards";
    }
}
