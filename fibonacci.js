// fibo[2]=fibo[2-1]+fibo[2-2];
// fibo[7]=fibo[7-1]+fibo[7-2];
// fibo[n]=fibo[n-1]+fibo[n-2];
// fibo [i]= fibo[i-1]+fibo[i-2];

// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987


// let fibo = [0,1];
// for (let i = 2; i<=15; i++){
//     fibo[i] = fibo[i-1]+ fibo[i-2];
//     console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }console.log(fibo);
let fibo = [0,1];
function fibonacci(n){
    for (let i = 2; i<=n; i++){
        fibo[i] = fibo[i-1]+ fibo[i-2];
        
    }return fibo;
}

let output =  fibonacci(5)
console.log(output);

let output1 =  fibonacci(10)
console.log(output1);

let output2 =  fibonacci(20)
console.log(output2);

let output3 =  fibonacci(30)
console.log(output3);

let output4 =  fibonacci(40)
console.log(output4);