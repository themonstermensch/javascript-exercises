const findTheOldest = function(people) {
    const year = new Date().getFullYear()
    return people
        .reduce(((oldest, person) => {
            if((oldest.yearOfDeath || year) - oldest.yearOfBirth < 
                (person.yearOfDeath || year) - person.yearOfBirth) 
                return person;
            else return oldest;
          }))
};

// Do not edit below this line
module.exports = findTheOldest;
