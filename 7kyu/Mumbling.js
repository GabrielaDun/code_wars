// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution:

function accum(str) {
    let word = ''
  let loop = -1;
  for (letter of str) {
    loop += 1 
    word += letter.toUpperCase() + letter.repeat(loop).toLowerCase()  +'-'
  }
  return word.slice(0, -1);
}

// Other good solutions:

function accum(str) {
	return str.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
}