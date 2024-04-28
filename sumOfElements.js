function sumOfElements(num) {
    let sum = 0

    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }

    return sum
}

const number = [1, 2, 3, 4, 5, 100, 1000]
console.log(sumOfElements(number));