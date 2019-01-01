/*
 OPERATORS:
	
	Operators are code symbols/characters that act on data. They are used to create expressions and statements of code.     
	There are various categories of Operators but all of them require an operand, a value or variable of a value. 
	
	Operators can be unary (requiring only one operand), binary (requiring two) or ternary (using three operands). 
	Here are a description of different categories of operators and their definition. 

 15. Assignment Operators:
	takes the left operand(usually a variable) and designates its value to the right operand. 
*/
/*	  =     //  assignment, assigns a value between two operands. 
	  +=    //  addition assignment, adds the value of the left operand to the right operand and then assigns the result. 
		//  this assignment can be used to concatenate a string with another string or another primitive datatype. 

  	  -=    //  subtraction assignment, subtracts the value of the left operand to the right operand and assigns the result. 
	  *=    //  multiplication assignment, multiplies the value of the left operand to the right operand and assigns the result. 
	  /=    /// division assignment, divides the value of the left operand to the right and assigns its result. 
	  %=    //  modulo assignment,  divides the value of the left operand to the right and assigns the Remainder to the result. 
/*
 16. Arithmetic Operators:  
	takes numerical values or variables representing numerical values as their operands
        and returns a single numerical value. 
*/
/*	 +  // addition, this assignment can be used to concatenate a string with another string or another primitive data-type.
	 -  // subtraction
	 *  // multiplication
	 /  /// division 
	 %  // modulo or Remainder from division
/*	
	when used to create arithmetic expressions, the order of operations applies, including parentheses.
*/
/*	**  // exponentiation, used to create exponents between two operands. 
	++  // incremental operator, used to increase an operand by one. 
	--  // decremental operator, used to decrease an operand by one. 
	
	//One can manipulate by how much by changing the second operator character. 
/*
	
 17. Comparison Operators: 
	compares two or more operands. The result is a boolean value.(true or false) 
*/	
/*	 >     // greater than
	 <     // less than
	 >=    // greater than or equals to
	 <=    // less than or equal to

	===    // strict comparison
	==     // non-strict comparison
/*	 
	What is the difference between strict and non-strict comparison? **
	Strict comparison is used to ensure that both the value and type of data equal each other.
		              

 18. Logical Operators: 
	compares two or more conditional statements, to determine if a statement is true or false.
*/	
/*        &&    // 'And' logical operator, this operator designates that both conditional statements must be true. 
        ||    //  'Or' logical operator, this operator designates that only one conditional statement must be true.
        
/*
 19. Other Operators: 
*/	  
/*	!     //  'Not' or bang operator, this operator can be used to reverse the boolean value of an expression/statement. 
        	// so !true would be the boolean value equivalent to false. 
	
	-     // unary negation arithmetic operator. It is similar to a bang operator in which it would flip the value 
	              // of a number between positive and negative. so  x = 3; -x = -3; ||  x = -3; -x = 3;
*/
//	typeof    // a unary operator, that outputs a string describing the appropriate data-type. 

		let question = false;
			console.log(typeof question); // returns the string "boolean"
		
		let  animal = "Octopus";
			console.log(typeof animal); // returns the string "string" 
		
		let  theAnswer = 42; 
			console.log(typeof theAnswer);  // returns the string "number"

		
/*  
 20. Ternary Operators: (a ? b : c): an operator that has uses three operands,
           the first being a conditional statement (a) followed by two expressions that can posses any value. 
           One can use an ternary operator in the place of an if-else statement. 
           One can also use an ternary operator as a return statement within a function that would require an if-else statement. 
    
    
*/
