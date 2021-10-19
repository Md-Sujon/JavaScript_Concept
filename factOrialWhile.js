// let i = 1;
// let fact = 1;
// while ( i <= 5){
//     fact = fact *i;
//     console.log(i,fact);
//      i++;
// }

function factorial(n){
    let i = 1;
    let fact = 1;
    while (i <= n){
        fact = fact *i;
         i++;
    }return fact;
} 

let output =  factorial(10); 
console.log(output);