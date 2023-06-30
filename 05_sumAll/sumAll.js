const sumAll = function(num1,num2) {

    //Declare answer
    let answer = 0;
    let first = 0;
    let second = 0;

    //lets check if any of the numbers is negative or string.(not a integer)
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number"
     || typeof(num2) !== "number"){
        return "ERROR";
     }

    //let's check which of two numbers is greater
    //smaller one is first and greater one is second.
    if (num1 < num2) {
        first = num1;
        second = num2;
    } else {
        first = num2;
        second = num1;
    }
   
    //Make a for loop that starts from first up to second + 1
    for (let i = first; i <= second; i++) {
        //add i to answer.
        answer += i;
    }

    return answer;

};

// Do not edit below this line
module.exports = sumAll;
