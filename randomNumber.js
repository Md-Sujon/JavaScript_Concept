

// const randomNumber = Math.round(Math.random() *10);

// console.log(
//     randomNumber
// );

function generateRandom(max, min){
    const randomNumber = Math.floor(Math.random() * min + (max-min));
    return randomNumber;
}

console.log(generateRandom(5, 10));


