import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const text = readString('text');
  const character = readString('character');
  const index = readNumber('i');

  let message = '';
  //check if character exists
  if (character) {
    if (text[index] === character) {
      message = 'yes';
    } else {
      message = 'no';
    }
  } else {
    message = 'oops! entre your character';
  }

  // --- display the search results ---
  displayString('search-result', message);
});
