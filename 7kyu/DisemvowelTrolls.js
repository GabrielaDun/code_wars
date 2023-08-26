// Task

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// My solition:

function disemvowel(str) {
    let newStr = '';
    for (let xX of str) {
      let xx = xX.toLowerCase();
      if (xx !== 'a' && xx !== 'e' && xx !== 'i' && xx !== 'o' && xx !== 'u'){
        newStr += xX;
      }
    }
    return newStr;
  }

/// Other good solution:

function disemvowelTwo(str) {
    return str.replace(/[aeiou]/gi, '');
}

// * g: This is a flag that stands for "global", which means that it will search for and replace all occurrences in the string, 
// not just the first one.

// * i: This is another flag that stands for "case-insensitive",
//  which means it will match characters regardless of whether they are uppercase or lowercase.