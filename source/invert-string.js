function invert(str) {
    const arr = [...str];
    const newArr = arr.reverse();
    return newArr.join('');
}

Array.prototype.reverse = function() {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
      // i = 0 [a]
      // i = 1 [b]
      // i = 2 [c]

      newArr[i] = this[this.length - i - 1]
  }
  return newArr;
};

console.log(invert('abc') == 'cba')
console.log(invert('abca') == 'acba')
console.log(invert('') == '')
console.log(invert('aaa') == 'aaa')
