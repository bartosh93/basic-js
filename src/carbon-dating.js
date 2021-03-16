const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let result;
module.exports = function dateSample(sampleActivity) {
  if(+sampleActivity > 0 &&
     sampleActivity != undefined &&
     (typeof(+sampleActivity) == "number") &&
    (typeof(sampleActivity) == "string")) {
    result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / 5730))
    return result > 0 ? result : false
  } else {
    return false
  }
};
