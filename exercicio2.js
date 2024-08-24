function fizzBuzz(n) {
    for (let c = 1; c <= n; c++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz");
        } else if (c % 3 === 0) {
            console.log("Fizz");
        } else if (c % 5 === 0) {
            console.log("Buzz");
        }
        else{
            console.log(c);
        }
    }
}
fizzBuzz(10);
