// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// My solution:

function removeEveryOther(arr){
    let newA = []
    let num = 1
    for (let word of arr) {
      num +=1
      if (num % 2 === 0) {
        newA.push(word)
      }
    }
    return newA
}

// Other good solutions:

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}