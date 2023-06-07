// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

let yourAge = prompt('enter your age: ');
let myAge = 25; 
let selisih = Math.abs(yourAge - myAge);

if (yourAge < myAge) {
    console.log('you are ' + selisih + ' younger than me')
} else if (yourAge > myAge){
    console.log('you are ' + selisih + ' older than me')
} else {
    console.log('we are at the same age')
}