'use strict';

const hazardWarningCreator = (typeOfWarning) => {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
};

const rockWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Icey Conditions');
const windWarning = hazardWarningCreator('Strong Winds');

rockWarning('Ute Pass');
iceWarning('Downtown');
windWarning('the foothills of the mountain');