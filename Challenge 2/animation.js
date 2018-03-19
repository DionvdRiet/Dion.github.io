var mainTimeAmsterdam = document.getElementById('mainTimeAmsterdam');
var mainTimeNewYork = document.getElementById('mainTimeNewYork');
var mainTimeLondon = document.getElementById('mainTimeLondon');
var mainTimeTokyo = document.getElementById('mainTimeTokyo');
var zon = document.getElementById('zon');
var maan = document.getElementById('maan');

var tl1 = new TimelineMax();
tl1.to(mainTimeAmsterdam, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(mainTimeNewYork, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(mainTimeLondon, 1, {top: 5});

var tl1 = new TimelineMax();
tl1.to(mainTimeTokyo, 1, {top: 5});

var tl1 = new TimelineMax({repeat:-1});
tl1.to(zon, 2, {x:0, y:-300})
	.to(zon, 2, {x:0, y:0});

var tl1 = new TimelineMax({repeat:-1});
tl1.to(maan, 2, {x:0, y:-300})
	.to(maan, 2, {x:0, y:0});




