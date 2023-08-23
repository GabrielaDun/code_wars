// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.


// My solution:

const summation = function (num) {
    let output = 0;
    for (let i = 0; i <= num; i++) {
      output += i
    }
    return output
  }

// Other interesting solution:
const summerationTwo = n => n * (n + 1) / 2;
