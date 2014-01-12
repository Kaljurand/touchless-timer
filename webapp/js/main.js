function onReady() {
	logDebug(label.msg_count_reload(getReloadCounter()));
	//logDebug("Need internet: " + pgfapi.isWebService);
	logDebug(label.msg_languages(pgfapi.langs.join(', ')));
	$("#output").hide();
	$("#settings").hide();
	$("#examples").hide();

	$('#output').each(function() {
		var elem = $(this);
		setInterval(function() {
			if (elem.hasClass('prompt')) {
				elem.removeClass('prompt');
				elem.addClass('promptFaded');
			} else {
				elem.removeClass('promptFaded');
				elem.addClass('prompt');
			}
		}, 1100);
	});

	$("#toggleListening").click(function(evt) {
		if (recorder && recorder.isRecording()) {
			if (mStream) {
				logDebug(label.msg_notlistening);
				mStream.stop();
				mStream = null;
			}
			stopRecording();
			recorder = null;
			$("#toggleListening").html(label.btn_listen);
		} else {
			// TODO: we should not reload everything but just the reacquire the microphone
			// TODO: this seems to work now, i.e. we don't need to reload
			initWebAudio();
			//location.reload();
			$("#toggleListening").html(label.btn_nolisten);
		}
	});

	$("#toggleHelp").click(function(evt) {
		$("#examples").toggle();
	});

	$("#toggleSettings").click(function(evt) {
		$("#settings").toggle();
	});

	// TODO: #toggleDetailedLog is always false here, fix this
	$("#log").toggleClass("filtered", ! $("#toggleDetailedLog").prop("checked"));

	$("#toggleDetailedLog").change(function() {
		$("#log").toggleClass("filtered", ! this.checked);
	});

	// TODO: these are for testing
	$("#btnSpeak").click(function(evt) {
		return speakFeedback(label.test_tts_output, {});
	});

	$("#alarmInOneMinute").click(function(evt) {
		Clock.resetCountdown(1);
		Clock.Timer.play();
	});

	$("audio").bind('ended', function() {
		//logDebug("Audio feedback ended");
	});

	initAudioSprite('audioCueSprite');

	Clock.onTimerDone(function() {
		// Show the time in the title as well
		document.title = "Time is up!";
		playAudioCue('audioTimerDone');
		$('#countdown').html("--:--:--");
		logMain('<span class="important">Time is up!</span>');
	});

	Clock.onTimerUpdate(function(timeString) {
		// Show the remaining time on the page
		$('#countdown').html(timeString);
		// ... and in the title as well
		document.title = timeString;
	});

	Clock.Timer.play();

	meSpeak.loadConfig(mespeak_config);
	meSpeak.loadVoice(mespeak_voice, function(success, msg) {
		if (success) {
			logDebug(label.msg_voice_loaded(msg));
		} else {
			logDebug(label.msg_error_loading_voice(msg));
		}
	});
}


var lang_from = grammar_id + settings_lang;
var re_p1 = new RegExp("alarm ([0-9]+) *: *([0-9]+)");
var re_p2 = new RegExp("alarm in ([0-9]+) minutes");
var re_p3 = new RegExp("alarm in ([0-9]+) hours and ([0-9]+) minutes");
var re_teist = new RegExp(' (teist|kümmend)', 'g');

var isPgfInProgress = false;


var lastChangeTime;
// These will be initialized later
var recognizer, recorder, callbackManager, audio_context, mStream;
// Only when both recorder and recognizer do we have a ready application
var recorderReady = recognizerReady = false;

// TODO: enable focus check
/*
var isFocused = true;

window.onfocus = function() {
	isFocused = true;
	startRecording();
};

window.onblur = function() {
	isFocused = false;
	stopRecording();
};
*/

// A convenience function to post a message to the recognizer
// and associate a callback to its response
function postRecognizerJob(message, callback) {
	var msg = message || {};
	//logDebug("Starting job: " + message.command + ": " + message.data);
	if (callbackManager) {
		msg.callbackId = callbackManager.add(callback);
	}
	if (recognizer) {
		recognizer.postMessage(msg);
	}
};

// This function initializes an instance of the recorder
// it posts a message right away and calls onReady when it
// is ready so that onmessage can be properly set
function spawnWorker(workerurl, onReady) {
	recognizer = new Worker(workerurl);
	recognizer.onmessage = function(event) {
		onReady(recognizer);
	};
	recognizer.postMessage(settings_acoustic_model);
};

// Display the hypothesis sent by the recognizer.
// If the hypothesis has not changed for some time
// then execute it, cancel the recording and start listening again.
// If the input is too short then we do not bother the parser with it.
// Also, we wait if parsing is still in progress (in case of online parsing).
function updateHyp(hyp) {
	var hyp = fixHyp(hyp);
	if (hyp && hyp == output.innerHTML) {
		if (Date.now() - lastChangeTime > recognizerTimeout) {
			// This triggers the final hyp
			stopRecording();
		}
	} else {
		output.innerHTML = hyp;
		lastChangeTime = Date.now();
	}
};

