// This kata is about multiplying a given number by eight 
// ›if it is an even number and by nine otherwise.

// My response:

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      number *= 8
    }
    else {
      number *= 9
    }
  return number
}

// Other good response that I am learning from

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }