const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if( typeof(position) != 'number' || position > this.arr.length || position <= 0 || (position^0) !== position   ) 
    {
      this.arr.splice(0);
      throw new Error('Position number is not correct');
    }
      this.arr.splice(position-1, 1);
      return this
  },
  reverseChain() {
    this.arr.reverse();
      return this
  },
  finishChain() {
    let newArr = this.arr.map(i => {
      if(i === " "){
        return "( )";
      } else {
        return `( ${i} )`;
      }
    }).join("~~");
    this.arr = [];
    return newArr;
  }
};

module.exports = chainMaker;
