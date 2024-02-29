'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null
// WHILE: input === null
//   input <- prompt('say hello')
// :END WHILE

/* ---   ?   --- */

// message <- ''
// IF: input === 'hello'
//   message <- 'hello to you too!'
// ELSE:
//   message <- 'good bye'
// :END IF

/* ---   ?   --- */

// alert(message)

let input = null;
while (input === null) {
  input < -prompt('say hello');
}
let message = '';
if (input === 'hello') {
  message = 'hello to you too!';
} else {
  message = 'good bye';
}

alert(message);
