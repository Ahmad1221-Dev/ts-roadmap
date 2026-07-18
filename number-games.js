function printFizzBuzz(limit){
    let i = 0;
    while(i<limit){
        i++;
        if (i%3===0 || i%5===0){
            if(i%3===0 && i%5===0){
                console.log('FizzBuzz'); continue;
            }
            console.log(i%3===0 ? 'Fizz' : 'Buzz'); continue;
        }
        console.log(i)
    }
}
//printFizzBuzz(100)

function findPrimes(limit){
    let res = []
    for (let i = 2; i<=limit; i++){
        if (i === 2 || i === 3){res.push(i)}
        if (i%2 === 0 || i%3 === 0){continue}
        else{
            let check = 5;
            let isPrime = true;
            while(check**2 <= i){
                if (i%check === 0 || i%(check+2) === 0){isPrime = false; break}
                check += 6;
            }
            if(isPrime){res.push(i)}
        }
    }
    return res;
}
//console.log(findPrimes(70));

function numberGuessing(secretNumber, guesses = []){
    // return guesses.map(n=>{
    //     if(n===secretNumber){return 'Correct!'};
    //     if((typeof n !== 'number' || n.isNaN()){return};
    //     return n > secretNumber ? 'Too High' : 'Too Low';
    // })
    let i = -1;
    while (i<guesses.length){
        i++;
        if(guesses[i]===secretNumber){console.log('Correct!'); break;}
        else if(typeof guesses[i] !== 'number' || guesses[i].isNaN()){continue}
        else{console.log(guesses[i] > secretNumber ? 'Too High' : 'Too Low');};
    }
}
//numberGuessing(42, [10, null, 80, 42, 50]);