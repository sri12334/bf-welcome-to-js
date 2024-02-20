import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const text = readString('text');
  const query = readString('query');
  const sensitive = readBoolean('sensitive');
  // --- do the search ---
  let msg = '';
  if (sensitive) {
    if (text.include(query)) {
      msg = 'Yes';
    } else {
      msg = 'no';
    }
  } else {
    const isInclude = text.tolowercase().include(query.tolowercase());
    if (isInclude) {
      msg = 'yes';
    } else {
      msg = 'no';
    }
  }

  // --- display the search results ---
  displayString('search-result', msg);
});
