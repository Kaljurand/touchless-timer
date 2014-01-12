
var settings_lang = "Est";
// This is called from js/recognizer.js
var settings_acoustic_model = '../acoustic/et_EE/pocketsphinx.js';
// This is called from js/speakWorker.js
// TODO: en_US -> et_EE
//var settings_tts_model = '../acoustic/en_US/speak.js';

// Voice setting for meSpeak
// TODO: does not work (illegal invocation): fi, pt, es, lv, de (probably because of õäöü)
// TODO: works: hu
var mespeak_voice = "js/mespeak/voices/hu.json";

$.extend(label, {
	msg_error: function(x) { return 'Viga: ' + x},
	msg_error_recorder: function(x) { return 'Viga: lindistaja: ' + x},
	msg_error_webaudio: function(x) { return 'Viga: Web Audio brauser: ' + x},
	msg_error_usermedia: function(x) { return 'Viga: navigator.getUserMedia: ' + x},
	msg_error_usermedia_not_supported: 'Viga: navigator.getUserMedia tugi puudub',
	msg_count_reload: function(x) { return 'Taaskäivitamiste arv: ' + x},
	msg_listening: 'Kuulan!',
	msg_notlistening: 'Ei kuula!',
	msg_recorder_ready: 'Lindistaja valmis...',
	msg_recognizer_ready: 'Kõnetuvastaja valmis...',
	msg_loading_recognizer: 'Laadin kõnetuvastajat...',
	msg_access_microphone: 'Üritan mikrofoni sisse lülitada...',
	msg_adding_words: function(x) { return 'Laadin sisendkeele grammatikat: ' + x + ' sõna...' },
	msg_adding_transitions: function(x) { return 'Laadin sisendkeele grammatikat: ' + x + ' üleminekut...' },
	msg_languages: function(x) { return 'Keeled: ' + x},
	btn_listen: 'Kuula',
	btn_nolisten: 'Ära kuula',
	msg_error_loading_voice: function(x) { return 'Viga: kõnesüntesaator: ' + x},
	msg_voice_loaded: function(x) { return 'Kõnesüntesaatori hääl laetud: ' + x},
	//test_tts_output: 'ratan koik kell kakskummend uheksa uksteist oosel'
	test_tts_output: 'äratan kõik kell kakskümmend üheksa üksteist öösel'
});
