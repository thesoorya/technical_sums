function reverseNumber(number) {
    let reverse = 0
    while (number > 0) {
        let lastDigit = number % 10 
        reverse = reverse * 10 + lastDigit
        number = Math.floor(number / 10)
    }
    return reverse
}

const number = 123
console.log(`reversed num ${reverseNumber(number)}`);

/*
    step 1:
        123 > 0
        last = 123 % 10 => 3
        rev = 0 * 10 + last(3) = 3
        n = 123 / 10 => 12, checking for next loop
    step: 2
        now, n= 12
        last = 12 % 10 => 2
        rev = 3 * 10 + 3 => 32
        n = 12 / 10 => 1, goes to next loop bcoz 1 > 0
    step 2:
        now, n= 1
        last = 1 % 10 => 1
        rev = 32 * 10 + 1 => 321
        n = 1 / 10 => 0.1 => 0 statement false
    
    ans = 321
*/