const sentence = 'i am opu.i am opu.i am opu';
const matches = sentence.match(/opus/gi);
const count = matches ? matches.length : 0;
console.log(count);
