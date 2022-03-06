const fibonacci = function (count) {
  let firstNum = 0;
  let secondNum = 1;
  if (count < 0) {
    return "OOPS";
  }
  for (let i = 1; i < count; i++) {
    let temp = secondNum;
    secondNum = firstNum + secondNum;
    firstNum = temp;
  }
  return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
