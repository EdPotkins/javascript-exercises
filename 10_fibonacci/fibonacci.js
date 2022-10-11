const fibonacci = function(term) {
    let n1 = 1, n2 = 1, nextTerm;
    let sequence = [];
    let parsedTerm = parseInt(term);
    if (term > 0){
        for (let i = 1; i <= parsedTerm; i++){
            sequence.push(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return sequence[parsedTerm-1];
    } else return "OOPS";  
}    

// Do not edit below this line
module.exports = fibonacci;
