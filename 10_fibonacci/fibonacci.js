const fibonacci = function(num) {
    if(Number(num) < 0) {
        return "OOPS";
    } else if (Number(num) == 0) {
        return 0;
    }
    let previousvalue = 0;
    let value = 1;
    for(let i = 1; i < Number(num); i++) {
        let newvalue = value + previousvalue
        previousvalue = value
        value = newvalue
        //console.log("newvalue", value, "newprevious", previousvalue);
    }
    return value
};

//console.log(fibonacci(0))

// Do not edit below this line
module.exports = fibonacci;
