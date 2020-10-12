// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: When nestedFunction() runs it needs closure in order to output the variable internal to the console because it(nestedFunction()) does not contain the variable internal at the block level
// (function) scope.  nestedFunction() is inside myFunction() so it first reaches outside of itself(nestedFunction()) and into the scope of the function it is nested within (myFunction()) for closure. 
// The variable internal is defined within myFunction() so nestedFunction() finds its closure in the block level scope of myFunction(). 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num){
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}

console.log(summation(4)); //test for 10
console.log(summation(8)); //test for 36