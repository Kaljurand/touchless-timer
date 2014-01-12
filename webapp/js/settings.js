
var grammar_id = "Alarm";
var lang_to = grammar_id + "App";

// Restart the listening after 1.2 seconds of no change
var recognizerTimeout = 1200;

var server_options_gfcloud = {
	grammars_url: "http://cloud.grammaticalframework.org/tmp/gfse.840536572/",
	grammar_list: [grammar_id + ".pgf"] // It's ok to skip this
}

var server_options_localhost = {
	grammars_url: "http://localhost:41296/grammars/",
	grammar_list: [grammar_id + ".pgf"] // It's ok to skip this
}

var server_options = server_options_localhost;

// This variable needs to be defined for online parsing,
// also, then you have to pass null to PgfApi.
//var server = pgf_online(server_options);
var server = null;

var pgfapi = new PgfApi(Alarm);

var settings_recognizer = "js/recognizer.js";

var mespeak_config = "js/mespeak/mespeak_config.json";
var mespeak_voice = "js/mespeak/voices/en/en.json";

var speak_settings = {
	amplitude: 100,
	wordgap: 5,
	pitch: 80,
	speed: 140
};

// Default labels, override using $.extend(label, { ... })
var label = {
	msg_error: function(x) { return 'Error: ' + x},
	msg_error_recorder: function(x) { return 'Error: recorder: ' + x},
	msg_error_webaudio: function(x) { return 'Error: Web Audio browser: ' + x},
	msg_error_usermedia: function(x) { return 'Error: navigator.getUserMedia: ' + x},
	msg_error_usermedia_not_supported: 'Error: not support for navigator.getUserMedia',
	msg_count_reload: function(x) { return 'Reload count: ' + x},
	msg_listening: 'Listening!',
	msg_notlistening: 'Not listening!',
	msg_recorder_ready: 'Recorder ready...',
	msg_recognizer_ready: 'Recognizer ready...',
	msg_loading_recognizer: 'Loading recognizer...',
	msg_access_microphone: 'Obtaining access to microphone...',
	msg_adding_words: function(x) { return 'Loading grammar: ' + x + ' words...' },
	msg_adding_transitions: function(x) { return 'Loading grammar: ' + x + ' transitions...' },
	msg_languages: function(x) { return 'Languages: ' + x},
	btn_listen: 'Listen',
	btn_nolisten: 'Dont listen',
	msg_error_loading_voice: function(x) { return 'Error in loading TTS voice: ' + x},
	msg_voice_loaded: function(x) { return 'TTS voice loaded: ' + x},
	test_tts_output: 'setting the alarm for nine fourty'
};
