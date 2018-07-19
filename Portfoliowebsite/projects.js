function gaming(){
	document.getElementById('gaming').style.backgroundImage = "url(Afbeeldingen/gamingapplication-full.png)";
	document.getElementById('gaming').style.transition = "background-image 0.3s ease-in-out";
	document.getElementById('car').style.opacity = "1";

	var car = document.getElementById('car');
	var tl1 = new TimelineMax({repeat:0});
	tl1.from(car, 2, {x:0, y:105, ease: Sine.easeInOut})
	.to(car, 5, {x:-100, y:105, ease: Sine.easeInOut});
}

function regaming(){
	document.getElementById('gaming').style.backgroundImage = "url(Afbeeldingen/gamingapplication.jpg)";
}

function mars(){
	document.getElementById('mars').style.backgroundImage = "url(Afbeeldingen/project-2.png)";
	document.getElementById('mars').style.transition = "background-image 0.3s ease-in-out";
}

function remars(){
	document.getElementById('mars').style.backgroundImage = "url(Afbeeldingen/time-app.jpg)";
}

function material(){
	document.getElementById('material').style.backgroundImage = "url(Afbeeldingen/material-full.jpg)";
	document.getElementById('material').style.transition = "background-image 0.3s ease-in-out";
}

function rematerial(){
	document.getElementById('material').style.backgroundImage = "url(Afbeeldingen/material.jpg)";
}