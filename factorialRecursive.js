// 10! = 10*9*8*7*6*5*4*3*2*1;

// Use While loop

function factorialRe(num){
    let fact = 1;
    while(num >= 1){
        fact = fact*num;
         num--;
    } return fact;
}
let output = factorialRe(10);
console.log(output);

console.log('**************************************');


// Use For loop
function factorialRecursive(n){
    let fact = 1;
    for (let i = n; i >=1; i--) {
           fact *=i;
    }return fact;
}
 
let output1 = factorialRecursive(10)
console.log(output1);
/*
6! = 1*2*3*4*5*6;
7!  = 1*2*3*4*5*6*7;
7!  = (7-1)!*7;
n!  = (n-1)!*n;
*/

// Use condition

function factorialRecursive(n){
    if(n===0){
        return 1;
    }else{
        return n*factorialRecursive(n-1)
    }
}

let fact = factorialRecursive(10);
console.log(fact);