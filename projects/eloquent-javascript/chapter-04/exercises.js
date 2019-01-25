////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  
	const rangeArray = []; 

	/*if the variable step isn't given let it be an increment/decrement of 1/-1
      depending on whether the start point is lesser or greater than the end point */
  
  	if(step === undefined && start < end){
  	      step = 1; 
    }else if(step === undefined && start > end) {
          step = -1;
    }
  	//the default should be the given parameter number
     console.log(step, 'step');
  
  //if the range start point and endpoint equal each other, return the empty array
  if(start === end || step < 0){
    
    return rangeArray; 
    
  }else if(start < end){
    
    for(let num = start; num <= end; num += step){
      rangeArray.push(num);
    }
  
    // //this conditional should incorporate step varaible assigned to a negative number
    // }else if(start > end && step < 0){
    //   for (let num = start; num >= end; num += step){
    //       rangeArray.push(num); 
    // }
    
  //this conditional makes accomodations if the step isn't a negative number  
  } else {
    for (let num = start; num >= end; num -= step){
      rangeArray.push(num); 
    }
  }
 
  console.log(rangeArray);
  return rangeArray; 


}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
   let total = 0; 
  for (let num of array){
    total += num; 
  }
  return total; 

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  const oldArray = array.slice(0); 
  const newArray = []; 
  
  for(let i = 0; i < oldArray.length; i++){
    newArray.unshift(oldArray[i]);
  }
  return newArray; 

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
   for(let i = 0; i < Math.floor((array.length) / 2); i++){
   let placeHolder = array[i];
    console.log (placeHolder); 
    array[i] = array[(array.length -1) - i];
   array[(array.length - 1) - i] = placeHolder; 

    console.log(array); 
    }
  console.log(array); 
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){
  	//intialized a variable for list, set the list to null, this is begin/end of list
  	let list = null;   	
  
  //iterate over each value in array backwards
	for(let i = array.length-1; i >= 0; i--){
    	
      /* within each iteration resassign list to write two properties 
      to the list object, the value which is the element of the array 
      at that index, and rest which contains the original item on the list. */
       
      list = {
          
          value : array[i],
          rest : list
          
        };
    }
  		//return list;
        return list; 
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list){
   
  //intialize a new array to contain the items on the list's values.
 	let arrayFromList = []; 
   
   /*iterate over the list object using a for-in loop, 
   the item is the starting point(which is set to the object), 
   the end-point for the object list is null which is why it is the stopping
   condition in the for loop, the item is then reassign to reference point .rest,
   which would be the next item on the list. */
  
   for(let item = list; item; item = item.rest){
     //within each iteration, push the property value, on the list into the array
   	arrayFromList.push(item.value); 
   }
   
   //return the new array.
   return arrayFromList; 
 }

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list){

  //intialize a new object, item, that assigns given value to the value property
  //and given list as the rest property
  let  item =  {
      		value : value,
      		rest : list
    			};
    
  //return item
   return item; 
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num){
  //this function is meant to be solved recursively
  /*base case is if the function gets to the end of the list, which is null, 
     it will return undefined */
	if(list === null){
    	return undefined; 
    	
    	
    }else if(num === 0){
    	return list.value;  
    	
    } else{
    	return nth(list.rest, num - 1); 
    }
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(valueA, valueB){
  //get ready for a whole lot of conditionals!
  
  //if the two values are equal, the are true
  if(valueA === valueB){
	return true; 
  
  /*if any of the values are null, or if the typeof operator determines any 
    value isnt an object, they are false */
}else if(valueA === null || valueB === null 
        || typeof valueA !== 'object' || typeof valueB !== 'object'){
	  return false; 
  
  //if both values are objects, deepComparison time!
}else if(typeof valueA === 'object' && typeof valueB === 'object'){

    //invoke Object.keys on both objects to return an array of keys 
	const valAKeys = Object.keys(valueA), valBKeys = Object.keys(valueB);
   
  //since there is no object.values, i made a helper function.
  const subObjectValues = (object) => {
    const values = [];

    for(let key in object){
           values.push(object[key]);             
         }
    return values;
    };

  
   
    //invoke subObject.values on both objects to return an array of values; 
  	const valAValues = subObjectValues(valueA), valBValues = subObjectValues(valueB); 

	//if the length of the arrays for both object do not match,they are false
  	if(valAKeys.length !== valBKeys.length){
    	return false; 
      
    /*however if the lengths of the arrays do match, iterate over one object
    using a for-in loop,comparing one object's keys to the other object's key, 
      utilzing the same index. Also do a recursive deepEqual comparing the values
      of each object, which i'm also doing with the valA/valB values array, utilizing 
      the same index */
      
    }else if(valAKeys.length === valBKeys.length){
    	for( let i = 0; i <= valAKeys.length; i++){

          if(valAKeys[i] !== valBKeys[i] || !deepEqual(valAValues[i], valBValues[i])){
          		return false; 
          }
        }
    } 
} 
  return true; 

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
