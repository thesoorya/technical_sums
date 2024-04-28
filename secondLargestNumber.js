const arr = [66, 4, 57, 2, 122]
const sorted = arr.sort((a,b) => {
    return a - b
})
console.log(sorted[arr.length - 1]);