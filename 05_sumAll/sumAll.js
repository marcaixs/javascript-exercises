const sumAll = function(num1, num2) {
    let sum = 0;
    let min;
    let max;

    if(num1<0 || num2<0 || typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "ERROR";
    }

    if(num1>num2){max = num1; min = num2}else{min = num1; max = num2}
    for(let i=min; i<=max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
