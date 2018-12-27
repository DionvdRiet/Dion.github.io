window.onscroll = function() {
    laden();
    populairFadeIn();
    lijstFadeIn();
    volgFadeIn();
    up();
    onderzoek();
    cocreatie();
    caseGaming();
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

function up(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0) {
        document.getElementById("up").style.animation = "up 1s ease-in-out forwards";
    }
}

function onderzoek(){
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop >550) {
        document.getElementById("onderzoek").style.animation = "up 1s ease-in-out forwards";
    }
}

function cocreatie(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop >600) {
        document.getElementById("cocreatie").style.animation = "up 1s ease-in-out forwards";
        document.getElementById("prototypes").style.animation = "up 1s ease-in-out forwards";
    }
}

function caseGaming(){
    document.getElementById('extra-case-titel').innerHTML = "Gaming Application";
    document.getElementById('extra-case-titel').style.top = "-50px";
    document.getElementById('case-een').style.height = "0px";
    document.getElementById('case-twee').style.height = "0px";
    document.getElementById('case-tekst1').style.opacity = "0";
    document.getElementById('case-tekst2').style.opacity = "0";
}