// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution:

function pigIt(str){
    const words = str.split(/\b/);
    let pigL = [];
    for (let word of words) {
      if (word.match(/\w/)) {
        pigL.push(word.slice(1) + word[0] + 'ay');
      } else {
        pigL.push(word)
      }
    }
    return pigL.join('');
  }
  
// Other good solutions:

function pigIt(str){
    //Code here
    return str.split(' ').map(word => {
      return word.substring(1) + word[0] + 'ay';
    }).join(' ');
  }