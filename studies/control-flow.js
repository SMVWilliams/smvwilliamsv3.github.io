// CONTROL FLOW

//     Control Flow is the process of directing statements executed within
// the program. These are done with conditional statements that
// provide a boolean value to determine which code block to execute.

// Truthy vs. Falsey

//     Some types of data have an inherent boolean value defined by the presence
// (truthiness) or absence (falsiness) of value. 

// Types of data that are inherently falsey
//     - An empty string : ""
//     - NaN - Not a number
//     - 0 - the number zero. 
//     - null 
//     - undefined
//     - the boolean value false

// In the case of determining whether a condition is true or false, a simpler way is that one could 
// let the datatype BE the conditional as opposed to writing a complete statement. 

 for(let boundary = 10; boundary >= 0; boundary--){
	if(boundary){
	console.log( "If I know the boundary has a value of ", boundary, "and is  inherently true, I COULD write a condition, or I could wait till it becomes zero");
 } else {
	console.log("And since Zero is falsey, I know that the condition will be false and go to the next condition.");
    }
 }
 

// Conditional statements are used to control the flow of the program and are comprised of
// several types. 

// 1. If statements - If statements are always the initial condition to evaluated.
//         If the conditional statement evaluates to true, the program will execute 
//         the code block within the curly braces of the that statement. 
        
    var conditional = false;     
    if(conditional) { 
        console.log('True.');  

// 2. Else If statements - When a conditional statement in the initial 
//     'If' statement evaluates to false. An Else-if statement is used. An else-if 
//     statement provides another conditional to be evaluated.
    
     } else if(conditional === true){
         console.log('This is totally true!');
    
// 3. Else statements - It is important to note that statements are chained 
//     sequentially, and at run-time goes through each statement to perform 
//     one action. The Else statement provides the default case if none of 
//     the other conditional statements evaluate to true. 
    
     } else { 
         console.log('Okay, Not true. *sigh*');
     } // <---- end of statement chain. 
    
// 4. Switch Statements - Switch statements are another form of controlling the 
//     flow of a program. It is arranged by evaluating an expression statement 
//     against a set amount of possible case/values. Each case with incite the
//     execution of that set of code. 
    
	
	let typeValue = '';   // <----- variable set to an empty string;

 
	var type = typeof value; // <----- this is the expression statement 
							 //        that will be evaluated within the switch statement
    
  switch(type){

     // for the first six cases, variable typeValue will be reassigned to the return value of the typeof operator.
     case 'boolean' : 
     case 'function' :
     case 'number' : 
     case 'string' : 
     case 'symbol' :
     case 'undefined' : 
            typeValue = typeof value; 
            break;            //<----- Each case is separated by a breakline. 
							  //		This is to prevent the compiler to go to the 
							  //		next case after it executes a statement.
							  //		Also one can group cases together if
							  //		they have similar statements, in this case
							  //        the statement is to reassign the typeValue variable
							  //        using the  resolved outcome of the typeof operator
							  //        on the given value. 
									
      
	// At the end of the case/values there is also a default case that will
    // be executed if none of the case values match the expression.
      
     //for the default case ('object') I decided to use a multi-chained ternary 
	 //to determine if value is an array, null, date or an object
     //if any case is true. the variable typeValue will be reassigned accordingly.
    
    default :
    
         Array.isArray(type) === true ? typeValue = 'array' : 
         type === null ? typeValue = 'null' : 
         type instanceof Date === true ?  typeValue = 'date' : typeValue = 'object';
    
    }
	
    console.log(typeValue); 
    
//  When is a Switch Statement better to use than an If-Else Statement? 

//      It is better to use a Switch statement versus an If-Else statement if 
// the input values are 'individual cases' or static values. In the case of the 
// above example, the 'typeof' operator has a specific set of outputs. 
// If-Else statements would be better for statements that evaluate to a boolean
// value. In the instance of multiple cases, a switch statement would also
// be preferable above a If-Else statement for readability. 
