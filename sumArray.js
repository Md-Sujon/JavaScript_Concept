var number = [12,45,65,98,74,23,64];
   var sum = 0;
for (var i = 0; i < number.length; i++) {
     var v = number[i];
     sum += v;
     
}console.log(sum);


// Function use Array Sum
var number = [12,45,65,98,74,23,64];
function sumArray(number){
    var sum = 0;
 for (var i = 0; i < number.length; i++) {
      var v = number[i];
      sum += v;
      
 }console.log(sum); 
}

sumArray(number)

// Function use Array Sum and return

function sumArray(number){
    var sum = 0;
 for (var i = 0; i < number.length; i++) {
      var v = number[i];
      sum += v;
     
 }
 return sum;
} 
var number = [12,45,65,98,74,23,64];
var output = sumArray(number)
var output1 = sumArray([45,78,45])
console.log(output1);
