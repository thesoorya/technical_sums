function factorial(num) {
    let fact = 1

    for (i = num; i >= 1; i--) {
        fact = fact * i
    }

    return fact
}

const number = 10
console.log(factorial(number));