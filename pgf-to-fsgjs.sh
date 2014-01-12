#! /bin/sh

# Converts a given concrete syntax in the given PGF to a Javascript-formatted FSA.
# Expects the following to be on the PATH:
#  - gf
#  - sed
#  - sphinx_jsgf2fsg (sphinxbase)
#  - fst* (OpenFst tools)
#  - fsm2fsg.py (https://github.com/alumae/ruby-pocketsphinx-server)

if [ $# -ne 2 ]
then
	echo "Usage: `basename $0` pgf lang"
	exit 1
fi

pgf=$1
lang=$2

gf --make --quiet --output-format=jsgf --output-dir . $pgf

sed -i "s/^public //" ${lang}.jsgf
sed -i "s/^<MAIN>/public <MAIN>/" ${lang}.jsgf

sphinx_jsgf2fsg -jsgf ${lang}.jsgf -fsm ${lang}.fsm -symtab ${lang}.sym

fstcompile --arc_type=log --acceptor --isymbols=${lang}.sym --keep_isymbols ${lang}.fsm | \
	fstdeterminize | fstminimize | fstrmepsilon | fstprint | \
	fsm2fsg.py > ${lang}.fsg

./fsg-to-fsgjs.py < ${lang}.fsg > ${lang}.fsg.js
