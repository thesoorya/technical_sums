function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
const arr = [66, 24, 44, 1, 54]
console.log(arr);
console.log(selectionSort(arr));