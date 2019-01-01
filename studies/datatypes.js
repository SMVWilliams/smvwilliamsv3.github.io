/*
DATATYPES: 

These are the different datatypes that can be contained within a variable.
 
    Simple DataTypes : Variables can hold up to 8 bytes of data. 
      Simple or primitive type variables are assigned to a variable name 
      and stored within that variable 'label'. Primitive/Simple datatypes are 
	  immutable which mean the values are not able to be changed, however you can enact 
       on the data using an operator or you can assign or reassign a value with a different 
	   label. This is referred to as "copy by value." 

	These are the different types of simple datatypes. 
	
    1.  Number : Numeric Data ( Integer, Whole Numbers,
        Negative Numbers, Decimals, Remainders, Arithmetic expressions ).
*/       
	let issANumber = 5;           	//Whole Numbers
	
	let issANumberToo = -3;       	//Integers and Negatives; 
	
	let issaMathProblem = 5 + 3;  	// Arithmetic Expressions
	console.log(issaMathProblem); 	// output will be 8. 
	
	let awwSnapIssADeciButStillANum = 8.15;    //Decimals 
	

/*
    2.  String : Character Data ( A line of characters enclosed 
       in either single ('') or double quotes ("")). 
 */
	let issaQuote = "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett";
	console.log(issaQuote); // output the above sentence. 
/*
   3.  Boolean : A datatype whose value is ethier true or false,
       Uses only one bit of data!  
*/
     let isDissABoolean = true; 
     console.log(isDissABoolean);  //output:  true. 
/*
   4.  undefined : a datatype that has not been assigned a value, 
       if a variable has been created but not assigned a value,
       it will be read as "undefined". 
*/

    let nuVariableWhoDis; 
    console.log(nuVariableWhoDis);  //output: undefined. 
     
/*     

   5.  null : a datatype that intentionally has not been assigned value, 
       there seems to be no real difference between 
       the values of null or 'undefined' however it appears
       that if there is a conditional statement that a programmer 
       needs to set to a non-value, they would use null as the assigned value.
*/
     nuVariableWhoDis = null; 
     if(nuVariableWhoDis === null){
     	console.log('BRUH.'); 
     } 

/*
   6.  NaN : refers to 'Not a Number'. This datatype is unique 
      in that it can be used in a comparative fashion as a conditional
      statement. 
*/
	
/*
   Complex DataTypes :  Since Variables can hold up to 8 bytes of data,
    anything beyond will be affixed to memory and referenced within the 
    program's memory. 
    
    Complex datatypes are larger collections of primitive 
    data. There are three major complex datatypes. Arrays, Objects and 
    Functions. Both Arrays and Objects are datatypes that hold different
    types of primitive data, and within the program the data is accessed
	via the position within the collection. 
	
	This is referred to how Complex DataTypes are "copied by reference".  


   7.  Array : An array is a complex datatype that collects data within a list
   that begins with an index of zero. It uses square brackets.
		
		i.) How to initialize an array. 
*/			var array = [];    // <=== This initializes an empty array. 
                               //      It is an open index.

/*		 Arrays can hold any various types of primitive data. 
         It can hold other complex datatypes.(Arrays and Objects)
         and even functions. This is possible because this isn't
         technically a container, but a reference list to point 
         where the data is located. 
		
		ii.) How to reference items within an array. 
*/			var arrayTest = ["ZAP!", true, 8];  //<=== This array possess
                    //              three items, but the index starts at 0 - 2. 
 		 
        	console.log(arrayTest[1]);//<=== To reference an item,
        	
    	//one would first use the array name and the indice within
    	//square brackets to find that value. This is called bracket notation.  
   
/*		iii.) An array indexed value can be reassigned, one can also add, 
        delete, shift values within an array using various JS array methods.

		iv.)  A brief list of Array properties and Methods that have been used 
		thus far. (will add on and update on usage). **
		
			PROPERTIES

			 arrayName.length - property that expresses the amount of 
			                     indices within a array.
			 
			 Array.isArray(arrayName) - property that returns a boolean value
			                        determining whether a datatype is an array. 
	
			METHODS 
			
			arrayName.pop() - method that removes the last element of an array
			                  and returns that element. 
			
			arrayName.push() - method that adds one or more elements 
			                   to the end of the array. 
			
			arrayName.unshift() - method that adds one or more elements to
			          the front of an array, and returns the array's new length. 
			
			arrayName.shift() - method that removes the first element within
			                    the array and returns that element. 
			
			arrayName.reverse() - method that changes the order of elements 
			            within an array. array[0] becomes the last element, etc.  
			
			arrayName.toString() - method that turns the elements within an 
			           array into a string separating each element with a comma.  
			
			arrayName.splice()- method that specifically can remove or 
			           add elements within an array. (start index, num of 
			      elements to be added/removed, element to be added/replaced)
			
			arrayName.slice() -  method returns a modified array that contains
			                     elements of the original array, must specify 
			                 start and end index. DOES NOT HAVE SIDE EFFECTS.
			
			arrayName.sort() - method that changes the order of elements within
			                an array by alphabetizing or base numerical order.
			
			arrayName.indexOf() - method returns the index of a the first 
			            occurrence of a particular element within an array, 
			            or -1 if element is not present. 

   8. Object : An object is a complex datatype that collects
                data of key/value pairs within a list. It uses curly brackets.
		
		i.) How to initialize an object. 
		*/
		 var objPerson = {};     // <=== This initializes an empty object. 
	
/*	
		Objects are different from arrays in that they are NOT indexed, 
		they are organized via key/value pairs. 
		In which the 'key' portion is the property of the 'value' portion.
		 
*/
			var objName = {
				name: "Sonya",//<=== 'name' is the key property
				      //and "Sonya" is the value of the name property 'name'
				        
				age: "37", //<=== syntax distinctions. when assigning a property
			//value use the (:) and separate with a comma (,) after each pair
				
				status: "she chill" //<=== the exception is the
				                        //last key/value pair. 
				};

/*	        ii.) How to reference items within an object. 

			To reference an item within an object one must need the object's
			name and its property value. One can use bracket notation 
			or dot notation. One can also assign the value of the property
			or key within a new initialized variable. 
*/			
	var myName = objName['name'];   //<=== this is an example of bracket notation. 
	var myStatus = objName.status;  //<=== this is an example of dot notation. 
			
	console.log(myName + "," + myStatus + "."); //<=== this should output
	                                         //the string. "Sonya, she chill." 

/*		iii.) Like arrays, data within an object can also be easily reassigned,
        deleted, and added towards the object. There are also JS Object Methods. 
		
		iv.) A brief list of Object properties and and Methods used thus far. 
		(will add on and update on usage.) **
			
	PROPERTIES
			
	objVariableName.constructor - used to create new key/values within objects.
			
	METHODS
 
	Object.values - method returns all values within an object as an array. 
	
	Object.keys - method returns all key properties within an object as an array.
	
	objVariableName.hasOwnProperty() - method returns a boolean value to 
	                    determine if a object possesses a property within.
	                    
	objVariableName.toString() - method returns a string representation of an object's key/values.

			
   9. Function : a block of code, designed to perform an action,
                or to output a value. Functions can be referenced 
                and they can hold/return values.
                
/*
   10. Infinity and -Infinity: a global property that is a numeric value 
representing infinity and negative infinity.  <--- when is an appropriate time to use this? Math? 

*/


