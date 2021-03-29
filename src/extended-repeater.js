const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '', subStr = '';
  let separator, additionSeparator, repeatTimes, additionRepeatTimes;
  if (options.separator == undefined) {
    separator = '+';
  } else {
    separator = String(options.separator);
  }
  if (options.additionSeparator == undefined) {
    additionSeparator = '|';
  } else {
    additionSeparator = String(options.additionSeparator);
  }

  if (options.repeatTimes == undefined) {
    repeatTimes = 0 ;
  } else {
    repeatTimes = options.repeatTimes;
  }

  if (options.additionRepeatTimes == undefined) {
    additionRepeatTimes = 0 ;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.addition!==undefined) {
    let addition = options.addition;
    subStr = String(str) + addition;
    if (additionRepeatTimes>1){
      for (let i = 2;i<=additionRepeatTimes;i++ ) {
        subStr +=  additionSeparator + addition ;
      }
    }   
  } else {
    subStr = str;
  }
    newStr = subStr;
    if (repeatTimes>1) {
      for (let i = 2;i<=repeatTimes;i++ ) {
        newStr += separator + subStr;
      }
    }
    return newStr
};
  