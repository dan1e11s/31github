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

//! Add Length (8kyu)

// function addLength(str) {
//   const arr = str.split(' ');
//   const newArr = [];
//   for (let i of arr) {
//     i = i + ' ' + i.length;
//     newArr.push(i);
//   }

//   return newArr;
// }

// addLength('apple ban');

//! Who is going to pay for the wall? (kyu)

// function whoIsPaying(name) {
//   let str = '';
//   if (name.length <= 2) {
//     return [name];
//   } else {
//     for (let i = 0; i < 2; i++) {
//       str += name[i];
//     }

//     return [name, str];
//   }
// }

//! Whose move? (8kyu)

// function whoseMove(lastPlayer, win) {
//   if (lastPlayer === 'white') {
//     if (win) {
//       return 'white';
//     } else {
//       return 'black';
//     }
//   } else if (lastPlayer === 'black') {
//     if (win) {
//       return 'black';
//     } else {
//       return 'white';
//     }
//   }
// }

//! Smallest value of an array (7kyu)

// function findSmallest(arr, toReturn) {
//   if (arr.length === 0) {
//     return 'Array is empty';
//   }

//   const minValue = Math.min(...arr);
//   const minIndex = arr.indexOf(minValue);

//   if (toReturn === 'value') {
//     return minValue;
//   } else if (toReturn === 'index') {
//     return minIndex;
//   } else {
//     return 'Invalid returnType';
//   }
// }

//! Find the Integral (8kyu)

// function integrate(coefficient, exponent) {
//   const newCoefficient = coefficient / (exponent + 1);
//   const newExponent = exponent + 1;

//   const result = `${newCoefficient}x^${newExponent}`;

//   return result;
// }

//! Did she say hallo?

// function validateHello(greetings) {
//   const arr = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];

//   const lowercaseMessage = greetings.toLowerCase();

//   return arr.some((greeting) => lowercaseMessage.includes(greeting));
// }

//! Sentences with function (7kyu)

// function getName(args) {
//   if (args.length == 0) {
//     return arguments.callee.caller.name + '.';
//   }
//   return arguments.callee.caller.name + ' ' + args[0];
// }

// function Adam() {
//   return getName(arguments);
// }
// function has() {
//   return getName(arguments);
// }
// function a() {
//   return getName(arguments);
// }
// function dog() {
//   return getName(arguments);
// }
// function The() {
//   return getName(arguments);
// }
// function name() {
//   return getName(arguments);
// }
// function of() {
//   return getName(arguments);
// }
// function the() {
//   return getName(arguments);
// }
// function is() {
//   return getName(arguments);
// }
// function also() {
//   return getName(arguments);
// }

//! Simple Fun #38: House Of Cats

// function houseOfCats(legs) {
//   let result = [];
//   while (legs > 0) {
//     result.unshift(legs / 2);
//     legs -= 4;
//   }
//   return result[0] === 2 ? [0, ...result] : result;
// }

//! Best Travel (5kyu)

// function chooseBestSum(t, k, ls) {
//   function combinations(arr, k) {
//     if (k === 0) return [[]];
//     if (arr.length === 0) return [];

//     const head = arr[0];
//     const tail = arr.slice(1);

//     const withoutHead = combinations(tail, k);
//     const withHead = combinations(tail, k - 1).map((comb) => [head, ...comb]);

//     return withoutHead.concat(withHead);
//   }

//   const possibleTrips = combinations(ls, k);
//   const validTrips = possibleTrips.filter(
//     (trip) => trip.reduce((sum, distance) => sum + distance, 0) <= t
//   );

//   if (validTrips.length === 0) return null;

//   const maxDistance = Math.max(
//     ...validTrips.map((trip) =>
//       trip.reduce((sum, distance) => sum + distance, 0)
//     )
//   );
//   return maxDistance;
// }
