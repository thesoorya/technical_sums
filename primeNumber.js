function primeNumber(num) {
    if (num <= 1) return 'not prime';
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return 'not prime';
        }
    }
    return 'prime';
}

const number = 31
console.log(primeNumber(number));