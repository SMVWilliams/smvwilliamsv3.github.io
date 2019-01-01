// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < array.length; i++){
    console.log(array[i]); 
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
 
  for(let i = array.length-1; i >= 0; i--){
    console.log(array[i]);
  }
  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object){
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //intialize an empty array
  const arrayOfKeys = []; 
  
  //use for-in loop to access keys
  for(let key in object){
    
    //push object's keys into empty array
    arrayOfKeys.push(key);
  }

  //array is return value. 
  return arrayOfKeys;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for( let key in object){
    
   console.log(key); 
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

  //use object.keys method to create an array containing object keys
  //return array length which should be the length of the key/value pairs within the object. 
  
  return Object.keys(object).length; 

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
 
 
 //create a container for the object's values  
const objValues = []; 

//run a for-in loop that pushes each key value into the empty array
for(let key in object){
   objValues.push(object[key]);
}

//use a for loop in reverse and use console.log to print the values!
for(let i = objValues.length-1; i >= 0; i--){
    
  console.log(objValues[i]);
  
}
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}