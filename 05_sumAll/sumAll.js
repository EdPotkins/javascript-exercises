const sumAll = function(startInt, endInt) {
    let finalSum = 0;
    for (startInt; startInt <= endInt; startInt++){
        finalSum += startInt;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
