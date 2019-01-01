// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
//create a for loop with the index starting at 1.    
for(let i = 1; i <= 100; i++){
    
    //if the index is a multiple of 3 and 5, print "FizzBuzz", use modulus operator
    if( i % 15 === 0){
        
        console.log("FizzBuzz"); 
    
    //If the index is a multiple of 5, print "Buzz", use modulus operator     
    } else if(i % 5 === 0){
        
        console.log("Buzz"); 
    
    //If the index is a mutliple of 3, print "Fizz".     
    } else if(i % 3 === 0){
        
        console.log("Fizz"); 
    
    //prints the indexed number.
    } else {
        console.log(i); 
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}