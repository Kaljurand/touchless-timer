Touchless Timer
===============

Hands-free "always on" offline HTML5-based multilingual timer / alarm clock.
The application can be installed from <https://touchless-timer.appspot.com>.
If this page does not open (due to exceeded quota) then try again tomorrow.

The application is currently available in Estonian and English.
(The Estonian version works a lot better.)

Running the webapp locally
--------------------------

To run the webapp locally open a new terminal and start an HTTP server, e.g.

	python -m SimpleHTTPServer

Then load the webapp, e.g.

	google-chrome http://localhost:8000/webapp/et.html

Browser support
---------------

  - Chromium 31.0.1650.63 Ubuntu 13.10

Building the models
-------------------

The acoustic models and grammars for Estonian and English
have been included in the repository. In case you want to build your
own models (e.g. to port the application to a new language)
then follow the instructions below.

TODO: improve the instructions

### Acoustic models

Pull the following Git projects:

  - <https://github.com/syl22-00/pocketsphinx.js> (incl. English models)
  - <https://github.com/kripken/emscripten>
  - <https://github.com/alumae/et-pocketsphinx-tutorial> (Estonian models)

Define the corresponding environment variables, e.g.

	export POCKETSPHINX_JS=${HOME}/myapps/pocketsphinx.js/
	export EMSCRIPTEN=${HOME}/myapps/emscripten/
	export POCKETSPHINX_HMM_ET=${HOME}/myapps/et-pocketsphinx-tutorial/models/hmm/

Install some dependencies:

	sudo apt-get install cmake clang llvm nodejs

Declare the location of node.js for emscripten:

	export NODE=/usr/bin/nodejs

See also:
<https://earthserver.com/Setting_up_emscripten_development_environment_on_Linux>
to get everything needed by emscripten installed.

Now run the script `build-pocketsphinx-js.sh`, e.g.

	sh build-pocketsphinx-js.sh et

or

	sh build-pocketsphinx-js.sh en

This creates a new directory `build` and builds in it
the file `pocketsphinx.js`, based on the instructions in `build.sh`.

Copy `pocketsphinx.js` to your application, e.g.

	cp build/pocketsphinx.js webapp/acoustic/et_EE/

Also, if the `pocketsphinx.js` project has updated its demo code then
sync this as well, i.e.
copy the Javascript files from `webapp/js/` of `pocketsphinx.js`.

### Grammar/dictionary

In order to create the grammar and dictionary files in `webapp/grammars/`, you need
to install the following software and place it on the PATH.

  - <http://www.grammaticalframework.org/>
  - <http://www.openfst.org/>
    - `fstcompile` etc.
  - <http://cmusphinx.sourceforge.net/>
    - `sphinx_jsgf2fsg`
  - <https://github.com/alumae/ruby-pocketsphinx-server>
    - `fsm2fsg.py`
  - <https://github.com/alumae/et-g2p.git>
    - depends on Java
    - install using `ant`
  - <https://github.com/Kaljurand/Grammars>, generate the necessary files using:
    - `bash make-pgf.sh`
    - `bash test-and-diff.sh`
    - `cp -r build/test_out/ test_gold`

Now generate the grammar files using e.g.:

	bash build-grammar-simple.bash Alarm Est ${HOME}/myapps/Grammars/gf/ webapp/grammars/
