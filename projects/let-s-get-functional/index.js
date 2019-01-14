// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-smvwilliamsv3');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(customers) {
    //must use filter, output is a number
    
    return _.filter(customers, function(customer){
        return customer.gender === "male";
        // if( person.gender === 'male'){
        //     return true; 
        // }
        
    //return value is a number, returing the lenght of the array
    //which should correspond to the number or customers that are male
    }).length;
     
    
};


var femaleCount = function(customers){
    //find the number of female customers
    //must use reduce, output is a number
    
    //reduce resolves to a single value, that's prime to have it
    // as the return for this function. The seed is zero, and numOfWomen
    // is the accumulated result. 

    return _.reduce(customers, function(numOfWomen, customer, index, customers){
      
     //conditional : if customer.gender property is equal to 'female'
            if(customer.gender === 'female'){
                //add one to the previous result: numOfWomen
                numOfWomen+=1; 
            }  
        //return previous result
        return numOfWomen;       
        
             
    }, 0); 

};

var oldestCustomer = function(customers){
    //need to compare one customer's age to another to see whom is the oldest
//the return value is a string, the name of the oldest customer.

//declare and initialze two variables, one to test which customer has the 
// hightestAge, and the other to contain the customer object
let highestAge = 0;
let oldest; 

//run an .each loop
_.each(customers, function(customer, index, customers){
    
    //if the customer's age property is higher than the prev variable hA, 
    if(customer.age > highestAge){
        
        //reassign highestAge to that object.age
        highestAge = customer.age;
        //reassign the oldest variable to the customer object.
        oldest = customer;
    } 
});

//if this an object, I should be able to access the name property of the 
//object using .notation. 
return oldest.name; 

};

var youngestCustomer = function(customers){
    //the solution to this problem will be similar to the previous problem. 
    
  //just use reduce
let youngOne =  _.reduce(customers, function(youngest, customer, position, customers){
        //youngest is meant to be an object
        //if it is an object i can access the properties inside the object
        //so if I want to compare, it would be with the youngest.age (element in collection/seed) with customer.age
        
        //if the customer prop age is less than the seed/youngest customer prop age
        if(customer.age < youngest.age){
            
            //reassign youngest to the new customer
            youngest = customer;  
        }   
        //return for the next iteration
        return youngest; 
        
 }); 
  //return should be a string, accessing the customer's name property.  
  return youngOne.name;  
};

var averageBalance = function(customers){ 
// i remember the solution to this problem. the issue is trying to remove the 
//comma from the balance since it is a string, 
//so I have to convert the balance to a number, and then take the average 
//balance of all the customers.
//the return value is a number
    
    
//isolate balance values using map in the customer array 
//and convert each element in the array into a number ..edge case..get rid of the comma n stuff
let balances = _.map(customers, function(customer, index, customers){
        return  parseFloat(customer.balance.replace('$',"").replace(',',""));   
    
});

//add them all together and have it divided by the length of the array
 
//declare a variable to accumulate the average for the balances
let average = 0;

//run an each loop running the thru the balances array
_.each(balances, function(balance, index, balances){
    
    //return the aggregate of the balances that are reassigned to the average    
   return average += balances[index]; 
   
});

//return the average divided by the length of the customers array. 
return average / customers.length; 

};

var firstLetterCount = function(customers, letter){
//return value is a number
//the input is an array and a string value that is a acharacter
//isolate the names of the customers from the given array
let firstNamLetters = _.map(customers, function(customer, index, customers){
    
    //return the first character from each name
    return customer.name[0];
    
});

//the array FirstNamLetters should be an array of letters. 
//use filter to see which element in the firstNamLetters match with the given letter
return _.filter(firstNamLetters, function(testLetter){
    
        //conditional if the given letter matches the element in the array
       if(letter.toUpperCase() === testLetter.toUpperCase()){
           return true; 
       }

//return is the length of the array, which should be the number of the cases that match
// given letter. 
}).length;
 
}; 

var friendFirstLetterCount = function(customers, customer, letter){
// the return the value is a number
//one has to access the customer's friends array.
//possibly use firstLetterCount

//ideally i want to use the customer name to access the particular friend's array


//initialze a variable to contain the array that matches the customer's name
let customerFriends; 

//run an .each loop 
_.each(customers, function(client, index, customers){
    
    //if the given customer name matches the element.name prop
    if(customer === client.name){

        //assign the element .friends array to customerFriends
        customerFriends = client.friends; 
    }
});

//use firstLetterCount with the friend's array and the given 
//letter as arguments the return value should be the return value of firstLetterCount

return firstLetterCount(customerFriends, letter); 

}; 
 
