const add = function(...arr) {
  return arr.reduce((total, current) => total + current);
};

const subtract = function(...arr) {
  return arr.reduce((total, current) => total - current);
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let total = 1;
  while(num > 1) {
    total *= num;
    num -= 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
