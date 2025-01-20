const palindromes = function (str) {
    let letters = str.toLowerCase().match(/[a-zA-Z\d]/g);
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] != letters[letters.length - (i + 1)]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
