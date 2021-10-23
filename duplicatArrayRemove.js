var number = [12,45,65,98,74,12,23,64,12,45,65,12,12,12];

var uniqueName = [];

for (var i = 0; i < number.length; i++){
    var element = number[i];
    var index = uniqueName.indexOf(element)
    if(index == -1){
        uniqueName.push(element);
    }
}console.log(uniqueName);