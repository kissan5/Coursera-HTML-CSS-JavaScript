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

(function () {
    var names = ["Kishan", "Biren", "Sonu", "Sandy", "Shradda", "Sam", "Heck", "Pillu", "Sanjay", "Jiya"];
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 's') {
        byeSpeaker(names[i]);
      } else {
        helloSpeaker(names[i]);
      }
    }
  })();
  
