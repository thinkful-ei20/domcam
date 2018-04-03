'use strict';

const decodeArray = str => {
  const words = str.split(' ');
  return words.reduce( (accumulator, currentValue) => {
    if(currentValue.length===3){
      return accumulator += ' ';
    } else {
      return accumulator += currentValue.toUpperCase().slice(-1);
    }
  }, '');
};


const str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(decodeArray(str));