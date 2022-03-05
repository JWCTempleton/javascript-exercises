const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (arr) {
  let sum = 1;
  arr.forEach((element) => {
    sum *= element;
  });
  return sum;
};

const power = function (a, b) {
  let total = 0;
  for (let i = 0; i <= b; i++) {
    total += a * a;
  }
  return total;
};

const factorial = function (num) {
  let total = 1;
  if (num === 0 || num === 1) {
    return total;
  } else {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
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
  factorial,
};
