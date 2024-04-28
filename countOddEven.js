function countOddEven(arr) {

    let odd = 0
    let even = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) even++
        else if (arr[i] % 2 == 0) even++
        else odd++
    }
    console.log(`odd: ${odd}`);
    console.log(`even: ${even}`);
}

const array = [12, 2, 3, 4, 5, 67, 8, 9, 0, 4]
countOddEven(array)