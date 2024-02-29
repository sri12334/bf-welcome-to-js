// #todo

'use strict';

let loggedIn = false;
let didAgree = confirm('do you agree to our terms of service?');
while (!loggedIn) {
  if (didAgree === true) {
    loggedIn = true;
  } else {
    alert('not an option, you must agree');
  }
}

alert('welcome to social media!');

/* distractors:

    prompt

*/
