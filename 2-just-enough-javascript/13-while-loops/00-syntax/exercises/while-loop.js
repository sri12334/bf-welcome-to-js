// prettier-ignore

// eslint-disable-next-line strict
{ // so prettier does not remove the extra spacing
  // eslint-disable-next-line no-unused-expressions
  'use strict';

  // ::::: don't forget to trace the program! :::::

  let input = null;

  while (input === null) {
    input = prompt('no canceling allowed');
    console.log(input);
  }
  let message = 'thank you for your input: ' + input;

  alert(message);
}
