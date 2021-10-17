var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var AvgMark = 0;

for (var i = 0; i < students.length; i++) {
    AvgMark += students[i][1]
    var Avg = ((AvgMark)/students.length)
}
console.log('Average Mark :', (AvgMark)/students.length);
if(Avg < 60){
console.log('Grade D');
}else if(Avg < 70){
    console.log('Grade C');
}else if(Avg < 80){
    console.log('Grade B');
}else if(Avg < 90){
    console.log('Grade A');
}else if(Avg < 100){
    console.log('Grade A+');
}