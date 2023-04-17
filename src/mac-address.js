const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let str; let
    result;
  const regexp = 'ABCDEF0123456789';
  str = n.split('-');
  if (str.length === 6) {
    str = str.join('');
    for (let i = 0; i < str.length; i++) {
      result = regexp.includes(str[i]);
      if (result === false) break;
    }
    return result;
  }
  return false;
}
module.exports = {
  isMAC48Address
};
