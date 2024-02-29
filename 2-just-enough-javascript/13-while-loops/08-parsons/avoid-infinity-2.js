'use strict';

let count = 1;
while (count < 10) {
  count = count + 1;
  alert(count);
}

/* --------- */

{
  let count = 10;

  while (count) {
    alert(count);
    count = count - 1;
  }
}
// #todo
