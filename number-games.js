function checkFizzBuzz(n){
    if (n%3===0 || n%5===0){
        if(n%3===0 && n%5===0){
            return 'FizzBuzz'
        }
        return n%3===0 ? 'Fizz' : 'Buzz'
    }
    return n;
}