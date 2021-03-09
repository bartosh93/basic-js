const CustomError = require("../extensions/custom-error");
[ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]
module.exports = function countCats(arr) {
  let counter = 0;
  for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr[i].length; j++) {
      arr[i][j] === '^^'? counter+=1 : counter = counter
    }
  }
  return counter
};
