// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


function greetings() {
    console.log("hello world!")

};

greetings();

function fizzBuzz(wholeNumber) {
    //set a variuable equal to empty array since that is what we want our result to be put into
    let result = [];

    for(let i = 1; i <= wholeNumber; i++) {
        //using if else functions to satisfy the 4 conditions
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result.push("FizzBuzz")
        }
        //the order in which else if is placed is important
        else if (i % 3 ==0) {
            result.push("Fizz")
        }
        else if (i % 5 == 0) {
            result.push("Buzz")
        }
        //else should always be the last condition
        else {
            result.push(i.toString())
        }
    }

    return result;

}
