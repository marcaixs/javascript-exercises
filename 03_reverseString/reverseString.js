const reverseString = function(string) {
    let response='';
    for(let i = string.length - 1; i>=0; i-- ){
        response += string.at(i);
    }
    return response;
};

// Do not edit below this line
module.exports = reverseString;
