// take string, remove special characters
// make new variable set to string reversed
// loop through each index of string from beginning and compare to
// LAST index of reversed string
// if they are the same the whole way return true
// else return false

const palindromes = function (str) {
  let newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversedStr = newStr.toLowerCase().split("").reverse().join("");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== reversedStr[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
