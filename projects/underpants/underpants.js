// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    
    return value; 
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
      //returns the type of the given value as a string, must incorporate the datatypes null, and array
      //create conditional statement that take into account if a value is null or an array 
      if(value === null){
          return 'null';
          
      } else if(Array.isArray(value)){
          return 'array';
          
      } else {
          return typeof value; 
      }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //first objective - determine if given parameters meet the specifications to output the ideal case.
    // ideal case : there's an array and a number and are meant to return the appropriate number of items  in a new array
    //edge cases : if a number is negative, we can presume that it will attempt to access a value that isn't defined/available
    // edge cases2 : if a number is  larger than the array, we can presume that output will be all of the values.
    
    //create a conditional that determines if an array isnt the correct type or if the number given is less than zero.
    if(!Array.isArray(array) || number < 0){
        //if true, return an empty array; 
        return [];
        
    
    //create a conditional that tests if the number given is undefined, or any other type than a number(use typeOF)
    } else if(number === undefined || _.typeOf(number) !== 'number'){
        //if true, return the first element in the array
        return array[0];
    
    //last conditional will be the ideal case.
    } else {

        //intialize an array called firstItems
        const firstItems = [];
        //NEED TO REFORMAT TO USE .EACH WHEN I MAKE .EACH
        //run a for-loop to iterate over the array, the number is the conditional
        _.each(array, function(value, index, array){
            
      //  for(let i = 0; i < number; i++){
            //need to input my stopping condition within my each loop
            if(index < number){
            //push the item into the array
            firstItems.push(array[index]); 
            }    
        
        });
    //return the new array with the firstItems; 
    return firstItems;  
        }
    
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    //solution is similar to first.
    //create a conditional that determines if an array isnt the correct type or if the number given is less than zero.
    if(!Array.isArray(array) || number < 0){
        
        //if true, return an empty array; 
        return [];
        
    //create a conditional that tests if the number given is undefined, or any other type than a number(use typeOF)
    } else if(number === undefined || _.typeOf(number) !== 'number'){
        
        //if true, return the last element in the array
        return array[array.length-1];
        
    //last conditional will be the ideal case.
    } else { 

        //intialize an array called lastItems
        const lastItems = []; 
        
        //need to take into account the starting index depending on the given number
        let index; 
        
        //used a ternary to determine starting index, conditional is whether the given number is greater than the array length
        number > array.length ? index = 0 : index = array.length - number; 
        
        //NEED TO REFORMAT TO USE .EACH WHEN I MAKE .EACH
        //run a for-loop to iterate over the array, the number subtracted from the array.length would be the starting index;
        
        for(index; index < array.length; index++){
            
            //if an item has a value(truthy)
            if(array[index]){
                
                //push the item into the array
                lastItems.push(array[index]); 
            }
        }
        
        //return the new array with the LastItems;
        return lastItems; 
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //create a for loop that will iterate over the array
    for(let index = 0; index < array.length; index++){
        
        //if the given value corresponds to the array's indexed value
        if(array[index] === value){
            
            //return the index
            return index; 
        }
    }
    //if the loop completes return -1, denoting that the given value does not occur within the array
    return -1; 
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //must use a ternary, will use .indexOf as conditional, if the functional call of indexOf returns -1
    //we know that the value isn't within the array so therefore it's false

   return  _.indexOf(array,value) === -1 ? false : true; 
   
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, iterator){
    
    //create a conditional using Array.isArray on the collection to determine if one needs to use a for-loop for an array, or a for-in loop on a object
    if(Array.isArray(collection)){    
        //if true : collection is an array
        
            //run a for-loop 
            for(let index = 0; index < collection.length; index++){
                
                // in each iteration, use the iterator function on each (element, index, collection)
                iterator(collection[index], index, collection); 
                
            }
    } else {
        //if false : collection is an object

            //run a for-in loop
            for(let key in collection){
                
                //in each iteration, use the iterator function on each(value, key, collection)
                iterator(collection[key], key, collection); 
                
            }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    //return value is a new array, must initialize a new array 
    //must use indexOf, and maybe .contains?

    
    const uniqOnes = [];
    
    
   // run an each loop passing in the array 
    _.each(array, function(value, index, array){
        
        //if the callback function _.indexOf with the arguments of uniqOnes and the array[index](the value) === -1 
        if(_.indexOf(uniqOnes, array[index]) === -1){
        
        //push that value into the uniqOnes array
        uniqOnes.push(array[index]);
        }
    });
    return uniqOnes;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test){
    //initialize a new array called passValues; 
    const passValues = []; 
    //cycle through an array using .each
    _.each(array, function(value, index, array){
    //run a test function on each element, index and the array
        let passTest = test(value, index, array); 
        
        //if the test passes
         //push the element into the new array
        passTest ? passValues.push(value) : false;

    });
    //return the new array
    return passValues; 
};




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test){
    
   // debugger; 
    //.reject is essentially a reversal of filter
    
    return _.filter(array, function(value, index, array){
        
        //if the outcome of the test value is equal to false
        if(test(value, index, array) === false){
            
            
         return true;  
        }
        
    }); 
    
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test){
    //intialize one variable to represent the passed values, intialize another to represent non-passed values
    const truthys = _.filter(array, test); 
    const rejects = _.reject(array, test); 
    

    //return statement is the two variables set within an array.
    return [truthys, rejects]; 
    
}; 


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, action){
    //since .each already incorporates whether a collection is an object or an array, I should be able to call each
    //and focus on the return value as the .each iterates. 
    
    //initialize a new array, mappedValues
    const mappedValues = []; 
    
    _.each(collection, function(element, index, collection){
        
      //within the .each iteration, push the value of the function call action..for each aspect of the collection.        
       mappedValues.push(action(element, index, collection)); 

    });
    // return the completed Mapped array
   return mappedValues;   
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(collection, property){
  //the collection is an array of objects
  //must use .map in the solving of this problem
  //.map iterates over a collection, and performs an action on each element of the array
  //with .pluck, it should return what property matches that value within the collection
  //the return value should be an array with just the key/values of whatever given property
  return _.map(collection, function(value, index, collection){
     
     
     //alternate method idea...I know that the data is essentially an array with an object within each index.
     //i would like to see if one can access the object without using a for-in loop
     //declare and initialize a variable to represent an object within each index of the array
     let object = collection[index]; 
     

     //hypothesis : if the value of the collection at each index is an object, then collection[index] should be equal to an 
     //object, if that is the case, can one use the <object>.hasOwnProperty method to test if a certain property exists? 
     if(object.hasOwnProperty(property)){
         //if method is true, return object[property];
         
         return object[property];
     }
     
     });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection,test){
    //so close! I need to take into account if there is a presense of a function
    
    //if the test parameter is undefined
    if(test === undefined){
        
        //run a for-loop
        for(let index = 0; index < collection.length; index++){
            
            //if value is a falsey value
            if(!collection[index]){
                return false; 
            }
        //if the loop completes we know the collection is true. 
        } return true; 
        
    } else {
        
    //I know i can use each..but can I use .map and to solve this problem?
    //use .map to create a collection of truthty and falsey values
    const testCollection = _.map(collection, function(element, index, collection){
        
        return test(element, index, collection) ? 'true' : 'false'; 
             
    });
    
    //i kinda want to use contains..to test if there is a presense of the string 'false' within the collection, 
    //if there is a 'false' string value it will return false, so therefore the collection will be true...if the collection 
    //has no 'false' string value, we know the collection is true. 
    
    return _.contains(testCollection, 'false') ? false : true; 
    } 
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, test){
   //i know that .some is basically the reversal of every. solution will be similar
    //take into account whether there is a function within the parameters
    if(test === undefined){
        
        //run a for-loop on the collection 
        for(let index = 0; index < collection.length; index++){
            // if one of the elements are true,
            if(collection[index]){
                return true;
            }
        }
    //if the loop completes and no iteration returns true, we know the collection is false
     return false; 
     
     
     //else, put that thing down flip and reverse it 
    } else {
        
    //use .map to create a collection of truthty and falsey values
    const testCollection = _.map(collection, function(element, index, collection){
        
        return test(element, index, collection) ? 'true' : 'false'; 
        
             
    });
    
    //if there is one 'true' string value it will return true, so therefore the collection will be true...if the collection 
    //has all 'false' string value, we know the collection is false. 
    
    return _.contains(testCollection, 'true') ? true : false; 
    }

}; 


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce =  function(collection, accumulator, seed){
    
    //i know that the first thing to account for is whether a seed is present in the parameters
     //will there be two different sets of code ?

    //declare a variable to contain the previousResult
    let previousResult; 
    
     //if the seed isn't present
    //set the seed to the first element within the array.
    if(seed === undefined){
        debugger; 
        previousResult = collection[0]; 
        
    //i think I remember that the collection should start at the second position in the collection (index positon: one)
    const remainCollection = collection.slice(1);
    
     _.each(remainCollection, function(value, index, remainCollection){
         
           previousResult =  accumulator(previousResult, value, index, remainCollection); 
           console.log(previousResult); 
    });
        
    //if the seed is present, 
    } else {
        
        previousResult = seed; 
      _.each(collection, function(element, property, collection){
         
           previousResult =  accumulator(previousResult, element, property, collection); 
           console.log(previousResult); 
    });
    
    }
    
    return previousResult; 
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object, object2, objectProto){
    //I know to use Array.from(arguments) to incorporate the amount of possible objects
    //I also know that I want to invoke _.reduce for the solution for this problem 
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
