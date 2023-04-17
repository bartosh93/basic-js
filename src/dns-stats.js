const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let temp = '';
  const arr = domains.map((el) => el.split('.').reverse());
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp += `.${arr[i][j]}`;
      if (typeof obj[`${temp}`] === 'undefined') {
        obj[`${temp}`] = 1;
      } else {
        obj[`${temp}`] += 1;
      }
    }
    temp = '';
  }

  return obj;
}

module.exports = {
  getDNSStats
};
