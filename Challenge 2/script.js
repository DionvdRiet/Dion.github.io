//Hours


function amsterdamTime(){
	var d = new Date();
	var hoursAmsterdam = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	if(secs < 10) {
		secs = "0" + secs;
	}

	if(mins < 10) {
		mins = "0" + mins;
	}

	if(hoursAmsterdam < 10) {
		hoursAmsterdam = "0" + hoursAmsterdam;
	}

	if (hoursAmsterdam >= 0 && hoursAmsterdam <= 5) {
   		document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(30, 60, 114, 0.80)' + ', ' + 'rgba(42, 82, 152, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";      
   	}

	else if (hoursAmsterdam >= 6 && hoursAmsterdam <= 11){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
	}

	else if (hoursAmsterdam >= 12 && hoursAmsterdam <= 17){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.80)' + ', ' + 'rgba(0, 236, 188, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
     
	}

	else if (hoursAmsterdam >= 18 && hoursAmsterdam <= 23){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(98, 29, 209, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
	}

	document.getElementById("mainTimeAmsterdam").innerHTML = hoursAmsterdam+":"+mins+":"+secs;
}
setInterval(amsterdamTime, 100);

function newYorkTime(){
	var d = new Date();
	var hoursNewYork = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	if(secs < 10) {
		secs = "0" + secs;
	}

	if(mins < 10) {
		mins = "0" + mins;
	}

	if(hoursNewYork < 10) {
		hoursNewYork = "0" + hoursNewYork;
	}

	hoursNewYork = hoursNewYork - 5;

	if (hoursNewYork >= 0 && hoursNewYork <= 5) {
   		document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(30, 60, 114, 0.80)' + ', ' + 'rgba(42, 82, 152, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";      
   	}

	else if (hoursNewYork >= 6 && hoursNewYork <= 11){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
	}

	else if (hoursNewYork >= 12 && hoursNewYork <= 17){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.80)' + ', ' + 'rgba(0, 236, 188, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
     
	}

	else if (hoursNewYork >= 18 && hoursNewYork <= 23){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(98, 29, 209, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
	}

	document.getElementById("mainTimeNewYork").innerHTML = hoursNewYork+":"+mins+":"+secs;
}
setInterval(newYorkTime, 100);

function londonTime(){
	var d = new Date();
	var hoursLondon = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	if(secs < 10) {
		secs = "0" + secs;
	}

	if(mins < 10) {
		mins = "0" + mins;
	}

	if(hoursLondon < 10) {
		hoursLondon = "0" + hoursLondon;
	}

	hoursLondon = hoursLondon - 1;

	if (hoursLondon >= 0 && hoursLondon <= 5) {
   		document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(30, 60, 114, 0.80)' + ', ' + 'rgba(42, 82, 152, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";      
   	}

	else if (hoursLondon >= 6 && hoursLondon <= 11){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
	}

	else if (hoursLondon >= 12 && hoursLondon <= 17){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.80)' + ', ' + 'rgba(0, 236, 188, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
     
	}

	else if (hoursLondon >= 18 && hoursLondon <= 23){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(98, 29, 209, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
	}

//
	document.getElementById("mainTimeLondon").innerHTML = hoursLondon+":"+mins+":"+secs;
}
setInterval(londonTime, 100);

function tokyoTime(){
	var d = new Date();
	var hoursTokyo = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	if(secs < 10) {
		secs = "0" + secs;
	}

	if(mins < 10) {
		mins = "0" + mins;
	}

	hoursTokyo = hoursTokyo + 8 ;

	if(hoursTokyo<24){
		hoursTokyo = hoursTokyo;

	}
	else if(hoursTokyo=>24){
		hoursTokyo = hoursTokyo - 24;
	}

	if(hoursTokyo < 10) {
		hoursTokyo = "0" + hoursTokyo;
	}

	if (hoursTokyo >= 0 && hoursTokyo <= 5) {
   		document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(30, 60, 114, 0.80)' + ', ' + 'rgba(42, 82, 152, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";      
   	}

	else if (hoursTokyo >= 6 && hoursTokyo <= 11){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
	}

	else if (hoursTokyo >= 12 && hoursTokyo <= 17){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.80)' + ', ' + 'rgba(0, 236, 188, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
     
	}

	else if (hoursTokyo >= 18 && hoursTokyo <= 23){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(98, 29, 209, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
	}

	document.getElementById("mainTimeTokyo").innerHTML = hoursTokyo+":"+mins+":"+secs;
	
}
setInterval(tokyoTime, 100);

//Date



function amsterdamDate(){
	var dd = new Date();
	var day = dd.getDate();
	var month = dd.getMonth();
	var year = dd.getFullYear();

	month = month + 1;
	year = year + 14;

	document.getElementById("mainDateAmsterdam",).innerHTML = day+" \267 "+month+" \267 "+year;

	document.getElementById("mainDateAmsterdam").style.color = "#f7c9ee";
}
setInterval(amsterdamDate, 100);

function newYorkDate(){
	var dd = new Date();
	var day = dd.getDate();
	var month = dd.getMonth();
	var year = dd.getFullYear();

	month = month + 1;
	year = year + 14;

	document.getElementById("mainDateNewYork",).innerHTML = day+" \267 "+month+" \267 "+year;

	document.getElementById("mainDateNewYork").style.color = "#b8d2fe";
}
setInterval(newYorkDate, 100);

function londonDate(){
	var dd = new Date();
	var day = dd.getDate();
	var month = dd.getMonth();
	var year = dd.getFullYear();

	month = month + 1;
	year = year + 14;

	document.getElementById("mainDateLondon",).innerHTML = day+" \267 "+month+" \267 "+year;

	document.getElementById("mainDateLondon").style.color = "#b8d2fe";
}
setInterval(londonDate, 100);

function tokyoDate(){
	var dd = new Date();
	var day = dd.getDate();
	var month = dd.getMonth();
	var year = dd.getFullYear();

	if(hours=>24){
		day = day + 1;
	}

	month = month + 1;
	year = year + 14;

	document.getElementById("mainDateTokyo",).innerHTML = day+" \267 "+month+" \267 "+year;

	document.getElementById("mainDateTokyo").style.color = "#b8d2fe";
}
setInterval(tokyoDate, 100);
