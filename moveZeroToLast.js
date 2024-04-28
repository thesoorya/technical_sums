function moveZeroToLast(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] === 0) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const arr = [66, 0, 44, 0, 54]
console.log(arr);
console.log(moveZeroToLast(arr));
// without changing the number order