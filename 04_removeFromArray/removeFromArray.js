const removeFromArray = function (array, ...num) {
  return array.filter(item => {
    for (let number of num) {
      if (item === number) return false; 
    };
    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