function hypFinal(hyp) {
	output.innerHTML = fixHyp(hyp);
	if (hyp.length > 19 && ! isPgfInProgress) {
		execute(hyp);
	} else {
		startRecording();
	}
};

// Removes the space that the grammar puts in front of 'teist' and 'kümmend'
// TODO: remove hack
function fixHyp(hyp) {
	return hyp.replace(re_teist, "$1");
}

function execute(inputCmd) {
	var ttsCmd;
	isPgfInProgress = true;
	if (pgfapi.isWebService) {
		server.translate({
			from: lang_from,
			to: lang_to,
			input:inputCmd
		}, function(json) {
			var outputCmd = "";
			try {
				outputCmd = json[0].translations[0].linearizations[0].text;
			} catch (e) {
			}
			executeOutputCmd(inputCmd, outputCmd);
		});
	} else {
		var lins = pgfapi.translateSimple(inputCmd, lang_from);
		executeOutputCmd(inputCmd, lins[lang_to]);
		ttsCmd = lins[lang_from + 'tts'];
	}

	if (ttsCmd && $("#toggleSpeak").prop("checked")) {
		speakFeedback(ttsCmd, function() {
			startRecording();
			return console.log('Speech finished');
		});
	} else {
		playAudioCue('audioTimerSet');
		startRecording();
	}
}

// Only when both recorder and recognizer are ready
function updateUI() {
	if (recorderReady && recognizerReady) {
		logDebug(label.msg_listening);
		startRecording();
	}
};

function pad(number) {
	var r = String(number);
	if ( r.length === 1 ) {
		r = '0' + r;
	}
	return r;
}

function logMain(entry) {
	log('main', entry);
}

function logDebug(entry) {
	log('debug', entry);
}

function log(type, newStatus) {
	var date = new Date(Date.now());
	//var dateString = date.toLocaleString();
	//var dateString = date.toISOString();
	var dateString = date.getFullYear()
		+ '-' + pad( date.getMonth() + 1 )
		+ '-' + pad( date.getDate() )
		+ ' ' + pad( date.getHours() )
		+ ':' + pad( date.getMinutes() )
		+ ':' + pad( date.getSeconds() );
	$("#log").prepend("<tr class='" + type + "'><td class='nowrap'>" + dateString + "</td><td>" + newStatus + "</td></tr>" );
};

function displayRecording() {
	if (recorder && recorder.isRecording()) {
		$("#output").show();
	} else {
		$("#output").hide();
	}
};

function playAudioCue(tag) {
	playSprite(tag);
	//document.getElementById(tag).play();
}

// Callback function once the user authorises access to the microphone
// in it, we instanciate the recorder
function startUserMedia(stream) {
	mStream = stream;
	// createMediaStreamSource fails on Firefox 24
	var input;
	try {
		input = audio_context.createMediaStreamSource(stream);
	} catch (e) {
		logDebug(label.msg_error(e));
		return;
	}
	var audioRecorderConfig = {errorCallback: function(x) {logDebug(label.msg_error_recorder(x));}};
	recorder = new AudioRecorder(input, audioRecorderConfig);
	// If a recognizer is ready, we pass it to the recorder
	if (recognizer) recorder.consumers = [recognizer];
	recorderReady = true;
	logDebug(label.msg_recorder_ready);
	updateUI();
};

var startRecording = function() {
	// The argument to start is the grammar ID.
	// 0 for the first grammar, some other integer for other grammars,
	// assigned by addGrammars.
	if (recorder && recorder.start(0)) {
		displayRecording();
	} else {
		//logDebug(label.msg_error("startRecording: recorder == null OR start(0) == null"));
	}
};

var stopRecording = function() {
	if (recorder) {
		recorder.stop();
		displayRecording();
	} else {
		//logDebug(label.msg_error("stopRecording: recorder == null"));
	}
};

// Called once the recognizer is ready
// We then add the grammars to the input select tag and update the UI
var recognizerReady = function() {
	recognizerReady = true;
	logDebug(label.msg_recognizer_ready);
	updateUI();
};

// Once we are done adding the grammar, we can call recognizerReady()
var feedGrammar = function() {
	logDebug(label.msg_adding_transitions(grammarFsa.transitions.length));
	postRecognizerJob(
		{command: 'addGrammar', data: grammarFsa},
		function(id) {
			//logDebug("Loaded grammar: " + id);
			recognizerReady();
			initWebAudio();
		}
	);
};

// This adds words to the recognizer. When it calls back, we add the grammar
var feedWords = function(words) {
	logDebug(label.msg_adding_words(words.length));
	postRecognizerJob({command: 'addWords', data: words},
		function() {
			feedGrammar();
		});
};

// This initializes the recognizer. When it calls back, we add words
// {command: 'initialize', data: [["-hmm", "my_model"], ["-fwdflat", "no"]]}
var initRecognizer = function() {
	postRecognizerJob(
		{command: 'initialize', data: [
			/*
			["-bestpath", "yes"],
			["-fwdflat", "yes"],
			["-remove_noise", "yes"]
			*/
		]},
		function() {
			// TODO: we never reach this point in the Chrome App
			if (recorder) recorder.consumers = [recognizer];
			feedWords(wordList);
		}
	);
};

