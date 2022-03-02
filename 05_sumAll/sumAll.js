const sumAll = function (firstNum, secondNum) {
  let total = 0;
  if (firstNum < 0 || secondNum < 0) {
    return "ERROR";
  }
  if (typeof firstNum !== "number" || typeof secondNum !== "number") {
    return "ERROR";
  }
  if (firstNum > secondNum) {
    [firstNum, secondNum] = [secondNum, firstNum];
  }

  for (let i = firstNum; i <= secondNum; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
