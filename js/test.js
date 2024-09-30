const fruits = ['apple', 'banana', 'pineapple', 'watermelon'];
let fLength = fruits.length;
 let text = '<ul>';
 for(i=0; i<fLength; i++){
    text += '<li>' + fruits[i] + '</li>';
 }
 text += '</ul>';
document.getElementById("demo").innerHTML = text;
