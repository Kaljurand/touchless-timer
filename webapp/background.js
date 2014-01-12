chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('et.html', {
    'bounds': {
      'width': 800,
      'height': 600
    }
  });
  // These sound the same, not sure which TTS engine is used.
  //chrome.tts.speak('Käivitan taimerirakenduse...', {'lang': 'et-EE', 'rate': 1.0});
  //chrome.tts.speak('Käivitan taimerirakenduse...', {'enqueue': true, 'lang': 'fi-FI', 'rate': 1.0});

/*
chrome.tts.getVoices(
    function(voices) {
      for (var i = 0; i < voices.length; i++) {
        console.log('Voice ' + i + ':');
        console.log('  name: ' + voices[i].voiceName);
        console.log('  lang: ' + voices[i].lang);
        console.log('  gender: ' + voices[i].gender);
        console.log('  extension id: ' + voices[i].extensionId);
        console.log('  event types: ' + voices[i].eventTypes);
      }
    });
*/
});
