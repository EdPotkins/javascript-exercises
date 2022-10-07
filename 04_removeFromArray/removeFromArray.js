const removeFromArray = function(givenArray, valueToRemove, ...otherValuesToRemove) {
    
    let indexArray = [];
    for (let i = 1; i < arguments.length; i++){
        indexArray.push(givenArray.indexOf(arguments[i]));
    }
    for (let i = 0; i < arguments.length - 1; i++){
        givenArray.splice(indexArray[i], 1)
    }

    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
