// Lightning Exercise 
let firstName = 'Gabrielle';
let lastName = 'Schryver';
let age = 33;
let likesTravel = true; 

// Logging using string template literals 
console.log(`My name is ${firstName} ${lastName}. I am ${age}, and it is ${likesTravel} that I like travel. `)

// Full name using String Concatenation 
let fullName = firstName + " " + lastName;
console.log(fullName);

let x = 2;
let y = 4;
let total = x + y;
console.log(total);

/* New Vocab
1. Variable - a little box to store information that you want to reference or modify later 
2. Declare - create a variable 
3. Assign - assigns a value to a variable 
4. String - anything that has a quote around it; can be combined with other values (concatenation - combining a string with another string) or (interpolation
    - combining a string with a variable or expression)
5. Boolean - True/false values - no quotes around these. 
6. Value - Value types - number, symbols, booleans, null, string, and undefined 
*/

// Practice 
// Today's Weather 
let temperature = 48;
let conditions = 'Breezy';
let sunriseTime = '7:11 AM';
let sunsetTime = '5:53 PM'


console.log(temperature, conditions, sunriseTime, sunsetTime);
console.log(`It's currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`);