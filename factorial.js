// 5! = 1*2*3*4*5;
// 4! = 1*2*3*4;
// 3! = 1*2*3*;
// 2! = 1*2;
// 1! = 1;
function factorial(num){
    var factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial = factorial*i;
    console.log(i, factorial);
} 
return factorial;
}

let output = factorial(50);
console.log(output);

//  var factorial = 1;
// for (var i = 1; i <= 10; i++) {
//     factorial = factorial*i;
//     console.log(factorial, i);
// }
console.log('************************************************');

function factorial1(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
       factorial *= i; 
       console.log(i, factorial);
    }return factorial;
} 
let output1 =  factorial1(171);
console.log(output1);