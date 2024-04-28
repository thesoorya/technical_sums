function smallestNumber(num) {
    let small = num[0]

    
    for (let i = 1; i < num.length; i++) {
        if(num[i] == 0) return 0
        if(num[i] < small){
            small = num[i]
        }
    }

    return small
}

const number = [1, 2, 3, 4, 0]
console.log(smallestNumber(number));