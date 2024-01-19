//The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "s", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Kishan
Hello Biren
Goodbye Sonu
Goodbye Sandy
Goodbye Shradda
Goodbye Sam
Hello Heck
Hello Pillu
Goodbye Sanjay
Hello Jiya

The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment. */

// Create an array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop through the names and print the corresponding greetings
for (var i = 0; i < names.length; i++) {
    // Check if the name starts with 'J' for a conditional greeting
    if (names[i].charAt(0).toLowerCase() === 'j') {
        console.log("Good Bye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}

  
