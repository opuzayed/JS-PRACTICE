const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.filter((currentValue, currentIndex, array) => {
return currentValue > 4;
});
console.log(result);