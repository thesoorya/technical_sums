function palindrome(input) {
    let start = 0
    let end = input.length - 1

    while (start < end) {
        if (input[start] === input[end]) {
            start++
            end--
        }
        else {
            return false
        }
    }
    return true

}

const input = "level"
if (palindrome(input) === true) {
    console.log('Palindrome');
}
else {
    console.log('Not Palindrome');
}