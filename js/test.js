const sentence = 'i am opu.i am opu.i am opu';
const matches = sentence.match(/opus/gi);
const count = matches ? matches.length : 0;
console.log(count);

// 2nd part

let position = sentence.search(/opu/i);
position = position >= 0 ? position : 'not found';
console.log(position);
