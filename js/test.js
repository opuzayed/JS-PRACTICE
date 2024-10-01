// find unique number from array
const numbers = ['2', '4', '5', '4', '5', '6', '7','6'];
const duplicateNumbers = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
});
console.log(duplicateNumbers);



