const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {
  let mult = 1;
  for(let i = 0; i<num.length; i++){
    mult *= num[i];
  }
  return mult;
};

const power = function(num, num2) {
	let exponent = Math.pow(num, num2)
  return exponent;
};

const factorial = function(fac) {
	let facresult = 1;
  for(let i = 1; i<=fac; i++){
    facresult *= i;
  }
  return facresult;
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
