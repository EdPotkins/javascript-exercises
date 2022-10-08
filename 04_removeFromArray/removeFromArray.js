const removeFromArray = function(givenArray, valueToRemove, ...otherValuesToRemove) {

 //check if valueToRemove is present in givenArray with method .some()
 //put the result of this check (true/false) into a varible isPresent
 //if isPresent true then run code, else dont compare
    let isPresent = givenArray.some((element) => element === valueToRemove);
    if(isPresent){
        let indexArray = [];
        for (let i = 1; i < arguments.length; i++){
            indexArray.push(givenArray.indexOf(arguments[i]));
        }
        for (let i = 0; i < arguments.length - 1; i++){
            givenArray.splice(indexArray[i], 1)
        }

        return givenArray;
    } else return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
