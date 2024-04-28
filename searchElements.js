function searchElements(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i
        }
    }
    return -1
}

const number = 2
const array = [1, 2, 3, 4, 5]
console.log(searchElements(number, array));