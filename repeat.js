'use strict';

const repeat = (fn, n) => {
  for(let i = 1; i <= n; i++) {
    fn();
  }
};

const hello = () => {
  console.log('Hello world');
};
const goodbye = () => { 
  console.log('Goodbye world');
};

repeat(hello, 5);
repeat(goodbye, 5);