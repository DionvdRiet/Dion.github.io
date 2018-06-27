// var hond = 3;

// var header = new array(
// 	"Afbeeldingen/Racing/thecrew.jpg",
// 	"Afbeeldingen/Shooter/BF5.png", 
// 	"Afbeeldingen/Action/BG&E.png", 
// 	"Afbeeldingen/Shooter/BO4.png"
// 	){
// }

function theCrew(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Headers/thecrew2.jpg)";

	// Tekst
	document.getElementById("gametitel").innerHTML = "The Crew 2";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Racing";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>29 juni 2018";
	document.getElementById("gametitel").style.fontSize = "120%";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "#F95385";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	if(document.getElementById("slide1").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "auto";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function BO4(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Headers/BO4.jpg)";
	document.getElementById("header").style.backgroundSize = "80%";

	// Tekst
	document.getElementById("gametitel").innerHTML = "Call of Duty: Black Ops 4";
	document.getElementById("gametitel").style.fontSize = "120%";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>First Person Shooter";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>12 Oktober 2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "#F95385";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	if(document.getElementById("slide2").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "auto";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function BF5(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Headers/BF5.jpg)";
	document.getElementById("header").style.backgroundSize = "100%";
	document.getElementById("gametitel").style.fontSize = "";

	//Tekst
	document.getElementById("gametitel").innerHTML = "Battlefield V";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>First Person Shooter";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>11 Oktober 2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide3").style.backgroundColor = "#F95385";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	if(document.getElementById("slide3").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "auto";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function RDR2(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Headers/RDR2.jpg)";
	document.getElementById("header").style.backgroundSize = "70%";
	document.getElementById("header").style.backgroundPosition = "30% 70%";


	// Tekst
	document.getElementById("gametitel").innerHTML = "Red Dead Redemption 2";
	document.getElementById("gametitel").style.fontSize = "120%";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Action-Adventure";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>26 Oktober 2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide4").style.backgroundColor = "#F95385";

	if(document.getElementById("slide4").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "auto";
	}
}
