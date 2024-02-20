// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstNum = readNumber('left-num');
  let secondNum = readNumber('right-num');
  // --- do the math ---
  let addition = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;

  let multiplication = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;

  let subtraction = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;

  let division = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;

  let reminder = `${firstNum} % ${secondNum} = ${firstNum % secondNum}`;
  // --- create a message
  let message = `${addition}\n${multiplication}\n${subtraction}\n${division}\n${reminder}`;

  // --- display the message ---
  displayString('sum', message);
});
