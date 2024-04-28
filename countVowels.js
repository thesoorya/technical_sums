function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0
    let consonents = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) vowelsCount++
        else consonents++
    }

    return {
        vowelsCount : vowelsCount,
        consonents : consonents
    }
}

const string = 'soorya5'
console.log(countVowels(string));