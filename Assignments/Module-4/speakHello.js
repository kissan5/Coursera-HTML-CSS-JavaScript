// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


(function (window) {
    var speakWordHello = "Hello";
    var speakWordGoodbye = "Goodbye";
  
    var helloSpeaker = function (name) {
      console.log(speakWordHello + " " + name);
    };
  
    var byeSpeaker = function (name) {
      console.log(speakWordGoodbye + " " + name);
    };
  
    window.helloSpeaker = helloSpeaker;
    window.byeSpeaker = byeSpeaker;
  
  })(window);
  