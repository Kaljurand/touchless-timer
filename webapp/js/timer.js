var Clock = new (function() {

	// Time values are in milliseconds
	var incrementTime = 1000; // show time once in a second
	var remainingTime = 0;

	// Callbacks
	var fOnTimerUpdate;
	var fOnTimerDone;

	$(function() {
		Clock.Timer = $.timer(updateTimer, incrementTime, false);
	});

	// We use localStorage (instead of sessionStorage),
	// so that the user would not
	// lose the timer state when pressing BACK on mobile.
	function fetchEndTime() {
		return localStorage['endTime'];
	}

	function storeEndTime(endTime) {
		localStorage['endTime'] = endTime;
	}

	function updateTimer() {
		var endTime = fetchEndTime();
		// If endTime == null then timer has completed or never set
		if (endTime == null) {
			Clock.Timer.stop().once();
			return;
		}
		remainingTime = endTime - Date.now();

		if (remainingTime < 0) {
			remainingTime = 0;
		}

		// If timer is complete, trigger alert
		if (remainingTime == 0) {
			Clock.Timer.stop();
			storeEndTime(null);
			fOnTimerDone();
		} else {
			fOnTimerUpdate(formatTime(remainingTime));
		}
	}

	this.resetCountdown = function(timeInMinutes) {
		var timeInMillis = timeInMinutes * 60 * 1000;
		if (timeInMillis > 0) {
			storeEndTime(Date.now() + timeInMillis);
		}
		// Stop and reset timer
		Clock.Timer.stop().once();
	};

	this.setEndTime = function(timeInMillis) {
		if (timeInMillis > 0) {
			storeEndTime(timeInMillis);
			Clock.Timer.stop().once();
		}
	};

	this.getEndTime = function() {
		return parseInt(fetchEndTime());
	};

	this.onTimerUpdate = function(f) {
		fOnTimerUpdate = f;
	};

	this.onTimerDone = function(f) {
		fOnTimerDone = f;
	};

});


function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {str = '0' + str;}
	return str;
}


function formatTime(millis) {
	var x = parseInt(millis / 1000);
	var sec = x % 60;
	x = parseInt(x / 60);
	var min = x % 60;
	x = parseInt(x / 60);
	var h = x % 24;
	// TODO: support days as well
	//x = parseInt(x / 24);
	//var days = x;

	return (h > 0 ? pad(h, 2) : "00") + ":" + (min > 0 ? pad(min, 2) : "00") + ":" + (sec > 0 ? pad(sec, 2) : "00");
}
