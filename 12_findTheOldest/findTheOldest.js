const findTheOldest = function(arrayOfObjects) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const oldest = arrayOfObjects.reduce((previousValue, currentValue) => {
        if(typeof previousValue.yearOfDeath !== 'undefined'){
            const previousAge = previousValue.yearOfDeath - previousValue.yearOfBirth;
            const currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
            return previousAge < currentAge ? currentValue : previousValue;
        } else {
            const previousAge = currentYear - previousValue.yearOfBirth;
            const currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
            return previousAge < currentAge ? currentValue : previousValue;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
