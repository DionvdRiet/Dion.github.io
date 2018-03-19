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

	if (hoursAmsterdam >= 0 && hoursAmsterdam <= 3) {
   		document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(4, 24, 35, 0.80)' + ', ' + 'rgba(18, 9, 40, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";  
        document.getElementById('mainDateAmsterdam').style.color = "white";    
   	}

   	else if (hoursAmsterdam >= 4 && hoursAmsterdam <= 5){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(137, 122, 115, 0.90)' + ', ' + 'rgba(99, 72, 92, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "black";
	}
	else if (hoursAmsterdam >= 6 && hoursAmsterdam <= 7 ){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(234, 110, 151, 0.90)' + ', ' + 'rgba(145, 113, 198, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('mainDateAmsterdam').style.color = "black";
	}

	else if (hoursAmsterdam >= 8 && hoursAmsterdam <= 9){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
	}

	else if (hoursAmsterdam >= 10 && hoursAmsterdam <= 11){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(150, 74, 216, 0.90)' + ', ' + 'rgba(102, 244, 215, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
     
	}

	else if (hoursAmsterdam >= 12 && hoursAmsterdam <= 13){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.90)' + ', ' + 'rgba(0, 236, 188, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "black";
     
	}

	else if (hoursAmsterdam >= 14 && hoursAmsterdam <= 15){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(0, 107, 196, 0.90)' + ', ' + 'rgba(10, 255, 234, 0.90)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "black";
     
	}

	else if (hoursAmsterdam >= 16 && hoursAmsterdam <= 17){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(109, 59, 226, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "white";
	}

	else if (hoursAmsterdam >= 18 && hoursAmsterdam <= 19){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(23, 110, 158, 0.80)' + ', ' + 'rgba(64, 35, 132, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "white";
	}

	else if (hoursAmsterdam >= 20 && hoursAmsterdam <= 21){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(17, 80, 114, 0.80)' + ', ' + 'rgba(42, 23, 89, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "white";
	}

	else if (hoursAmsterdam >= 22 && hoursAmsterdam <= 23){
    	document.getElementById('amsterdam').style.background = '-moz-linear-gradient('
        + 'rgba(11, 55, 79, 0.80)' + ', ' + 'rgba(29, 15, 63, 0.80)' + '), url(cities/amsterdam.jpg)';
        document.getElementById('amsterdam').style.backgroundSize = "100%";
        document.getElementById('mainDateAmsterdam').style.color = "white";
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

	if (hoursNewYork >= 0 && hoursNewYork <= 3) {
   		document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(4, 24, 35, 0.80)' + ', ' + 'rgba(18, 9, 40, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";  
        document.getElementById('mainDateNewYork').style.color = "white";    
   	}

   	else if (hoursNewYork >= 4 && hoursNewYork <= 5){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(137, 122, 115, 0.90)' + ', ' + 'rgba(99, 72, 92, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "black";
	}
	else if (hoursNewYork >= 6 && hoursNewYork <= 7 ){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(234, 110, 151, 0.90)' + ', ' + 'rgba(145, 113, 198, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('mainDateNewYork').style.color = "black";
	}

	else if (hoursNewYork >= 8 && hoursNewYork <= 9){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
	}

	else if (hoursNewYork >= 10 && hoursNewYork <= 11){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(150, 74, 216, 0.90)' + ', ' + 'rgba(102, 244, 215, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
     
	}

	else if (hoursNewYork >= 12 && hoursNewYork <= 13){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.90)' + ', ' + 'rgba(0, 236, 188, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "black";
     
	}

	else if (hoursNewYork >= 14 && hoursNewYork <= 15){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(0, 107, 196, 0.90)' + ', ' + 'rgba(10, 255, 234, 0.90)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "black";
     
	}

	else if (hoursNewYork >= 16 && hoursNewYork <= 17){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(109, 59, 226, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "white";
	}

	else if (hoursNewYork >= 18 && hoursNewYork <= 19){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(23, 110, 158, 0.80)' + ', ' + 'rgba(64, 35, 132, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "white";
	}

	else if (hoursNewYork >= 20 && hoursNewYork <= 21){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(17, 80, 114, 0.80)' + ', ' + 'rgba(42, 23, 89, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "white";
	}

	else if (hoursNewYork >= 22 && hoursNewYork <= 23){
    	document.getElementById('new-york').style.background = '-moz-linear-gradient('
        + 'rgba(11, 55, 79, 0.80)' + ', ' + 'rgba(29, 15, 63, 0.80)' + '), url(cities/new-york.jpg)';
        document.getElementById('new-york').style.backgroundSize = "100%";
        document.getElementById('mainDateNewYork').style.color = "white";
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

	if (hoursLondon >= 0 && hoursLondon <= 3) {
   		document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(4, 24, 35, 0.80)' + ', ' + 'rgba(18, 9, 40, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";  
        document.getElementById('mainDateLondon').style.color = "white";    
   	}

   	else if (hoursLondon >= 4 && hoursLondon <= 5){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(137, 122, 115, 0.90)' + ', ' + 'rgba(99, 72, 92, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "black";
	}
	else if (hoursLondon >= 6 && hoursLondon <= 7 ){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(234, 110, 151, 0.90)' + ', ' + 'rgba(145, 113, 198, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('mainDateLondon').style.color = "black";
	}

	else if (hoursLondon >= 8 && hoursLondon <= 9){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
	}

	else if (hoursLondon >= 10 && hoursLondon <= 11){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(150, 74, 216, 0.90)' + ', ' + 'rgba(102, 244, 215, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
     
	}

	else if (hoursLondon >= 12 && hoursLondon <= 13){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.90)' + ', ' + 'rgba(0, 236, 188, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "black";
     
	}

	else if (hoursLondon >= 14 && hoursLondon <= 15){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(0, 107, 196, 0.90)' + ', ' + 'rgba(10, 255, 234, 0.90)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "black";
     
	}

	else if (hoursLondon >= 16 && hoursLondon <= 17){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(109, 59, 226, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "white";
	}

	else if (hoursLondon >= 18 && hoursLondon <= 19){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(23, 110, 158, 0.80)' + ', ' + 'rgba(64, 35, 132, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "white";
	}

	else if (hoursLondon >= 20 && hoursLondon <= 21){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(17, 80, 114, 0.80)' + ', ' + 'rgba(42, 23, 89, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "white";
	}

	else if (hoursLondon >= 22 && hoursLondon <= 23){
    	document.getElementById('london').style.background = '-moz-linear-gradient('
        + 'rgba(11, 55, 79, 0.80)' + ', ' + 'rgba(29, 15, 63, 0.80)' + '), url(cities/london.jpg)';
        document.getElementById('london').style.backgroundSize = "100%";
        document.getElementById('mainDateLondon').style.color = "white";
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

	if (hoursTokyo >= 0 && hoursTokyo <= 3) {
   		document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(4, 24, 35, 0.80)' + ', ' + 'rgba(18, 9, 40, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";  
        document.getElementById('mainDateTokyo').style.color = "white";    
   	}

   	else if (hoursTokyo >= 4 && hoursTokyo <= 5){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(137, 122, 115, 0.90)' + ', ' + 'rgba(99, 72, 92, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "black";
	}
	else if (hoursTokyo >= 6 && hoursTokyo <= 7 ){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(234, 110, 151, 0.90)' + ', ' + 'rgba(145, 113, 198, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('mainDateTokyo').style.color = "black";
	}

	else if (hoursTokyo >= 8 && hoursTokyo <= 9){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(244, 59, 120, 0.90)' + ', ' + 'rgba(104, 43, 206, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
	}

	else if (hoursTokyo >= 10 && hoursTokyo <= 11){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(150, 74, 216, 0.90)' + ', ' + 'rgba(102, 244, 215, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
     
	}

	else if (hoursTokyo >= 12 && hoursTokyo <= 13){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(0, 122, 223, 0.90)' + ', ' + 'rgba(0, 236, 188, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "black";
     
	}

	else if (hoursTokyo >= 14 && hoursTokyo <= 15){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(0, 107, 196, 0.90)' + ', ' + 'rgba(10, 255, 234, 0.90)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "black";
     
	}

	else if (hoursTokyo >= 16 && hoursTokyo <= 17){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(39, 116, 249, 0.80)' + ', ' + 'rgba(109, 59, 226, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "white";
	}

	else if (hoursTokyo >= 18 && hoursTokyo <= 19){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(23, 110, 158, 0.80)' + ', ' + 'rgba(64, 35, 132, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "white";
	}

	else if (hoursTokyo >= 20 && hoursTokyo <= 21){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(17, 80, 114, 0.80)' + ', ' + 'rgba(42, 23, 89, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "white";
	}

	else if (hoursTokyo >= 22 && hoursTokyo <= 23){
    	document.getElementById('tokyo').style.background = '-moz-linear-gradient('
        + 'rgba(11, 55, 79, 0.80)' + ', ' + 'rgba(29, 15, 63, 0.80)' + '), url(cities/tokyo.jpg)';
        document.getElementById('tokyo').style.backgroundSize = "100%";
        document.getElementById('mainDateTokyo').style.color = "white";
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
}
setInterval(tokyoDate, 100);

var el = document.getElementById("zon4");
if(hoursTokyo >= 5 && hoursTokyo <= 22){

el.src = "maan.png";
}
else{
    el.src = "zon.png";
}