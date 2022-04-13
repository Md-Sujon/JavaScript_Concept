const number = [7,8,9,4,8,5,4,5,52,5,4];


let sum = 0;
for(let i = 0; i<number.length; i++){
    sum += number[i]
    console.log(sum);
}





const num = [5,7,12,24];
  let sum = 0;
for(let i = 0; i<num.length; i++){
    
    sum =sum+num[i];
    console.log(sum);
}





num.forEach((value, index, array) => {
    if(value %2==1){
        console.log(value, index,array);
    } 
});


let sum = 0;
number.forEach(function (value, index) {
if (index <= 6) {
    sum = sum + value;  
    console.log(sum);
}


      
})