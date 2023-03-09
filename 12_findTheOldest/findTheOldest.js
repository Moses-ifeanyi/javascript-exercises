const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
      const oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath: new Date().getFullYear()) - oldest.yearOfBirth;
      const currentAge = (current.yearOfDeath ? current.yearOfDeath: new Date().getFullYear()) - current.yearOfBirth
      return currentAge > oldestAge ? current : oldest;
    })
  };

// Do not edit below this line
module.exports = findTheOldest;
