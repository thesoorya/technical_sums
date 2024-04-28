function divisorOfNumber(num) {

    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
    console.log(num);
}

const number = 42
divisorOfNumber(number)