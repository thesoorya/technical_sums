function filterNegative(arr) {
    let positive = []
    let negative = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) positive.push(arr[i])
        else if (arr[i] > 0) positive.push(arr[i])
        else negative.push(arr[i])
    }

    console.log(`positive ${positive}`);
    console.log(`negative ${negative}`);

}

const array = [-1, 0, 2, 4, 56, -2, -6, -5]
filterNegative(array)