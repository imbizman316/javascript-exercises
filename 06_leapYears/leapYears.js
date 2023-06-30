const leapYears = function(year) {

    //let's declare answer
    let answer = false;

    //let's first filter only the one divisable with 4.
    if (year % 4 === 0) {

        //of those numbers, see if it's divisible with 100
        if (year % 100 === 0) {
            //if it's divisible with 100, only ones divisible with 400 is true.
            if (year % 400 === 0){
                answer = true;
            }
        //if it's not divisable with 100, that means it's leap year, so it's true.
        } else {
            answer = true;
        }
    }

    return answer;
};

// Do not edit below this line
module.exports = leapYears;
