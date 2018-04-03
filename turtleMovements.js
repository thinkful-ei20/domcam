'use strict';
const turtleForwardLeft = turtleMoves => turtleMoves.filter(turtleMove => turtleMove[0]>=0 && turtleMove[1]>=0);
const turtleSteps = turtleMoves => turtleMoves.map(turtleMove => turtleMove[0]+turtleMove[1]);
const turtleStepsString = turtleSteps => turtleSteps.forEach(turtleStep => console.log(`This turtle took ${turtleStep} step(s).`));
const examples = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleForwardLeft(examples));
console.log(turtleSteps(examples));
console.log(turtleStepsString(turtleSteps(examples)));