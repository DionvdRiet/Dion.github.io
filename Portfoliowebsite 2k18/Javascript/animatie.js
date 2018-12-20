   window.onscroll = function() {

    indicator1()
    indicator2()
    indicator3()
    
    };




function indicator1() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("indicator-1").style.backgroundColor = "#38F8D4";
        document.getElementById("indicator-1").style.width = "50px";
        document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-2").style.width = "25px";
        document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-3").style.width = "25px";
    } 
}

function indicator2() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("indicator-1").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-1").style.width = "25px";
        document.getElementById("indicator-2").style.backgroundColor = "#38F8D4";
        document.getElementById("indicator-2").style.width = "50px";
        document.getElementById("indicator-3").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-3").style.width = "25px";
    } 
}

function indicator3() {
    if (document.body.scrollTop > 1300|| document.documentElement.scrollTop > 1300) {
        document.getElementById("indicator-1").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-1").style.width = "25px";
        document.getElementById("indicator-2").style.backgroundColor = "#131A2B";
        document.getElementById("indicator-2").style.width = "25px";
        document.getElementById("indicator-3").style.backgroundColor = "#38F8D4";
        document.getElementById("indicator-3").style.width = "50px";
    } 
}

function overlay(){
    document.getElementById('responsive-menu').style.color = "blue";
    document.getElementById('responsive-menu').style.innerHTML = "Sluit menu";
    document.getElementById('responsive-nav-item-1').style.display = "block";
    document.getElementById('responsive-nav-item-2').style.display = "block";
    document.getElementById('responsive-nav-item-3').style.display = "block";
    document.getElementById('responsive-nav-item-1').style.opacity = "1";
    document.getElementById('responsive-nav-item-2').style.opacity = "1";
    document.getElementById('responsive-nav-item-3').style.opacity = "1";
    document.getElementById('header').style.height = "40%";

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

function pagina(){
	setTimeout("location.href = 'gaming.html';",2000)
}

function pagina2(){
    setTimeout("location.href = 'ben.html';",2000)
}

function pagina3(){
    setTimeout("location.href = 'noothulp.html';",2000)
}

