// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  return { 
      
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
     
    };

} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
    //from the length api function, we can determine that var contacts the contact list is an array.
    //specifically an array of objects
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //takes a contact object to be added to the contact-list.
        addContact: function(contact){
            return contacts.push(contact); 
            
        },
        
        /* takes a full-name String, like 'Max Gaudin', and returns the contact object if found in the contacts-list, or, 
          undefined if the fullName does not match any contacts in the list.  */
        findContact: function(fullName){
            
            //create a loop to cycle through the contacts
            for(let i = 0; i < contacts.length; i++){
            
            //create a variable that will represent an individual contact to cycle thru
            let contact = contacts[i];
                
            //create a variable that will represent the first and last name of the contact within the contact list. 
            let nameOnList = contact.nameFirst + " " + contact.nameLast; 
                
            //if the parameter fullname is equal to the nameCheck variable
            if (fullName === nameOnList){
                
                //return the contact object
                return contact; 
            }
        
            
            }
        },
        
       /* removeContact(contact): takes a contact object to be removed from 
         the contact-list. */
        removeContact: function (contact){
            //use findContact to match given contact with list of contacts.
            let givenName = contact.nameFirst + " " + contact.nameLast; 
            let cutContact = this.findContact(givenName); 
            
            //create a for-loop and use 'id' property to match the index of the contact to be deleted 
            for(let i = 0; i < contacts.length; i++){
                if(contact.id === cutContact.id){    
            
                // use splice method to remove item from the contacts array.
                    return contacts.splice(i, 1); 
                }

            }
                
        },
            
        
        /* The printAllContactNames() Function should 
          return a String formated with all the full-names of the separated 
          with a line-break */
        printAllContactNames: function(){
        //Make an empty array to contain the names
        
        const listOfNames = [];
        //create a for loop to cycle through the contacts list and collect the names (key props nameFirst and nameLast) into the empty array
        for(let i = 0; i < contacts.length; i++){
            let nameOnList = contacts[i].nameFirst + " " + contacts[i].nameLast; 

            listOfNames.push(nameOnList); 

        }
        //join the names into a long string using the .join array method, including the 'new line break' as a separator. 
        let printListOfNames = listOfNames.join("\n");
        
        //return value is the joined string
        return printListOfNames;
        }

    }; 
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
