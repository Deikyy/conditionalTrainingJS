// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3

let a = parseInt(prompt('enter for a'));
let b = parseInt(prompt('enter for b'));

if (a < b) {
    console.log(a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + ' is greater than ' + b);
} else {
    console.log('same')
} 