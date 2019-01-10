//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //intialize  an empty array to contain the values of the object
    const values = [];

    //use a for in-loop to cycle thruough the values in the object
    for(let key in object){
         if(typeof object[key] === 'string'){
    
        //push the values into the array
            values.push(object[key]);             
         }
    }
    //return the completed array with the object's values. 
    return values; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //intiialize an empty array to contain the keys of the object
    const keys = []; 
    
    //use a for in-loop to cycle through the keys in the object
    for(let key in object){
            // push the keys into the array
            keys.push(key);
    
    }
      //use .join method to convert the array into a string and have it sepearated by a space.
     const stringOfKeys = keys.join(" ");

    //return the string
    return stringOfKeys; 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //call objectValues to get an array of values
    const stringOfValues = objectValues(object);
    

    //use .join method to convert array to the string, and have it separated by a space.
    //return a string    
    return stringOfValues.join(" ");
       
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
// return a ternary with Array.isArray as condtional statement. 
 return Array.isArray(collection) ? "array" : "object";
 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    //should take a word and take the first character of the word
    //isolate the first character from the string and use string method .toUpperCase()
     const firstChar = string.slice(0,1).toUpperCase();

    const restOfWord = string.slice(1);    
 //join first char with the rest of the string
    return firstChar + restOfWord; 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //use capitalizeAllWords in the solution
    //use split method to separate string into an array of strings
    let capStrings = string.split(" "); 
    
    //run a for loop and call function CapitalizeWord on each element in the array
    for(let i = 0; i < capStrings.length; i++){
        
        capStrings[i] = capitalizeWord(capStrings[i]);
     
    }
    //return string with .join method. 
    return capStrings.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
 //use capitalizeword in the name, need to access name property in object.
 let name = object.name; 
 
 return "Welcome " + capitalizeWord(name) + "!";
 //return value is a string, callback function CapitalizeWord on object.name property
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //use capitalizeword in name and species, access name and species property in object
    let name = object.name;
    let species = object.species;
    //return value as a string, use callback function CapitalizeWord properties
   return capitalizeWord(name) + " is a " + capitalizeWord(species); 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

//use .hasOwnProperty object method on the object to see if it has a noise property
if(object.hasOwnProperty('noises')){
    
    //if the object has a noises array return them as a string separated by a space
    //use callback function valuesToString for the noise array and set it to a variable stringOfNoises
    const stringOfNoises = valuesToString(object.noises); 

    //second condition if noises array has NO length property, if not return string 'there are no noises' 
    if(object.noises.length){
        return stringOfNoises; 
    } else {
        return "there are no noises"; 
    }
//if there are no noise array return a string 'there are no noises'
} else {
    return "there are no noises";
}
     
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//the return is a boolean
//must convert string to an array of strings
const checkWords = string.split(" ");

//use for-loop to cycle through the array of strings and
for(let i = 0; i < checkWords.length; i++){

    // use a conditional to see if a word is equal to the string  element within the array. 
    if(checkWords[i] === word){
        return true; 
    } 
  }
//if the loop completes, return false; 
 return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// Should take a name and an object and add the name to the object's friends array then return the object 

// need to access the friends array within the object.
// need to push the name into the friends array

 object.friends.push(name); 

//return value is the object
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a friend of <object> and false otherwise 
    //curveball! must check to see if there is a friends array contained in an object, using Object.hasOwnProperty if true, run code, if not return false.

//use hasWord within the solution
if(object.hasOwnProperty('friends')){
//access object's key/value friends and join into a string, the purpose, to be able to use previous function hasWord
let checkFriends = object.friends.join(" ");

//since hasWord returns a boolean, return value will be ternary with callback function hasWord as ternary's conditional statement
return hasWord(checkFriends, name) ? true: false; 

} else {
    return false; 
}
  }
  
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//  Should take a name and a list of people, and return a list of all the names that <name> is not friends with
//will use isFriend in solution

//declare an empty array to collect names that are not on the friend's list
const notFriends = []; 

//use a for-in loop to access the key values (data) within the array.
//array[key] accesses the object
  for(let key in array){
      
//if callback function 'isFriend' using the given name and data returns false, and the name isn't the same as the name on the object
      if(!isFriend(name, array[key]) && name !== array[key].name){
          
        //push the name that didn't pass into the array. 
       notFriends.push(array[key].name); 
      }

     }

//return values is the list of friends that did not pass test.
console.log(notFriends, 'are they not friends?');
return notFriends; 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

object[key] = value;
// if(object.hasOwnProperty(key)){
//     object[key] = value; 
// } else {
//     object[key] = value; 
// }
// meh.
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array> 
//use hasWord in solution
//convert keys within the oject to string. Use keysToString(object), set it to a variable
const stringOfKeys = keysToString(object); 

console.log('stringOfKeys= ', stringOfKeys, 'object b4 loop= ', object); 
//run a for-loop and use hasWord with an element of the array, and the keytoString function outcome as arguments
 
for(let i = 0; i <= array.length; i++){
    
    //initialize a new variable 'key' for readability. 
    let thaKey = array[i];
    console.log('this is the key in the array', thaKey);
    
    //if true(return value of hasWord is a boolean)

    if(hasWord(stringOfKeys, thaKey)){
        //delete key property in object
        
        delete object[thaKey];
    }
    
   
}

console.log('is the property gone?', object);
return object;   
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//  Should take an array and return an array with all the duplicates removed 
//could I use hasWord in this solution too?
//initialize an empty array to contain orignal values
const oGValues = []; 
//run a for-loop and if the value of the current index and the index next to it are not equal
for(let i = 0; i <= array.length; i++){
    
    //to incorporate hasWord callback function, convert oGValues to a string, to be used as 'string' argument, 
    //with the element withn the array to be used as arguement for 'word'
    //if there is no appearance of the value within the string

    
    let oGValStringTest = oGValues.join(" ");
    if(array[i] !== array[i+1] && !hasWord(oGValStringTest, array[i].toString())){

        //push the element, the oGvalue into the array
        oGValues.push(array[i]);
    }
    
}

  return oGValues;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}