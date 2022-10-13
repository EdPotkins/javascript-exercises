const getTheTitles = function(arrayOfObjects) {
    let titles = [];
    arrayOfObjects.forEach(object => titles.push(object.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
