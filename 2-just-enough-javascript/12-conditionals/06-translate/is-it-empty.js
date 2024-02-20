// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('do whatever you want')
let input = prompt('do whatever you want');

/* ---   ?   --- */

// message <- 'your input is '
let message = 'your input is ';

// IF: input === null
if (input === null) {
  /* ---   ?   --- */
  //   message <- message + 'null'
  message += 'null';
}
// ELSE:
else {
  let maybeNot = confirm(message + input);
  if (maybeNot === false) {
    message = 'try again';
  } else {
    message = 'thank you';
  }
}

alert(message);
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)
