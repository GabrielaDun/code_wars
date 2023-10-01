// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// My solution:
function sumTwoSmallestNumbers(numbers) {  
    let max = Number.MAX_SAFE_INTEGER;
    let min = Math.min(...numbers)
    let secondD = max;
    for (let digit of numbers) {
      if (digit > min && digit < secondD) {
        secondD = digit
      } 
    }
    return secondD + min;
  }

// Other good solution:

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}