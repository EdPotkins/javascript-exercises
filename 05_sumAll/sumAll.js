const sumAll = function(startInt, endInt) {
    let finalSum = 0;

    if (startInt > endInt){
        for (endInt; endInt <= startInt; endInt++){
            finalSum += endInt;
        }
        return finalSum;
    } else {

        for (startInt; startInt <= endInt; startInt++){
            finalSum += startInt;
        }
        return finalSum;
        }
};

// Do not edit below this line
module.exports = sumAll;
