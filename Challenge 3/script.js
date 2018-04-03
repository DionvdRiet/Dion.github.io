

function getAPIdata() {

	// get latest weather
	fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=f7f1680fa8f3203a7bd7724195d79100&units=metric')
	
	// parse to JSON format 
	.then(function(response) {
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {

		console.log(response.name);
		document.getElementById('stad').innerHTML = response.name


		console.log(response.main.temp);
		document.getElementById('temperatuur').innerHTML = response.main.temp + "\xB0C"

		console.log(response);
		document.getElementById('beschrijving').innerHTML = "temperatuur"

	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

getAPIdata();

document.getElementById("submit").onmouseover = function() {mouseOver()};
document.getElementById("submit").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById('zoeken').style.background = "url('backgrounds/london.jpg')"; 
   	document.getElementById('zoeken').style.backgroundSize = "100%";
   	document.getElementById('zoeken').style.backgroundPosition = "center";

}

function mouseOut() {
	document.getElementById('zoeken').style.background = "none"; 
    document.getElementById('zoeken').style.backgroundColor = "#f0f0f0";
}


//Om te testen dat het goed gelinkt is:
//document.body.style.backgroundColor = 'red';