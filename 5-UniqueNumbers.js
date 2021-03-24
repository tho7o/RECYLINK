// 5. Unique numbers

// Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
// arrays).
// Example:
// console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
// console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

// Solution:

function rokket (array1, array2){
   return  array1.concat(array2.filter( number => !array1.includes(number)));
}

console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

