// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
 // let meWorkIt = input.split("").reverse().join("");
  //return meWorkIt; 
    
   
  //forgot that I have to incorporate a for-loop. This. Is. The. RE-mix!
  
  //convert string into an array of characters via split method
  let isItWorthIt = input.split(""); 
  
  //create an empty array 
  let meWorkIt = []; 
  
  //use for-loop starting at the end of the array of characters
  for(let putMyThngDwn = isItWorthIt.length-1; putMyThngDwn >= 0; putMyThngDwn--){
    
  //push value of old array into the new empty array  
       meWorkIt.push(isItWorthIt[putMyThngDwn]);
  }
//return new array
return meWorkIt.join(""); 
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}