// window.onload      = responsiveAnimation()  ;

window.onscroll = function() {
saveNowQuote();
saveNowSchets1();
saveNowSchets2();
saveNowSchets3();
saveNowEindresultaat();
saveNowExpenses();
};

function saveNowQuote(){
	if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
		document.getElementById('doelgroepAnimation').style.opacity = "1";
		document.getElementById('doelgroepBeschrijving').style.opacity = "1";
        document.getElementById('saveNowQuote1').style.opacity = "1";
		document.getElementById('saveNowQuote1').style.transform = "translateY(0%)";
		document.getElementById('saveNowQuote2').style.opacity = "1";
		document.getElementById('saveNowQuote2').style.transform = "translateY(0%)";
		document.getElementById('finance-persona').style.width = "100%";
		document.getElementById('persona-beschrijving').style.opacity = "1";
    } 
}

function saveNowSchets1(){
	if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
		document.getElementById('full-image-save-now-1').style.opacity = "1";
		document.getElementById('full-image-save-now-1').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets2(){
	if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
		document.getElementById('full-image-save-now-2').style.opacity = "1";
		document.getElementById('full-image-save-now-2').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets3(){
	if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
		document.getElementById('full-image-save-now-3').style.opacity = "1";
		document.getElementById('full-image-save-now-3').style.transform = "translateY(0%)";
    } 
}

function saveNowEindresultaat(){
	if (document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500) {
		document.getElementById('saveNowEindresultaat').style.opacity = "1";
		document.getElementById('saveNowEindresultaat').style.backgroundSize = "100%";
    } 
}

function saveNowExpenses(){
	if (document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500) {
		document.getElementById('saveNowExpenses').style.opacity = "1";
		document.getElementById('saveNowExpenses').style.transform = "translateX(0%)";
		document.getElementById('expenses-tekst').style.opacity = "1";
    } 
}

