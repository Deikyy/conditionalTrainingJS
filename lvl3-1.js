// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.\

let month = prompt("Enter a month:");
month = month.toLowerCase();

if (month === "january") {
  console.log("January has 31 days.");
} else if (month === "february") {
  console.log("February has 28 days.");
} else if (month === "march") {
  console.log("March has 31 days.");
} else if (month === "april") {
  console.log("April has 30 days.");
} else if (month === "may") {
  console.log("May has 31 days.");
} else if (month === "june") {
  console.log("June has 30 days.");
} else if (month === "july") {
  console.log("July has 31 days.");
} else if (month === "august") {
  console.log("August has 31 days.");
} else if (month === "september") {
  console.log("September has 30 days.");
} else if (month === "october") {
  console.log("October has 31 days.");
} else if (month === "november") {
  console.log("November has 30 days.");
} else if (month === "december") {
  console.log("December has 31 days.");
} else {
  console.log("Invalid month.");
}
