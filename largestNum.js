var a = [4,5,10,56,6,7,800,];
var largest = [0];
for (var i = 0; i <a.length; i++) {
   var element = a[i];
    if(element> largest){
        largest = element;
    }
}console.log(largest);