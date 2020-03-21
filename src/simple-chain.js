const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  
  addLink(value) {
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'string' || position <= 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let copy = [...this.arr];
    this.arr = [];
    return copy.map(el => `( ${el} )`).join('~~');
  }
};

module.exports = chainMaker;