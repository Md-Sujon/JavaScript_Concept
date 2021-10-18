
// Big number
var number =[78,40,666,54,78,63556,475,7,57,9574,87472,96875,987454,7485475,415874,487854]


function largestNumber(number){
    var largest = number[0];
    for(var i=0; i<number.length; i++){
        var element = number[i];
        console.log(element);
       if(element > largest){
           largest = element;
       }
    }return largest;
}
var output = largestNumber(number)
console.log('output', output);
