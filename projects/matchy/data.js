/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; 
animal.species = 'fox';
animal['name'] = "Fox McCloud";
animal.noises = []; 

console.log(animal); 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

noises = [];
noises[0] = "Wah-Pa-Pa-Pa-Pow!";
noises.push("Joff-tchoff-tchoff-tchoff-tah-tchoff!");
noises.unshift("Ah-woooo!");
noises[noises.length] = "Hatee-hatee-hatee-ho!";
 
console.log(noises.length, noises[noises.length], noises); 


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises; 
//add another noise on the animal.noises property; 
animal.noises.push("Fraka-ka-ka-ka-kow!");
console.log(animal); 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal); 
console.log(animals); 

var duck = { 
    
    species: 'duck',
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
    
    };
    
animals.push(duck); 
console.log(animals); 

var rabbit = {
    
    species: 'hare',
    name: "Peppy O'Hare",
    noises: ['sniff', 'pause', 'do-the-bunny-hop!']
    
};

var frog = {
    species : 'frog',
    name: "Slippy Toad",
    noises: ['ribbit', 'croak']
}; 

animals.push(frog, rabbit);

console.log(animals); 

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// The data structure I choose to use is an array due to ease of finding an individual contact. 
friends = [];

function getRandom(array){
    
    return Math.floor(Math.random() * array.length); 
}

var index = getRandom(animals); 

var randoAnimal = animals[index]; 

friends.push(randoAnimal.name); 

console.log(friends); 

animal.friends = friends;

console.log(animal); 



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
