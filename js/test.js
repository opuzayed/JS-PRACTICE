function fizzBuzz(number){
    for(let i = 1; i <= number; i++){
        if(i % 15 === 0){
            console.log(`${i} is FizzBuzz`);
        }
        else if(i % 3 === 0){
            console.log(`${i} is Fizz`);
        }
        else if(i % 5 === 0){
            console.log(`${i} is Buzz`);
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz(100);