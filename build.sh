
if [ $# -ne 1 ]
then
	echo "Usage: `basename $0` <lang>"
	exit 1
fi

lang=$1

# HMM_BASE
models=
# HMM_FOLDERS
model=

echo "Building pocketsphinx.js for language $lang"
if [ $lang = "en" ]; then
	# The default acoustic models (English) of pocketsphinx.js
	models=${POCKETSPHINX_JS}/am
	model=rm1_200
	# Other possible acoustic models
	#model=en-us
	#model=en_broadcastnews_16k_ptm256_5000
	##model=voxforge_en_sphinx.cd_cont_5000
else
	# Estonian acoustic models
	models=${POCKETSPHINX_HMM_ET}

	# This generates a 14 MB js-file
	model=est16k.cd_ptm_1000-mapadapt

	# This is used successfully in the Android app Inimesed,
	# but it results in a 110 MB js-file
	# that took too long to load in the browser.
	#model=est16k.cd_cont_3000-mapadapt
fi

# -DLARGE_PHONESET=1
# If your acoustic model has more than 64 phones,
# such as for the Chinese model packaged with PocketSphinx.

# -DALLOW_MEMORY_GROWTH=1
# If you package large files (acoustic model, language model, dictionary),
# you'll probably need to allow the memory to grow beyond the default value.
#
emscripten_cmake=${EMSCRIPTEN}/cmake/Platform/Emscripten.cmake

cmake -DEMSCRIPTEN=1 -DCMAKE_TOOLCHAIN_FILE=${emscripten_cmake} -DHMM_BASE=${models} -DHMM_FOLDERS=${model} -DALLOW_MEMORY_GROWTH=1 ${POCKETSPHINX_JS}

make
