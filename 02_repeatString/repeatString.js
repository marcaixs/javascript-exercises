const repeatString = function(string, num) {
    let response = "";
    for(let i = 1; i<= num; i++){
        response += string;
    }
    if(num<0) response = 'ERROR';
    return response;
};

// Do not edit below this line
module.exports = repeatString;
