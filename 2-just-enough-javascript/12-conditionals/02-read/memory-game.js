// #todo

'use strict';

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
); // ?thingToRemember

if (thingToRemember !== null) {
  // ?thingToRemember
  let displayTheText = confirm(
    'would you like to see your text one more time?',
  ); // ?displayTheText
  if (displayTheText) {
    // ?displayTheText
    alert(thingToRemember); // ?thingToRemember
  }

  let guess = prompt('now try to remember what it was:'); // ?guess
  if (guess !== null && guess === thingToRemember) {
    // // ?guess, ?thingToRemember
    alert('you win!');
  } else {
    alert('try again.');
  }
}

alert('good bye');

/*
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - how many scopes are there?
      •There are two scopes in this program:
        •Global scope
        •Scope within the if (thingToRemember !== null) block
  - how many variables are declared in each scope?
    •Global scope: thingToRemember
    •Scope within the if (thingToRemember !== null) block: displayTheText, guess
  - how many semi-colons are there in this program?
    •There are 7 semicolons in this program.
  - how many conditionals are there in this program?
    •There are 2 conditionals in this program.
  - mark each possible path through this program
  - how does each interaction influence the path taken?

  done with these questions?  try "ask me" and "random line"
*/
