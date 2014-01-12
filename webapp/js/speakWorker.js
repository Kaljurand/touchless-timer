// TODO: load the scripts specified in the settings: settings_tts_model
importScripts('../acoustic/en_US/speak.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

