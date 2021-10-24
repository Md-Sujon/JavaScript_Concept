function reverseString(string){
    var reverse = "";
    for(var i = 0; i < string.length; i++){
        var chr = string[i];
        reverse = chr + reverse;
    }return reverse;
}
var string = "Hello"

var output =  reverseString(string)
console.log(output);

