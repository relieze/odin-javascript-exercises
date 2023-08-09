const findTheOldest = function(people) {
  return people.sort((a, b) => {
    let aDeath = a.yearOfDeath || new Date().getFullYear();
    let bDeath = b.yearOfDeath || new Date().getFullYear();

    return (bDeath - b.yearOfBirth) - (aDeath - a.yearOfBirth);
  }).at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
