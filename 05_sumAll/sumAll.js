const sumAll = function(num1, num2) {
  let start = 0, end = 0, sum = 0;
  if (num1 > num2) {
    start = num2;
    end = num1;
  } else {
    start = num1;
    end = num2;
  }
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  return num1 > 0 && num2 > 0 && typeof(num2) == 'number' && typeof(num1) == 'number' ? sum : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
