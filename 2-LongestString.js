//2. Longest string

// Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
// Example:
// const list = ['best', 'company', 'ever']
// console.log(rokket(list)) // this outputs 'company'

// Solution:

function rokket(list) {
  let max = '';
  list.forEach( element => max = element.length > max.length ? element : max );
  return max
}

const list =  [ 'best', 'company', 'ever' ];
console.log(rokket( list ) );// this outputs 'company'