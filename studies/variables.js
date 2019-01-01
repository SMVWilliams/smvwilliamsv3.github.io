/*

VARIABLES

0. Definition : Variables are names that one attaches onto data or is used as reference point for data. One can think of them as attachments, 
				binding themselves, to make themselves have more usability within the program. 
				
		The parts of a variable include:
		 the keyword 'var' or the other two ES6 keywords. 'let' and 'const' 
		 the name of the variable : preferred method is to use camelCase.
		 and a semi-colon. (;)
*/
            var myFirstVariable; //  <=== Example 

/*	This variable currently has no value and if logged within the console,
        the value would be 'undefined'. In order to initialize a variable or assign value to it, 
	one would need to use an assignment operator. (=)
*/
	        myFirstVariable = "my First Value"; //	<=== Example
	        console.log(myFirstVariable);    // output will be the string "myFirstValue"
/*
	There are other attributes associated with variables using the 'var'  keyword:
	    i.)   A variable can be assigned to different values or datatypes. 
	    ii.)  A variable can be reassigned to a different value. 
	    iii.) A variable depending on where and with what keyword
      		  used to initialized it, can have Global-Scope and Local-Scope
		      within the program. 

	What does Scope mean in the terms of a variable? 
	The term Scope is in reference to placement and usage within a program. 
	There are three types of Scope:  Global-Scope, Local-Scope, and Block-Scope.
	   i.)   Global-Scope refers to a variable that is declared in the 
	         beginning of the program. It can be referenced at any point within the code.
	   ii.)  Local-Scope variables are declared within code blocks, such as a function.
		     it can be referenced outside of the program but placement 
			 determines at what point the variable is read.
  	   iii.) Block-Scope variables are declared within a small block of code,   
	         such as a loop or if-else statements. They cannot be referenced 
			 or accessed in any other place but within that section of code. 

1. Hoisting : Hoisting specifically refers to at what point a variable will 
              be read within a line of code. There are two phases within the
			  compiler of a program as it is run.
			  
			  The first phase, reads the declarations of the variables first,
			  then the initialization of the variables. When a variable is "hoisted to the top
			  of the scope" it specifically referring towards the declaration of
			  variable, then the assignment of a value. 
			  
			  There is an order of priority of which is to be hoisted first.
			  1.)function declaration
			  2.)variable declarations
			  3.)variable declarations that are within the local and block scope of a program.

			  
2. Variable keyword Types :   /i lets i/ and /i const. i/

		let is the keyword to declare a variable that can be local or block-scoped within a program. 
		    They can be initialized and/or reassigned to any value. They differ from the var keyword
			by not being NOT hoisted to the top, they are only read within the point they are declared.
			'let' as a keyword should be used when you are certain that the value of the variable will
			be reassigned to a different value, for instance, the index within a loop. 
		
		example of let keyword variable ===> 
*/
		let myPetsName = "Mojo";
		    if(myPetsName === "Mojo"){
			let myPetsName = "Cosmo";   //<=== conditional statement will reassign variable petDogName to different value. 
			console.log(myPetsName);  //<=== console.log will output the new assignment value of petDogName. ("Cosmo")  
		    } else; 

		 console.log(myPetsName);     //<=== console.log will output the initial value of petDogName. ("Mojo")
			
			 
/*
		const is the keyword used to declare a variable that will have a static value(cannot be reassigned). 
		      The const variable MUST be initialized at declaration. const keyword variables are also block-scoped
		      and similar to let keyword variables, cannot be 'hoisted to the top' of a block of code after declaration.
			  'const' as a keyword should be used when you are certain that the value will not change. It is meant to 'lock-in'
			  a value towards a binding to be used within the program. 
			  
	    personal note. : I've been reading a lot that one should use 'const' as a default keyword variable to provide security that
	    the variable will not be overwriten, will make certain to do that practice moving forward. 
 
		example of const keyword variable ===>
*/		
		const datNumber = 777;
		
		function playWithNumbers(number){
		   const imaAdd = number + 444;  
		   const imaSubtrt = imaAdd - 666; 
		   const imaMulti = imaSubtrt * 9 ;
		   const imaTotal = imaAdd + imaSubtrt + imaMulti;  //
		   console.log( imaAdd, imaSubtrt, imaMulti, number);
		   return imaTotal; 
		}
		
		console.log(playWithNumbers(datNumber)); //the return value is 6771.
/*		
		if(imaAdd){
		    console.log("this is a value that can be accessed outside of the scope"); 
		} else {							 
		console.log("this value cannot be accesssed outside of the scope");  
		}   // since this value cannot be accessed, it should trigger the second statement. 
*/		
