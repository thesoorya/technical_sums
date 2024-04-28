function countDigits(input) {
    let count = 0
    while(input > 0){
        input = Math.floor(input / 10)
        count++
    }
    return count
}

const input = 1234567890
console.log(countDigits(input));