// Set the date we're counting down to
var theCrew2 = new Date("Jul 3, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = theCrew2 - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("tc2").innerHTML ="Nog " + days + " dagen " + "en " + hours + " uur ";

    // if(days == 1){
    //     document.getElementById("tc2").innerHTML ="Nog " + days + " dag " + "en " + hours + " uur "
    // }
    // else if(days < 1){
    //     document.getElementById("tc2").innerHTML ="Nog " + hours + " uur " + " en " + minutes + " minuten"
    // }
    // ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tc2").innerHTML = "EXPIRED";
    }
}, 1000);

var theCrew2page = new Date("Jul 3, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = theCrew2page - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    else if (hours < 10){
        hours = "0" + hours;
    }
    
    // Output the result in an element with id="demo"
    document.getElementById("hours").innerHTML =hours;
    document.getElementById("minutes").innerHTML =minutes;
    document.getElementById("seconds").innerHTML =seconds;

    // if(days == 1){
    //     document.getElementById("hours").innerHTML ="Nog " + days + " dag " + "en " + hours + " uur "
    // }
    // else if(days < 1){
    //     document.getElementById("hours").innerHTML ="Nog " + hours + " uur " + " en " + minutes + " minuten"
    // }
    // ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("hours").innerHTML = "EXPIRED";
    }
}, 1000);

// Set the date we're counting down to
var strangebrigade = new Date("Aug 28, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = strangebrigade - now;
    
    // Time calculations for days, hours, minutes and seconds
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24) / (7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("strange-brigade").innerHTML ="Nog " + days + " dagen " + "en " + hours + " uren "

    if(days == 1){
        document.getElementById("strange-brigade").innerHTML ="Nog " + days + " dag " + "en " + hours + " uren "
    }
    else if(hours == 1){
        document.getElementById("strange-brigade").innerHTML ="Nog " + days + " dag " + "en " + hours + " uur "
    }

    else if(days > 7){
        days = days / weeks;
        document.getElementById("strange-brigade").innerHTML ="Nog " + weeks + " weken " + days + " dag " + "en " + hours + " uur ";
    }
    ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("strange-brigade").innerHTML = "EXPIRED";
    }
}, 1000);

// Set the date we're counting down to
var ac = new Date("Oct 5, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = ac - now;
    
    // Time calculations for days, hours, minutes and seconds
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24) / (7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("ac").innerHTML ="Nog " + days + " dagen " + "en " + hours + " uren "

    if(days == 1){
        document.getElementById("ac").innerHTML ="Nog " + days + " dag " + "en " + hours + " uren "
    }
    else if(hours == 1){
        document.getElementById("ac").innerHTML ="Nog " + days + " dag " + "en " + hours + " uur "
    }

    else if(days > 7){
        days = days / weeks;
        document.getElementById("ac").innerHTML ="Nog " + weeks + " weken " + days + " dag " + "en " + hours + " uur ";
    }
    ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ac").innerHTML = "EXPIRED";
    }
}, 1000);