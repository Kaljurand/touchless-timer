
var audioSprite;

// sprite data
var spriteData = {
	audioTimerSet: {
		start: 0,
		length: 0.6
	},
	audioTimerDone: {
		start: 0,
		length: 10
	}
};

// current sprite being played
var currentSprite = {};

// time update handler to ensure we stop when a sprite is complete
var onTimeUpdate = function() {
	if (this.currentTime >= currentSprite.start + currentSprite.length) {
		this.pause();
	}
};

// in mobile Safari, the first time this is called will load the audio.
// Ideally, we'd load the audio file completely before doing this.
var playSprite = function(id) {
	if (spriteData[id] && spriteData[id].length) {
		currentSprite = spriteData[id];
		audioSprite.currentTime = currentSprite.start;
		audioSprite.play();
	}
};

function initAudioSprite(id) {
	audioSprite = document.getElementById(id);
	audioSprite.addEventListener('timeupdate', onTimeUpdate, false);
}
