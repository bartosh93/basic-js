const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  revers = false;
  constructor(style) {
    if (style === false) {
      this.revers = true;
    }
  }
  encrypt(str, keyword) {
    str = str.toUpperCase();
    keyword = keyword.toUpperCase();
    while (keyword.length<str.length) {
      keyword+=keyword;
    }

    let strArr = str.split('');
    let keywordArr = keyword.split('');
    let darkWord = [];
    keywordArr.length = strArr.length;
    strArr = strArr.map(x => x.codePointAt(0));
    keywordArr = keywordArr.map(x => x.codePointAt(0));

    for (let i = 0, j = 0; i<strArr.length; i++, j++) {
      if (strArr[i]<65||strArr[i]>90) {
          darkWord.push(strArr[i]);
          j = j-1;
      } else {
          darkWord.push(((strArr[i] + keywordArr[j])%26) +65);
      }
    }
    darkWord = darkWord.map(x => String.fromCodePoint(x));
    
    if (this.revers) darkWord = darkWord.reverse();
    return darkWord.join('');
  }    
  decrypt(str, keyword) {
    str = str.toUpperCase();
    keyword = keyword.toUpperCase();
    while (keyword.length<str.length) {
      keyword+=keyword;
    }

    let strArr = str.split('');
    let keywordArr = keyword.split('');
    let darkWord = [];
    keywordArr.length = strArr.length;
    strArr = strArr.map(x => x.codePointAt(0));
    keywordArr = keywordArr.map(x => x.codePointAt(0));

    for (let i = 0, j = 0; i<strArr.length; i++, j++) {
      if (strArr[i]<65||strArr[i]>90) {
          darkWord.push(strArr[i]);
          j = j-1;
      } else {
          darkWord.push(((strArr[i] - keywordArr[j] +26)%26) +65);
      }
    }
    darkWord = darkWord.map(x => String.fromCodePoint(x));
    
    if (this.revers) darkWord = darkWord.reverse();
    return darkWord.join('');
  }
}

module.exports = VigenereCipheringMachine;
