import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const likeCats = readBoolean('likes-cats');
  const isAllergic = readBoolean('is-allergic');
  const ownCat = readBoolean('owns-one');

  // --- generate good advice ---
  let advice = '';

  if (likeCats && !isAllergic && ownCat) {
    advice = 'Great! Consider adopting a cat.';
  } else if (likeCats && !isAllergic && !ownCat) {
    advice = 'Think about getting a cat!';
  } else if (!likeCats && isAllergic && ownCat) {
    advice = 'Manage your allergies if you have a cat.';
  } else if (!likeCats && isAllergic && !ownCat) {
    advice = "Avoid owning cats if you're allergic.";
  } else {
    advice = 'Consider consulting a professional for personalized advice.';
  }

  // --- display advice for the user ---
  displayString('custom-advice', advice);
});
