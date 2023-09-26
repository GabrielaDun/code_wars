// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution:

function findShort(s){
    let letters = 1000;
    for (let word of s.split(' ')) {
      if (word.length < letters){
        letters = word.length
      }
    }
    return letters
}