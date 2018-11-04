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
	document.getElementById('project').style.height = "0%";
	document.getElementById('project').style.gridRow = "2/4";
	document.getElementById('button').style.backgroundSize = "100% 100%";
	document.getElementById('button').style.color = "white";
	document.getElementById('fadeOut').style.opacity = "0";

	// document.getElementById('button').style.background = "linear-gradient(to right, rgba(67,233,123,1) 0%, rgba(56,249,215,1) 100%)"
}

function projectOpen(){
	document.getElementById('project').style.height = "100%";
	document.getElementById('project').style.gridRow = "1/4";
}

function pagina(){
	setTimeout("location.href = 'gaming.html';",2000)
}
