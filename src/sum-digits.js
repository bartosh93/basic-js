const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  const newN = String(n);
  let number = 0;
  if (newN.length === 1) return +newN;
  for (let i = 0; i < newN.length; i++) {
    number += +newN[i];
  }
  return getSumOfDigits(number);
}

module.exports = {
  getSumOfDigits
};
