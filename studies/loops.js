// LOOPS

//     Loops are defined as a construct within that executes a block of 
// code a number of times until a certain set of conditions are met. These are three
// major types of loops each with their own benefits. 

// 1. while-Loop - A while loop has a conditional statement where if it evaluates
//     to true, it will perform a set action. There is also an incrementer WITHIN the
//     loop that manipulates the conditional statement. The inclusion of incrementer/decrementer is VERY 
//     IMPORTANT to include so as not to produce an infinite loop. 
    
//  Example of a while-loop
    let finalCountdown = 10;      //the variable 'theBlock' is intialized at a set value.              
    while(finalCountdown > 0){     //the conditional statement is whether the value of the variable is greater than zero.
        console.log('Its the final countdown!', finalCountdown);  // cue guitar solo, synth and pryo-technics. 
        finalCountdown--;             //inclusion of a decrementor that counts down to 0. 
    }

// 2. For-Loop - A for loop has an initial index or starting point, a conditional
//     statement similar to the while loop, and an incrementer for
//     the index. 
    
    for(let index = 0; index < 10; index++){
        console.log(index); 
    }

// What is the benefit of using a while loop vs. a for loop? One could more than
// likely use both in any circumstance but usually a while loop is used when there 
// is no specific set of times that one would need to perform an action. 
// In contrast to a for loop that does have a specific amount of times that the 
// programmer wishes to execute the loop. A very classic example is when looping 
// through the values of an array. 

//Looping forwards in an array - notice the index, the conditional statement 
//                               and the incrementer. 

    var saturdayLove = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(let index = 0; index < saturdayLove.length; index++){
        console.log( "On, " , saturdayLove[index]); 
    }

//Looping backwards in an array - to reverse the loop, one adjusts the index,
//                          conditional statement and decrementer accordingly. 

    for(let index = saturdayLove.length-1; index >= 0; index--){
         console.log(saturdayLove[index]); 
    }
    

// 3. For-In Loop - For objects, one can loop over the key/value pairs and 
//    access these items using a for-in loop. THe syntax consists of
//    a key and the object
  
  let marvelCharacter = {
      name: "Blink",
      height: "5'5",
      weight: "125 lbs",
	  eyes: "green",
	  hair: "magenta",
      superpowers:"Teleportation Javelins, Portal Teleportion",
	  universe:" Earth-295 Age of Apocalypse",
	  associations: "Sabretooth : surrogate father" 
	  
  };
  
  for(let stats in marvelCharacter){  
      //stats are the keys within the object 'marvelCharacter'
      
      console.log(marvelCharacter[stats]);
  }
  
  //when using a for-in loop, ALWAYS use bracket syntax to denote keys
  // if the key value is a string, use 'quotes' within the bracket syntax.
  //   
  
  console.log(marvelCharacter['name']);  //output is "Blink", note that when
                                    // accessing that particular key/value, 
                                    // the key was place in quotes, since it's
                                    // essentially a string. 
    
   