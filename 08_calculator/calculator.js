const add = function(x,y) {
	return (x + y);
};

const subtract = function(x,y) {
	return (x - y)
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => sum += element); 
  return sum;
};
  const multiply = function(multiplicationArray) {
    let total = 1;
     multiplicationArray.forEach(opNumber => total *= parseInt(opNumber));
     return total;
};

const power = function(x,y) {
	return (x**y);
};

const factorial = function(factorialNumber) {
  result = 1;
	for (let i = factorialNumber; i > 1; i--) {
    result *= i;
  }
  return result;
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
