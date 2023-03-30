// Do not make any changes to the html unless it is to fix validation errors and/or link to the javaScript.  Do not add any classes or ids.
		// <button  id = "play">Play Video</button>
		// <button  id = "pause">Pause Video</button>
		// <button  id = "slower">Slow Down</button>
		// <button  id = "faster">Speed Up</button>
		// <button  id = "skip">Skip Ahead</button>

let video = document.getElementById("player1");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let audio = document.getElementById("volume");
let mute = document.getElementById("mute");
let slow_down = document.getElementById("slower");
let speed_up = document.getElementById("faster");

//Page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log('load listener worked');
	document.querySelector("video").autoplay = false;
	document.querySelector("video").loop = false;
});

//Play Button: Play the video and update the volume information.  
play.addEventListener("click", function() {
	console.log('play button clicked');
	video.play();

	// if (mute.clicked()) {
	// 	video.mute();
	// }
	//todo: update volume other than mute
	//question- is this correct?
	
});

//Pause Button: Pause the video.
pause.addEventListener("click", function() {
	console.log('pause button clicked');
	video.pause();
});

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
slow_down.addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
speed_up.addEventListener("click", function() {
	video.playbackRate *= (1/0.9);
	console.log(video.playbackRate);
});

// Skip Ahead : Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.



