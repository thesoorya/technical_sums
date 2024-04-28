function missingWord(missing) {
    let n = missing.length;
    let result = "";
    for (let i = 0; i < n; i++) {
        if (missing[i] === " ") {
            result += "-";
        } else {
            result += missing[i];
        }
    }
    return result;
}
// i-am
const missing = "i am";
console.log(missingWord(missing));