const repeatString = function(string, num) {
  let repeat = ''
  
  for (let i = 0; i < num; i++) {
    repeat += string;
  }
  
  return num === -1 ? "ERROR" : repeat;
};

// Do not edit below this line
module.exports = repeatString;
