const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial;
};

const multiply = function(array) {
  const initialValue = 1;
  const productWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue
  );
  return productWithInitial;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
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
