function armstrongNumber(num) {
    let n = num.toString().split('')
    let len = n.length
    let res = 0

    for (let i = 0; i < len; i++) {
        res += Math.pow(n[i], len)
    }

    if (res === num) {
        return res
    }
    else {
        return false
    }

}

const number = 370
console.log(armstrongNumber(number));