// List Filtering

// In this kata you will create a function that takes a list of non-negative integers
//  and strings and returns a new list with the strings filtered out.

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// My solution:

function filter_list(l) {
    let newArrey = [];
    for (let single of l) {
      if (typeof single === 'number') {
        newArrey.push(single);
      }
    }
    return newArrey;
  }

  // Other good solutions:

  function filter_list(l) {
    return l.filter(single => typeof single == "number")
   }