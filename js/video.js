// Do not make any changes to the html unless it is to fix validation errors and/or link to the javaScript.  Do not add any classes or ids.
		// <button  id = "play">Play Video</button>
		// <button  id = "pause">Pause Video</button>
		// <button  id = "slower">Slow Down</button>
		// <button  id = "faster">Speed Up</button>
		// <button  id = "skip">Skip Ahead</button>

var video = document.getElementsByClassName("video");

const play = document.getElementById("play");
const audio = document.getElementById("volume");
const mute = document.getElementById("mute");
const slow_down = document.getElementById("slower");
const speed_up = document.getElementById("faster");

//Page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	document.querySelector("video").autoplay = false;
	document.querySelector("video").loop = false;
});

//Play Button: Play the video and update the volume information.  
play.addEventListener("click", function() {
	video.play = play;

	// if (mute.clicked()) {
	// 	video.mute();
	// }
	//todo: update volume other than mute
	//question- is this correct?
	
});

//Pause Button: Pause the video.
pause.addEventListener("click", function() {
		video.pause = pause;
});

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
slow_down.addEventListener("click", function() {
	let playback_rate = video.playbackRate = 0.9;
	console.log(playback_rate);
});

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
speed_up.addEventListener("click", function() {
	let playback_rate = video.playbackRate = (1/0.9);
	console.log(playback_rate);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
