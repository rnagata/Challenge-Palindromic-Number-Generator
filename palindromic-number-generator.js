'use strict';

function palindromicNumberGenerator(num) {
  let palindrome = null;
  let step = 0;
  while (!palindrome) {
    let reverseNum = []
    num.toString().split('').forEach((item) => reverseNum.unshift(item));
    reverseNum = parseFloat(reverseNum.join(''));
    if (num === reverseNum){
      return {value: num, steps: step};
    }
    num += reverseNum;
    step++;
  }
}

module.exports = palindromicNumberGenerator;