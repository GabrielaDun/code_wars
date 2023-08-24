// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// My solution: 

function smash (words) {
    let sentence = ""
    for (let word of words) {
      if (sentence == "") {
        sentence += word
      } else {
      sentence += ' ' + word
      }
    }
     return sentence
  };

// Other solution I can learn from:

smash = function (words) {
    return words.join(" ");
  };