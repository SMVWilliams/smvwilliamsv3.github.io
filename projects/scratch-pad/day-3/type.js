// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    let checkArray = Array.isArray(value);
    
    return checkArray ? true : false; 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'object'){
        if(value === null || Array.isArray(value) || value instanceof Date){
            return false; 
        } else {
            return true; 
        }
        
    } else {
        return false; 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)){
        return true; 
    } else{
    return isObject(value); 
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
 //intialize empty string that will be the return value of the function.
 let typeValue = ''; 

 //for clarity, set typeof operator to a variable name to be used as an expression in switch
 var type = typeof value;
    
  switch(type){

     // for the first six cases, variable typeValue will be reassigned to the return value of the typeof operator.
     case 'boolean' : 
     case 'function' :
     case 'number' : 
     case 'string' : 
     case 'symbol' :
     case 'undefined' : 
            typeValue = typeof value; 
            break; 
            
     //for the default case ('object') use I decided to use a multi-chained ternary to determine if value is an array, object, date or null
     //if any case is true. the variable typeValue will be reassigned accordingly.
    
    default :
    
         isCollection(value) ? typeValue = 'array' : 
         isObject(value) ? typeValue = 'object' : 
         value instanceof Date === true ?  typeValue = 'date' : typeValue = 'null';
    
    }
    //return value is the reassigned string variable. 
     return typeValue; 
   
    // if(isArray(value)){
    //     return 'array';
        
    // } else if ( value === null){
    //     return 'null';
        
    // } else if(value instanceof Date){
    //     return 'date'; 
        
    // //else use typeof operator to output the correct string minus the uniques cases.         
    // } else {
    //     return typeof value; 
    // }

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
