

// const randomNumber = Math.round(Math.random() *10);

// console.log(
//     randomNumber
// );

function generateRandom(max){
    const randomNumber = Math.round(Math.random() * max);
    return randomNumber;
}

console.log(generateRandom(200));