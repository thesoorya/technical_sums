function validIP(ip) {
    let words = ip.split(".");
    if (words.length !== 4) return false;
    for (let i = 0; i < words.length; i++) {
        let num = parseInt(words[i]);
        if (isNaN(num)) return false;
        if (num < 0 || num > 255) return false;
    }
    return true;
}
const ip = "18.30.1.0";
let output = validIP(ip);
if (output) {
    console.log("Valid IP");
} else {
    console.log("Invalid IP");
}