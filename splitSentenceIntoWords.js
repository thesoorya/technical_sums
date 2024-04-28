function splitSentenceIntoWords(str) {
    let words = []
    let currentWords = " "

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentWords !== " ") {
                words.push(currentWords)
                currentWords = " "
            }
        }
        else {
            currentWords += str[i]
        }
    }

    if (currentWords !== " ") words.push(currentWords)
    return words
}

const string = "heyy    i am soorya    "
console.log(splitSentenceIntoWords(string));