// const fibonacci = function(a) {
//   let total = 0;
//   let first = 0;
//   let secon = 1;
//   for (let i = 0; i < a; i++) {

//     total = first + secon;
//     secon = first;
//     first = total;
    

//     // total = 0 + 1;
//     // secon = 0;
//     // first = 1;

//     // total = 1 + 0;
//     // secon = 1;
//     // first = 1;

//     // total = 1 + 1;
//     // secon = 1;
//     // first = 2;

//     // total = 2 + 1;
//     // secon = 2;
//     // first = 3;

//     // total = 3 + 2;
//     // secon = 3;
//     // first = 5;

//     // total = 5 + 3;
//     // secon = 5;
//     // first = 8;
    

//   }
//   return a < 0 ? "OOPS" : total;
// };

// a: 04  num: 01

// i: 00  num: 01 + 00 = 01
// i: 01  num: 01 + 01 = 02
// i: 02  num: 02 + 01 = 03
// i: 03  num: 03 + 02 = 05
// i: 05  num: 05 + 03 = 08
// i: 08  num: 08 + 05 = 13
// i: 13  num: 13 + 08 = 21
// i: 21  num: 21 + 13 = 34


const fibonacci = function(a) {
  let total = 0, first = 0, second = 1;
  for (let i = 0; i < a; i++) {
    total = first + second;
    second = first;
    first = total;
  }
  return a < 0 ? "OOPS" : total;
};

// Do not edit below this line
module.exports = fibonacci;
