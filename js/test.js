const numbers = [2, 4, 6, [100, 200, 300], 8];
const [, , , [, a, b] , ] = numbers;
console.log(a, b);