const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newStr;
  let arr2 = [];
  const number = String(n);
  const arr = number.split('');
  for (let i = 0; i < arr.length; i++) {
    newStr = arr.slice(0, i).join('') + arr.slice(i + 1, arr.length).join('');
    arr2.push(newStr);
  }
  arr2 = arr2.map((el) => +el);
  arr2 = arr2.sort((a, b) => a - b);

  return arr2[arr2.length - 1];
}

module.exports = {
  deleteDigit
};
