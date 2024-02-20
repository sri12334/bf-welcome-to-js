// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstNum = readNumber('left-num');
  let secondNum = readNumber('right-num');

  // --- compare the numbers ---
  let graterThan = `${firstNum} > ${secondNum} -- ${firstNum > secondNum}`;

  let graterThanOrEqual = `${firstNum} >= ${secondNum} -- ${
    firstNum >= secondNum
  }`;

  let equal = `${firstNum} === ${secondNum} -- ${firstNum === secondNum}`;

  let lessThanOrEqual = `${firstNum} <= ${secondNum} -- ${
    firstNum <= secondNum
  }`;

  let lessThan = `${firstNum} < ${secondNum} -- ${firstNum < secondNum}`;

  // --- create a message
  let message = `${graterThan}\n${graterThanOrEqual}\n${equal}\n${lessThanOrEqual}\n${lessThan}`;

  // --- display the message ---
  displayString('compared', message);
});
