'use strict';

const decode = str => {
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

const randomLetters = () => {
  // Creates an empty string
  let text = '';
  // Creates a loop that will iterate a random number of times, minimum 2, up to 7)
  for (let i = 0; i <= (Math.floor(Math.random()*5) + 2); i++){
    // Adds a random character from a-z using character codes (random number between 97 and up to 123)
    text += String.fromCharCode(Math.floor(Math.random()*(123-97)+97));
  } return text;
};

const encoder = (a, c) => c===' ' ? // Checks to see if the current value is the 'space' character
  a+'the ' : a + randomLetters() + c + ' '; //if it is, concat the to the accumulator, otherwise, add random letters
  
const encode = str => {
  // splits str into a array of characters
  return str.toLowerCase().split('')
    // checks each character using encoder function and reduces to the encoded string
    .reduce(encoder, '');
};

const encodedStr = encode('NO NEED TO SHOUT!');
const decodedStr = decode(encodedStr);
console.log(`${encodedStr} 
${decodedStr}`);