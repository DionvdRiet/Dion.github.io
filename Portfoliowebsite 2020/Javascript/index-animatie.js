window.onscroll = function(){
projectenIndicator();
aanHetScrollen();
welkomIntroductie();
saveNowWelkomHover();
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
        // document.getElementById("scroll-beneden").style.opacity = "0";
        document.getElementById("desktop").style.height = "50px";
        document.getElementById("desktop").style.gridTemplateColumns = "550px auto 550px";
        document.getElementById("headerContainer").style.height = "50px";
        document.getElementById("inactive-page-1").style.fontSize = "18px";
        document.getElementById("active-page-1").style.fontSize = "18px";
        // document.getElementById("inactive-page").style.alignSelf = "center";
        // document.getElementById("inactive-page").style.textDecorationColor = "white";
    } 

    else{
        // document.getElementById("scroll-beneden").style.opacity = "1";
        document.getElementById("desktop").style.height = "inherit";
        document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
        document.getElementById("headerContainer").style.height = "50px";
        document.getElementById("active-page-1").style.fontSize = "18px";
        document.getElementById("inactive-page-1").style.fontSize = "18px";
        document.getElementById("active-page").style.margin = "0px 30px";
        document.getElementById("inactive-page-1").style.margin = "0px 30px";
        document.getElementById("active-page").style.color = "#131824";
        document.getElementById("inactive-page-1").style.color = "#131824";
    }
}

function saveNowWelkomHover(){
    document.getElementById("welkom-save-now").style.transform = "translateY(-4%)";
    document.getElementById("welkom-save-now").style.boxShadow = "0px 4px 8px rgba(0,0,0,0.06)";
    document.getElementById("welkom-save-now").style.backgroundPosition = "40% 0%";
}

function saveNowWelkomNormal(){
    document.getElementById("welkom-save-now").style.transform = "translateY(0%)";
    document.getElementById("welkom-save-now").style.boxShadow = "none";
    document.getElementById("welkom-save-now").style.backgroundPosition = "30% 50%";
}

function playNextWelkomHover(){
    document.getElementById("welkom-play-next").style.transform = "translateY(-4%)";
    document.getElementById("welkom-play-next").style.boxShadow = "0px 4px 8px rgba(0,0,0,0.06)";
    document.getElementById("welkom-play-next").style.backgroundPosition = "20% 80%";
}

function playNextWelkomNormal(){
    document.getElementById("welkom-play-next").style.transform = "translateY(0%)";
    document.getElementById("welkom-play-next").style.boxShadow = "none";
    document.getElementById("welkom-play-next").style.backgroundPosition = "10% 50%";
}

function benWelkomHover(){
    document.getElementById("welkom-ben").style.transform = "translateY(-4%)";
    document.getElementById("welkom-ben").style.boxShadow = "0px 4px 8px rgba(0,0,0,0.06)";
    document.getElementById("welkom-ben").style.backgroundPosition = "10% 60%";
}

function benWelkomNormal(){
    document.getElementById("welkom-ben").style.transform = "translateY(0%)";
    document.getElementById("welkom-ben").style.boxShadow = "none";
    document.getElementById("welkom-ben").style.backgroundPosition = "0% 50%";
}

function noothulpWelkomHover(){
    document.getElementById("welkom-noothulp").style.transform = "translateY(-4%)";
    document.getElementById("welkom-noothulp").style.boxShadow = "0px 4px 8px rgba(0,0,0,0.06)";
    document.getElementById("welkom-noothulp").style.backgroundPosition = "85% 50%";
}

function noothulpWelkomNormal(){
    document.getElementById("welkom-noothulp").style.transform = "translateY(0%)";
    document.getElementById("welkom-noothulp").style.boxShadow = "none";
    document.getElementById("welkom-noothulp").style.backgroundPosition = "100% 50%";
}

