var speech = "i am a good. i dont snore at night. ";
var count = 0;

for (var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}console.log(count); 