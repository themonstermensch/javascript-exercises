const sumAll = function(first, second) {
    if(!Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR"
    } else if (Math.sign(first) == -1 || Math.sign(second) == -1) {
        return "ERROR"
    }
    let min = Math.min(first, second);
    let max = Math.max(first, second);
    let sum = 0;
    for(let i = min; i < (max+1); i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
