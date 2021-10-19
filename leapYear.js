// const year = 3565;
// const leapYear = year / 4;
// const reminder = leapYear % 4;
// if(reminder == 0){
//     console.log('leapYear');
// }else{
//     console.log('no leapYear');
// }

function leapYear(year){
    const leapYear = year / 4;
    const reminder = leapYear % 4;
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return 'leapYear';
    }else{
       return 'no LeapYear';
    } 
}
const year = 1999;
const output = leapYear(year);
console.log(output);



// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);