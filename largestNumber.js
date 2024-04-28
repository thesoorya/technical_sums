function largestNumber(arr) {
    max = arr[0]
    n = arr.length

    for (let i = 1; i < n; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const arr = [66, 4, 57, 2, 122]
console.log(largestNumber(arr));