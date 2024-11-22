const removeFromArray = function(array) {
    let newArray = array
    for(let i = 1; i < arguments.length; i++) {
        while(newArray.includes(arguments[i])) {
            newArray.splice(newArray.indexOf(arguments[i]), 1);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
