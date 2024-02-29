import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const string1 = readString('string-a');
  const string2 = readString('string-b');
  let input = '';
  // --- sort them input by length ---{
  if (string1.length > string2.length) {
    input = string2 + ', ' + string1;
  } else {
    input = string1 + ', ' + string2;
  }
  // --- display the sorted strings ---
  displayString('sorted', input);
});
