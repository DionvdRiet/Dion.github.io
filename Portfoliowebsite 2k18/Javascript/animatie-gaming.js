window.onscroll = function() {
		laden()
    	populairFadeIn()
        lijstFadeIn()
       volgFadeIn()
};


function laden(){
	document.getElementById('load').style.opacity = "1";
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

function caseDown(){
    // document.getElementById('extra-case-titel').innerHTML = "Gaming Application";
    // document.getElementById('extra-case-titel').style.top = "-50px";
    document.getElementById('case-een').style.height = "0px";
    document.getElementById('case-twee').style.height = "0px";
    document.getElementById('case-tekst1').style.textDecoration = "underline";
    document.getElementById('case-tekst1').style.textDecorationColor = "#38F8D4";
    document.getElementById('case-tekst1').style.opacity = "0";
    document.getElementById('case-tekst2').style.opacity = "0";
}

function caseGamingDelay(){
    setTimeout("location.href = 'gaming.html';",1000)
}

function caseBenDelay(){
    setTimeout("location.href = 'ben.html';",1000)
}

function caseNoothulpDelay(){
    setTimeout("location.href = 'noothulp.html';",1000)
}

function underline1(){
    document.getElementById('case-tekst1').style.textDecoration = "underline";
    document.getElementById('case-tekst1').style.textDecorationColor = "#38F8D4";
}

function underline2(){
    document.getElementById('case-tekst2').style.textDecoration = "underline";
    document.getElementById('case-tekst2').style.textDecorationColor = "#38F8D4";
}

function unline(){
    document.getElementById('case-tekst1').style.textDecoration = "none";
    document.getElementById('case-tekst2').style.textDecoration = "none";
}