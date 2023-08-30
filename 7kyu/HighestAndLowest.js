// Description

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My solution:
function highAndLow(numbers){
    const nums = numbers.split(' ').map(Number);
    
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for (num of nums) {
      if (num > max) {
        max = num
      }
      if (num < min) {
        min = num
      }
    }
    return max.toString() + ' ' + min.toString();
  }

  // Other good solutions:

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

// math.max and math.min and built-in JS functions that return maximum and min value from a list of numbers
// However, they do not accept array directly.
// We use spread operator (...) to pass the elements of the array as seperate arguments
// Math.max(...["4", "5", "29", "54"]) is the same as Math.max("4", "5", "29", "54")

