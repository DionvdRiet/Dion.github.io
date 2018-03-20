var mainTimeAmsterdam = document.getElementById('mainTimeAmsterdam');
var mainTimeNewYork = document.getElementById('mainTimeNewYork');
var mainTimeLondon = document.getElementById('mainTimeLondon');
var mainTimeTokyo = document.getElementById('mainTimeTokyo');
var zon = document.getElementById('zon');
var zon2 = document.getElementById('zon2');
var zon3 = document.getElementById('zon3');
var zon4 = document.getElementById('zon4');
var maan = document.getElementById('maan');
var timeZone = document.getElementById("timezone");

var tl1 = new TimelineMax();
tl1.to(mainTimeAmsterdam, 1, {top: 5,});

var tl1 = new TimelineMax();
tl1.to(mainTimeNewYork, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(mainTimeLondon, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(mainTimeTokyo, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(timeZone, 1, {right: 5});

var tl1 = new TimelineMax({repeat:-1});
tl1.from(zon, 2, {x:0, y:-105, ease: Sine.easeInOut})
	.to(zon, 5, {x:0, y:-100, ease: Sine.easeInOut});

var tl1 = new TimelineMax({repeat:-1});
tl1.from(zon2, 2, {x:0, y:-105, ease: Sine.easeInOut})
	.to(zon2, 5, {x:0, y:-100, ease: Sine.easeInOut});

var tl1 = new TimelineMax({repeat:-1});
tl1.from(zon3, 2, {x:0, y:-105, ease: Sine.easeInOut})
	.to(zon3, 5, {x:0, y:-100, ease: Sine.easeInOut});

var tl1 = new TimelineMax({repeat:-1});
tl1.from(zon4, 2, {x:0, y:-105, ease: Sine.easeInOut})
	.to(zon4, 5, {x:0, y:-100, ease: Sine.easeInOut});










