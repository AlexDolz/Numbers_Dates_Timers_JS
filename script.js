'use strict';

// *********** Converting and checking numbers ************************
console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.300000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30 number
console.log(Number.parseInt('px30', 10)); // NaN

console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

// Checking if value is NaN
console.log(Number.isNaN(20)); // false  number
console.log(Number.isNaN('20')); // false  string
console.log(Number.isNaN(+'20X')); // true  NaN
console.log(Number.isNaN(23 / 0)); // false  infinity

// Checking is value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20px')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// ****************** Math and rounding ********************************

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

console.log(Math.max(5, 18, 12, 11, 2)); // 18
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInte = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInte(10, 20)); // random numbers from 10 to 20

// Rounding integers
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.7).toFixed(0)); // 3 string always when toFixed
console.log((2.7).toFixed(3)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 number

// ********************** Remainder operator ***************************

console.log(5 % 2); // 1   2*2 = 4   5 - 4 = 1

console.log(8 % 3); // 2

console.log(6 % 2); // 0

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true  even
console.log(isEven(23)); // false odd
console.log(isEven(514)); // true even

// ********************** Numeric separators ***************************

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1);
console.log(transferFee2);

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000')); // NaN
console.log(parseInt('230_00')); // 230

// ************************* BigInt **************************************

console.log(2 ** 53 - 1); // 9007199254740991 the biggest number JS can safely represent
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(48543604580768345974097n);
console.log(BigInt(48543604580768345974097));

// Operations
console.log(10000n + 10000n);
console.log(329045349067450870458082835060387n * 100000000n);

const huge = 21592345603496089345760n;
const num = 23;
// console.log(huge + num); // error, cant combine
console.log(huge + BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

// ************************* Dates *******************************************

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // + 3 days

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
