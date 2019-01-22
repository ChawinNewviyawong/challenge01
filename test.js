var a=0.25578915;
var b=4;
var c = a/b;
var d =Math.floor(a/b);
var e = c.toFixed(4);
console.log(e);
var g = Number(e);
console.log(g);
console.log(g.toExponential().replace(/e\+?/, ' x 10^'));

