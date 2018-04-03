'use strict';
const min = numbers => {
  let minNum = numbers[0];
  let limit = numbers.length - 1;
  while(limit>=0) {
    if (numbers[limit] <= minNum) {
      minNum = numbers[limit];
    }
    limit--;
  }
  return minNum;
};

console.log(min([4, 8, 9, 10, 3, 2, 11, -1, -Infinity])); // logs -Infinity