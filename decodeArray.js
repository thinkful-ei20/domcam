'use strict';

const decodeArray = str => {
  // assign the variable words to the str argument, split into an array at the ' ';
  const words = str.split(' ');
  // return words, reduced. The Accumulator is what is returned, current value is the current iteration in the array
  return words.reduce( (accumulator, currentValue) => {
    // if current iteration's length is exactly 3, return an empty space to the accumlator
    if(currentValue.length===3){
      return accumulator += ' ';
    } else {
      // Else, return the last character of the iteration, capslocked.
      return accumulator += currentValue.toUpperCase().slice(-1);
    }
  }, '');
};


const str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(decodeArray(str));