var friendsCount = function(customers, name){

let friendsOfThisFriend = _.map(customers, function(customer, index, customers){
    
    //initialze a variable that will be the return, intention is a string, the name of a customer
    let theyAFriend;

    
    let friends = customer.friends; 
    // need to iterate over the friend's list (.each) that woulc be customer.friends
    _.each(friends, function(friend, index, friends){
         //if the given name matches a customer's friend's name
        if(name === friend.name){
            
            //assign the value, the customer's name; 
            theyAFriend = customer.name; 
        }

    });
        //return the customer's name
        return theyAFriend; 
    
});

//friendsOfThisFriend has the appropriate names, but a lot of undefined values...



//return value is the outcome of filter on the friendsOfThisFriend array, after removing the 'undefined' values. 
  return _.filter(friendsOfThisFriend, function(element, index, friendsOfThisFriend){
            if (typeof element === 'string'){
                return element; 
            }
});

};

var topThreeTags = function(customers){
//Find the three most common tags among all customers' associated tags
//need to access the tags in the customer's object
//return value is an array

//isolate each tag array within the customer database using map
const customerTags = _.map(customers, function(customer, index, customers){
   return customer['tags'];  
});

//console.log(customerTags, ' should be an array of sub-arrays');
//concat each sub-array into the major array, using reduce. 

let arrayOfTags = _.reduce(customerTags, function(arrayOfTags, tags, position){

    return arrayOfTags.concat(tags); 
 
});

console.log(arrayOfTags, ' is it an array of tags? did it work? '); 

//create a frequency list using reduce
let tagFreqList = _.reduce(arrayOfTags, function(tagFreqList, tag, position){
       
        if(!tagFreqList[tag]){
            
            tagFreqList[tag] = 1; 
            
        }else{
            tagFreqList[tag] += 1; 
            
        }
    
    return tagFreqList;     
    
}, {});

console.log(tagFreqList,'is it an object of tags with amounts of frequency?'); 

//separate each object into an array with a specified index
let indexedTags = _.map(tagFreqList, function(tag, key, tagFreqList){
    return ; 
});

console.log(indexedTags, 'is it an array of tags objects?');
//sort through array by frequency, the highest to the lowest
//return value is the first three values. 














// //let's isolate a customer, and feed that customer 
// //use .map to separate each customer into an individual index.
// const indexCustomers = _.map(customers, function(customer, index, customers){
//     return customer;  
// });

// //console.log(indexCustomers, 'customer? ', indexCustomers.length); 
// // use .map again to access the tags array within each customer and return 
// // each individual tag into a single array, for each customer

// let customerTags = _.reduce(indexCustomers, function(customerTags, customer, index){

// // _.map(indexCustomers, function(customer, index, indexCustomers){

//     //intialize variable tags to denote that particular property within the customer object
//   let tags = customer['tags'];
  
//   //initialzed a variable to represent an individual tag to return 
//   let aTag; 
  
// //   console.log(tags, 'what is this?', index); 
    
//     //iterate over the tags array, 
//   _.each(tags, function(tag, index, tags){
    
//       console.log(tag, '<--tag', index, 'test is passing');
//     //reassign the element tag with the variable 'aTag';
//       aTag = tag; 
//   }, []);
  
  
//   return aTag; 

    
// });

// console.log(customerTags, 'customerTAgs list?' ); 

//use reduce to create a frequencey tag list
//use filter to figure out the top three greatest values


  


// _.map(customers, function(customer, index, customers){
//     return customer['tags']; 
// });



//console.log(customerTagsFirst, 'its an array of arrays');

// let customerTagsSec;
// //maybe I should concat each array..

};

var genderCount = function(customers){

//must use reduce to create a count list of all the genders in the
//customer list. //solution will be similar to female count
//return value is an object

//isolate the genders in one array..and then tally them up in an object.
// I CAN USE PLUCK!!!! WOOOOOO!!!!  
let genders = _.pluck(customers, 'gender'); 

//return value is the outcome of reduce, which will tally up the different genders 
//into an object list
return _.reduce(genders, function(genderList, gender){
    
        //if there is no appearance of a property(gender)
        if(!genderList[gender]){
            
            //assign a property and have it equal to one
            genderList[gender] = 1; 
            
        //else, if there is an appearance of a property(gender) use reassign additon 
        //operator of one to the list
        }else {
            genderList[gender] += 1; 
        }
    return genderList;
}, {});


};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