// When the page is loaded, we spawn a new recognizer worker and
// call getUserMedia to request access to the microphone
function init() {
	var errorCounter = 0;
	callbackManager = new CallbackManager();
	logDebug(label.msg_loading_recognizer);
	spawnWorker(settings_recognizer, function(worker) {
		// This is the onmessage function, once the worker is fully loaded
		worker.onmessage = function(e) {
			// This is the case when we have a callback id to be called
			if (e.data.hasOwnProperty('id')) {
				var clb = callbackManager.get(e.data['id']);
				var data = {};
				if(e.data.hasOwnProperty('data')) data = e.data.data;
				if(clb) clb(data);
			}
			// The recognizer has a new hypothesis.
			if (e.data.hasOwnProperty('hyp')) {
				var newHyp = e.data.hyp;
				if (e.data.hasOwnProperty('final') && e.data.final) {
					// TODO: is this called only when the recognizer has been stopped?
					hypFinal(newHyp);
				} else {
					updateHyp(newHyp);
				}
			}
			// This is the case when we have an error
			if (e.data.hasOwnProperty('status') && (e.data.status == "error")) {
				errorCounter++;
				if (errorCounter == 5) {
					// TODO: this is very experimental
					//logDebug("Reloading...");
					//recognizer = undefined;
					//initRecognizer();
					//stopRecording();
					//startRecording();

					// If we enconter a fatal error, then we just reload the page.
					// TODO: should one use document.location.reload()?
					// TODO: should one use window.location.reload()?
					// TODO: would this work in a Chrome App
					incReloadCounter();
					location.reload();
				} else if (errorCounter < 5) {
					logDebug(label.msg_error(e.data.command + " / " + e.data.code + ": " + e.data.w));
				}
			}
		};

		// Once the worker is fully loaded, we call the initialize function
		initRecognizer();
	});
};

// Reload counter is stored in sessionStorage
function incReloadCounter() {
	sessionStorage['intReloadCounter'] = getReloadCounter() + 1;
}

function getReloadCounter() {
	if (sessionStorage['intReloadCounter']) {
		return parseInt(sessionStorage['intReloadCounter']);
	}
	return 0;
}

function initWebAudio() {
	logDebug(label.msg_access_microphone);
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		window.URL = window.URL || window.webkitURL;
		audio_context = new AudioContext();
	} catch (e) {
		// Firefox 24: TypeError: AudioContext is not a constructor
		// Set media.webaudio.enabled = true (in about:config) to fix this.
		logDebug(label.msg_error_webaudio(e));
	}

	if (navigator.getUserMedia)
		navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
			logDebug(label.msg_error_usermedia(e));
		});
	else
		logDebug(label.msg_error_usermedia_not_supported);
}


function executeOutputCmd(inputCmd, outputCmd) {
	if (outputCmd) {
		try {
			// Bind tokens. The webservice does this automatically, but the offline JS not.
			outputCmd = outputCmd.split(" &+ ").join("");
			parseAndSetDate(outputCmd);
			var dateAsStr = ppDate(Clock.getEndTime());
			logMain("<strong>" + dateAsStr + "</strong> ('" + fixHyp(inputCmd) + "')");
			Clock.Timer.play();
		} catch (e) {
			logDebug("?? (" + inputCmd + "), " + e);
		}
	} else {
		logDebug("?? (" + inputCmd + "), parsing failed.");
	}
	isPgfInProgress = false;
}

function speakFeedback(text, fOnSpeechFinished) {
	console.log('Speech started: ' + text);
	if (true) {
		meSpeak.speak(text, speak_settings, fOnSpeechFinished);
		//speak.play(text, speak_settings, fOnSpeechFinished);
	} else {
		// TODO: future work: support Chrome TTS if running as Chrome app
		//chrome.tts.speak(ttsCmd, {'lang': 'et-EE', 'rate': 1 .0});
	}
	return false;
}

function parseAndSetDate(outputCmd) {
	var parts = re_p1.exec(outputCmd);
	if (parts) {
		var millisNow = Date.now();
		var date = new Date(millisNow);
		date.setHours(parseInt(parts[1]));
		date.setMinutes(parseInt(parts[2]));
		var millisThen = date.getTime();
		if (millisNow > millisThen) {
			millisThen = millisThen + 1000 * 60 * 60 * 24;
		}
		Clock.setEndTime(millisThen);
		return;
	}
	parts = re_p2.exec(outputCmd);
	if (parts) {
		Clock.resetCountdown(parseInt(parts[1]));
		return;
	}
	parts = re_p3.exec(outputCmd);
	if (parts) {
		Clock.resetCountdown(parseInt(parts[1]) * 60 + parseInt(parts[2]));
		return;
	}
	// This is programmer error
	throw "post-parsing expression [" + outputCmd + "] failed";
}

function ppDate(millis) {
	var date = new Date(millis);
	return pad(date.getHours()) + ":" + pad(date.getMinutes());
}

$(document).ready(function() {
	onReady();
	init();
});
