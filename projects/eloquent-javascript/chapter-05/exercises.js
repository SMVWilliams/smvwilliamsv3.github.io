// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
return array.reduce((flatten,subarray) => {
            return flatten.concat(subarray);
    },[]);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {


for(value; test(value); value = update(value)){
	
   body(value);
  
}
 

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  
for(let i = 0; i < array.length; i++){
  	if(!test(array[i])){
    return false;
    }
  }
return true;

// function everyBang(array, test){
//     return !array.some(element => !test(element)); 
// }

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {

  //to determine the dominant direction of characters, you have to count the amount of characters
  // and from that figure out which script relates to the Scripts data. 
 let charactersInText = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    
    //I altered the script to return the direction property because that is what i specifically need to answer 
    //the question. 
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");

  //console.log(charactersInText,'what is this?');
  
  /*the return of charactersInText is an array of objects that has a count of 
    the amount of characters and the direction property of that particular
    script. The array of objects, may have more than one object, and we should
    determine which piece of text has the highest count, and return the direction property
    of that object */
  
  //we're reducing which array of object has the higher count property
  let textWithDomDir = charactersInText.reduce((textWithDomDir, text) => {
    
    //if one object's count is higher than the other object's count
    if(text.count >= textWithDomDir.count){
      
      //assign the object with the highest count
    	textWithDomDir = text; 
    } 
    return textWithDomDir; 
  });
  
  //console.log(textWithDomDir, 'is this an object?'); 
  //it's janky, but it works. 
  return textWithDomDir.name; 


}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
