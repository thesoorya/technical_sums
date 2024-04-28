function reverseArrayBruteForce(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

function reverseArray(arr) {
    let start = 0
    let end = arr.length - 1
    for (let i = 0; i <= end; i++) {
        let temp = arr[i]
        arr[i] = arr[end]
        arr[end] = temp

        start++
        end--
    }
    return arr
}

const array = [12, 3, 567, 6, 343, 324, 354, 65, 76]
console.log(reverseArrayBruteForce(array));
console.log(reverseArray(array));