// 3. String repetition

// Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
// Example:

// console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
// console.log(rokket('abc', 2)) // this outputs 'abcabc'


// Solution:
function rokket (word, multFactor){
    let result = '';
    for(i=0; i<multFactor; i++){
        result += word;
    }
    return  result
}


console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'
