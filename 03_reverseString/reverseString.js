const reverseString = function (str) {
  let splitStr = str.split("").reverse();
  let newStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    newStr += splitStr[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
