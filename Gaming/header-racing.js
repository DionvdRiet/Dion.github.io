// var hond = 3;

// var header = new array(
// 	"Afbeeldingen/Racing/thecrew.jpg",
// 	"Afbeeldingen/Shooter/BF5.png", 
// 	"Afbeeldingen/Action/BG&E.png", 
// 	"Afbeeldingen/Shooter/BO4.png"
// 	){
// }

function thecrew2(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Headers/thecrew2.jpg)";
	document.getElementById("header").style.backgroundSize = "100%";
	// document.getElementById("header").style.backgroundPosition = "50% 0%";
	document.getElementById("header").style.transition = "background-image 2s ease-in-out";

	//Achtergrond gameplay
	document.getElementById("content").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Gameplay/thecrew2.jpg)";
	document.getElementById("content").style.transition = "background-image 2s ease-in-out";


	// Tekst
	document.getElementById("gametitel").innerHTML = "The Crew 2";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Racing";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>29 Juni 2018";
	document.getElementById("gametitel").style.fontSize = "120%";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "#F95385";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	document.getElementById("slide1").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide2").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide3").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide4").style.transition = "background-color 2s ease-in-out";

	if(document.getElementById("slide1").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "auto";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function forza(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Headers/forza.jpg)";
	document.getElementById("header").style.backgroundSize = "100%";
	// document.getElementById("header").style.backgroundPosition = "50% 20%";
	document.getElementById("header").style.transition = "background-image 2s ease-in-out";

	//Achtergrond gameplay
	document.getElementById("content").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Gameplay/forza.jpg)";
	document.getElementById("content").style.transition = "background-image 2s ease-in-out";

	// Tekst
	document.getElementById("gametitel").innerHTML = "Forza Horizon 4";
	document.getElementById("gametitel").style.fontSize = "120%";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Racing";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>2 Oktober 2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "#F95385";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	document.getElementById("slide1").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide2").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide3").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide4").style.transition = "background-color 2s ease-in-out";

	if(document.getElementById("slide2").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "auto";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function dakar18(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Headers/dakar.jpg)";
	document.getElementById("header").style.backgroundSize = "100%";
	// document.getElementById("header").style.backgroundPosition = "50% 70%";
	document.getElementById("gametitel").style.fontSize = "";
	document.getElementById("header").style.transition = "background-image 2s ease-in-out";

	//Achtergrond gameplay
	document.getElementById("content").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Gameplay/dakar.jpg)";
	document.getElementById("content").style.transition = "background-image 2s ease-in-out";

	//Tekst
	document.getElementById("gametitel").innerHTML = "Dakar 18";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Racing";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide3").style.backgroundColor = "#F95385";
	document.getElementById("slide4").style.backgroundColor = "rgba(255,255,255,0.5)";

	document.getElementById("slide1").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide2").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide3").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide4").style.transition = "background-color 2s ease-in-out";


	if(document.getElementById("slide3").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "auto";
		document.getElementById("slide4").style.cursor = "pointer";
	}
}

function onrush(){
	// Achtergrond
	document.getElementById("header").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Headers/onrush.jpg)";
	document.getElementById("header").style.backgroundSize = "100%";
	// document.getElementById("header").style.backgroundPosition = "50% 70%";
	document.getElementById("header").style.transition = "background-image 2s ease-in-out";

	//Achtergrond gameplay
	document.getElementById("content").style.backgroundImage = "url(Afbeeldingen/Meer-racing/Gameplay/onrush.jpg)";
	document.getElementById("content").style.transition = "background-image 2s ease-in-out";


	// Tekst
	document.getElementById("gametitel").innerHTML = "Onrush";
	document.getElementById("genre").innerHTML = "<span>Genre: </span>Racing";
	document.getElementById("platform").innerHTML = "<span>Platform: </span>PC/PS4/XBOX ONE";
	document.getElementById("datum").innerHTML = "<span>Datum: </span>5 Juni 2018";

	// Sliders
	document.getElementById("slide1").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide2").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide3").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("slide4").style.backgroundColor = "#F95385";

	document.getElementById("slide1").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide2").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide3").style.transition = "background-color 2s ease-in-out";
	document.getElementById("slide4").style.transition = "background-color 2s ease-in-out";

	if(document.getElementById("slide4").style.backgroundColor = "#F95385"){
		document.getElementById("slide1").style.cursor = "pointer";
		document.getElementById("slide2").style.cursor = "pointer";
		document.getElementById("slide3").style.cursor = "pointer";
		document.getElementById("slide4").style.cursor = "auto";
	}
}
