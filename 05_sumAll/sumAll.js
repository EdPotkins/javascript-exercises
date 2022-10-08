const sumAll = function(startInt, endInt) {
    let finalSum = 0;
    if (startInt < 0 || endInt < 0){
        return "ERROR";
     } 
    else if (!Number.isInteger(startInt) || !Number.isInteger(endInt)){
            return "ERROR";
         } 
    else if (startInt > endInt){
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
