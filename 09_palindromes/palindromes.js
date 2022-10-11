const palindromes = function (stringInput) {
//convert stringInput to lowercase with toLowerCase() method to make not case-sensitive
    const stringLowerCase = stringInput.toLowerCase();   
//convert stringLowerCase into an array with split() method
    const array = stringLowerCase.split(''); 
//   console.log(`This is the array: ${array}`);
//filter out only letters a-z from array and put resulting array into cleanArray
    const regExp = /\w/;
    const cleanArray = array.filter(letter => regExp.test(letter));
//   console.log(`This is the cleanArray: ${cleanArray}`);
//reverse cleanArray with reverse() method   
    const reversedArray = [...cleanArray].reverse();
//    console.log(`This is the reversedArray: ${reversedArray}`);
//compare cleanArray and reversedArray
    return cleanArray.every((value, index) => value === reversedArray[index]);

}
// Do not edit below this line
module.exports = palindromes;
