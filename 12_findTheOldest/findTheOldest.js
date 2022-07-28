const findTheOldest = function(people) {
  return people.reduce((personA, personB) => {
    const personaAge = getAge(personA.yearOfBirth, personA.yearOfDeath);
    const personbAge = getAge(personB.yearOfBirth, personB.yearOfDeath);
    return personaAge < personbAge ? personB : personA;
  })
};

const getAge = function(birthYear, deathYear) {
  if(!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
