'use strict';
const average = numbers => {
  let total = 0;
  numbers.forEach(number => {
    total += number;
  });
  return total/numbers.length;
};

console.log(average([8,2])); // logs 5