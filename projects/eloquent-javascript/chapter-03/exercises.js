////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(valA, valB) {
  
//used a ternary operator, if valA is greater than valB is the conditional.
//whether it is true or not, return the appropriate value.
return valA > valB ? valB : valA;

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  
  //base case is one and false since one is an odd number. function is meant to return a boolean.     
  if(num === 1){
      
    return false; 
    
//conditional statements are adjusted to take into account whether the number is 
//positive or negative. 

//if the number is positive, substract two from number while recalling function.       
  } else if(num > 0){
      
    return isEven(num - 2);
    
//if the number is negative, add two from number while recalling function.     
  } else if(num < 0){
    return isEven(num + 2); 
    
  
  } else {
    return true; 
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
//split string into an array so it can be analyzed by individual character    
  let checkWord = string.split("");
  
  //intialized charCount variable to keep up count of given character within array
   let charCount = 0; 
   
   //iterate thru array of string characters
  for(let index = 0; index < checkWord.length; index++){
      
     //if the given char is equivalent to char-value within the array
    if(checkWord[index] === char){
    
    //add +1 to count.     
      charCount++; 
    }
  }
  
  //output value will be the accumulated count. 
  return charCount;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  
  return countChars(string,'B');

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
