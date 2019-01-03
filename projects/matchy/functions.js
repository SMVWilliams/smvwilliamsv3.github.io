/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    
//loop thru animal array and to find individual contact
for(let index = 0; index < animals.length; index++){
//compare individual contact name with given name
//if the name is equal to the given name

if(animals[index].name === name){

//return the animal
    return animals[index];
    }
}
return null; 
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    
//used a call function to search() to find my animal and set the results to a variable   
let foundAnimal = search(animals, name); 

//if the animal exists
if(foundAnimal){
    
    //I used the array method indexOf to find the index of the animal within the array
    let replaceIndex = animals.indexOf(foundAnimal); 
    //use splice to replace the existing animal.
    animals.splice(replaceIndex, 0, replacement); 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){

//use a function call again, and set results to a different variable.
let exiledAnimal = search(animals, name); 

if(exiledAnimal){
let replaceIndex = animals.indexOf(exiledAnimal); 

animals.splice(replaceIndex,1);

    }

}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
   
      //use a conditional statement to see if the input animal has a name and species property with a 
    //length greater than 0
    if(animal['name'].length > 0 && animal['species'].length > 0){
        //if they are both true, run search on the animals array and the input animal name to see if there is a duplicate
        let isItACopy = search(animals, animal.name); 
        
        //if the search evaluates to null, push the new input animal into the array. 
        if(isItACopy === null){
            animals.push(animal); 
        }
        
    } 
    //checks to see if it has a unique name, or that no other animal has that name. 
    //if all of these criteria pass, add the animal to the animals array. 
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
