const numbers = [12, 14, 16];
const sum = numbers.reduce((prev, currentValue, currentIndex, array) => {
        return prev + currentValue;
}, 0);
console.log(sum);