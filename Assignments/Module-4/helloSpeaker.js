// STEP 2: Wrap the entire contents of helloSpeaker.js inside of an IIFE
// See Lecture 52, part 2


(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);