//! Leap year (7kyu)

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//!Noonerize me (7kyu)

// function noonerize(numbers) {
//   if (!numbers.every((v) => typeof v === 'number')) {
//     return 'invalid array';
//   }
//   let n1 =
//     (numbers[1].toString().slice(0, 1) + numbers[0].toString().slice(1)) * 1;
//   let n2 =
//     (numbers[0].toString().slice(0, 1) + numbers[1].toString().slice(1)) * 1;
//   return Math.abs(n1 - n2);
// }

//! Quadrants (8kyu)

// function quadrant(x, y) {
//   if (x > 0 && y > 0) {
//     return 1;
//   } else if (x < 0 && y > 0) {
//     return 2;
//   } else if (x < 0 && y < 0) {
//     return 3;
//   } else if (x > 0 && y < 0) {
//     return 4;
//   }
// }
