// FUNCTIONS   

//   Functions are defined as a set of statements that perform a task or 
//   calculate a value. The function's value is defined by its return statement.
//   If the function does not have a return statement the return value is
//   'undefined.' 
  

// The Two phases of creating functions.
//     i.) declaration and defining the function.
//          to declare or create a function one would first start with using
//          the keyword, function.
    function doAnAddThing(paramA, paramB) {  // <==== this function takes two
                                //       parameters as an argument.
        console.log(paramA + paramB);  // the function body includes code that
                                //        performs an action using
                                //        those parameters.
        return paramA + paramB; 
    };
        
    // ii.) invocation and/or calling the function within the program. 
    //      to call or invoke a function one would need to simply type out the
    //      functions name and pass 'arguments' 
    //      within the function's parameters.
    
    doAnAddThing(4 , 5);  //  <==== output is '9';
    
    
    

// Parameters vs. Arguments. 
//     The difference between parameters and arguments is context, parameters are 
//     datatypes that will be manipulated in the defining of the function. 
//     Arguments are datatypes that are subbed within 
//     the invoking of the function. 

     function combineExample(paramA, paramB){  // <=== Example of Parameters
            return paramA + paramB;
        }
        
    combineExample('Arguments are passed here',' when the function is invoked.');
    
// Named functions vs. Anonymous functions.
//     Functions do not have to be named when being defined. An anonymous 
//     function is a function that does not have a name. 
//     However in order to invoke an anonymous function 
//     one must set it to a variable. 

function returnString(string){
    console.log(string);          // This is an example of initializing and 
    return string;                 // creating a named Function. 
}

returnString('Good Afternoon!');  // to invoke, one would use the name and pass
                                  // into the arguments. The output of this 
                                  // example would be the console.log of the 
                                  // string in addition to returning the string. 
                                  
let isItWorthIt = function(string){
    let meWorkIt = string.split("").reverse().join(""); 
    console.log(meWorkIt);     // In contrast, for the creation of an
    return meWorkIt;           //  anonymous function, the return value is set
                               //  to a variable. 
};

isItWorthIt("I put my thang down, flip it and reverse it"); 
				
				/* to invoke this anonymous function, one would
				  use the set variable name and pass within the 
				  appropriate arguments. This particular 
                 invocation would be referred as a functional expression. */
                                
                           
                                
    
/* Assigning a function to a variable. 
       Since all functions are basically expressions, meaning that 
       they all return a value, you can set a function's return value
       to a variable.
       The variable becomes the container for the output of the function. 

      This example below shows an example of invoking a function and setting the
      outcome of the function to a variable.  */
        let bizzaroWorld = isItWorthIt("Sonya"); 
        
        console.log(bizzaroWorld);    // output is "aynoS".
        
/* Functional Expressions vs. Functional Declarations.

     Functional Expressions are usually preferable to Functional Declarations due to the JS interpreter's 
    priorty in hoisting since  Functional Declarations are read first.  Using Functional expressions gives 
    the programmer code more control with creating functions, much in the same way that let and const offer more control
    with variables. 



/* Functions can Optionally take input, and optionally
     return a single value. How do we specify inputs,
     and how do we specify outputs?   Inputs are specified by the parameters 
     passed within the function. Outputs are specified through the return 
     statement at the end of the function. 


   Scope within a function. Global/Parent-scope vs. Local Scope. 
      A function must be defined within the scope from where you wish 
      to invoke it. In terms of scope within a function, an 
      inner-function will have access to the variables within the larger scope,
      however the inverse does not apply.
                                                               */

    var outerScopeVariable = 6; //This variable is declared and initialized
                                // as a global variable. 
                                
    
    let combineExampleThree = function(paramA){  //This function takes one
        let innerScopeVariable = 3;             // outside paramater, and defines
                                               // one variable within the function.
                                               
                                               
        return paramA + innerScopeVariable; //The return value combines the 
                                            // two values. 
    }; 
     
     let result = combineExampleThree(outerScopeVariable);
        console.log('the result = ' + result);   // THe result is 9. 
        
    /* Scope is in reference to access, when logging the two variables, the
      Outer-scope variable was able to be logged since it was defined and 
      initialized outside of the function. */  
    
    console.log("The outerScope Variable = " + outerScopeVariable); 
    
    /* In contrast the Inner-scope cannot be logged from outside the function.
       Attempting to log the innerScope variable will create an error. */ 
    
   // console.log("The innerScope Variable = " + innerScopeVariable); 

/* Closures within a function. 
     Closures are defined as the ability for an inner function to have 
    access to the scope within the outer function even after function is returned. . 

   This following example is a demonstration of a simple closure. */
 
function combineExampleFinal(paramA, paramB){
    
//The outer function combines two paramaters into a single summation. 
//Output is 8.

    let combineOne = paramA + paramB; 
console.log("This is the first sum using the first two parameters: ", combineOne);
    
//The inner function, combineTwo, is a closure. It accesses the outer variable,
// 'combineOne' and uses that variable to perform a second summation. 

function combineTwo(){
        let combinedResults = [combineOne + paramA, combineOne + paramB];
        return combinedResults[0] + combinedResults[1]; 
            }
console.log("This is a second summation, combining the first summation with the first and second parameter " + combineTwo()); 
// The final return value of the function returns a cumulative summation of 
// the combined results.
//Output is 24. 
  return combineTwo(); 
}
console.log(combineExampleFinal(3, 5));


// ES6 Syntax: Arrow Functions. 
//    Arrow Functions are essentially a more concise way to create
//    and initialize functions.

//    Basic Syntax: An arrow function syntax is similar to a functional 
//      expression. 

    var sumArrowFunc = (paramA, paramB) => { return paramA + paramB };  
    
    // The parameters are included within the parenthesis, this is followed 
    // by an arrow ( => ) that points to the function's body, or return 
    // statement in this case.  
    
    //Invocation is the same when invoking an functional expression. 
    console.log(sumArrowFunc(3, 5));  //Output is 8. 


    