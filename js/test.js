// const fruits = ['apple', 'banana', 'pineapple', 'watermelon'];
// let fLength = fruits.length;
//  let text = '<ul>';
//  for(i=0; i<fLength; i++){
//     text += '<li>' + fruits[i] + '</li>';
//  }
//  text += '</ul>';
// document.getElementById("demo").innerHTML = text;

const fruits = ['apple', 'banana', 'melon', 'pen', 'book'];
let text= '<ul>';
function myFunction (value)
{
    text += '<li>' + value + '</li>'
}
text += '</ul>';
fruits.forEach(myFunction);
document.getElementById('demo').innerHTML = text;