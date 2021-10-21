var number =2.599;

var result = Math.ceil(number);
var result1=Math.floor(number);
var result2=Math.round(number);

var result3 = Math.random(number)*10;
var output =Math.round(result3);
console.log(output);
// use loop

for( var i = 1; i < 10; i++){
    var result3 = Math.random(number)*10;
    var output =Math.round(result3);
    console.log(output);
}