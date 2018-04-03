'use strict';

const max = numbers => {
  let arr = numbers;
  let largest = 0;

  if(arr.length === 0) {
    return null || undefined;
  }

  let i = 0;
  while(i <= arr.length) {
	  if(arr[i] > largest){
	  largest = arr[i];
	  }
	  i++;
  }
  return largest;
};

console.log(max([5, 4, 3, 2, 1, 12, -5, 20])); // 20