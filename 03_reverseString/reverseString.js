const reverseString = function(str) {
    let reverseString = "";
    for(let i = 0; i < str.length; i++) {
        reverseString += str[str.length - (i+1)]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
