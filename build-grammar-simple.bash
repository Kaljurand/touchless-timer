#!/bin/bash

if [ $# -ne 4 ]
then
	echo "Usage: `basename $0` <name> <lang> <grammars-dir> <outdir>"
	exit 1
fi

gfserver=${HOME}/.cabal/share/gf-3.5/www/grammars

name=$1
lang=$2
grammars=$3
data="${grammars}/test_gold/${name}/"
outdir="$4/$name"

echo "Creating output directory: $outdir"
mkdir -p $outdir

echo "Convert ${name}.pgf to ${name}${lang}.dict.js"
${grammars}/../tools/pgf-to-dict.sh $grammars/${name}.pgf ${lang} | python dict-to-js.py > $outdir/${name}${lang}.dict.js

echo "Convert ${name}.pgf to ${name}${lang}.fsg.js"
./pgf-to-fsgjs.sh $grammars/${name}.pgf ${name}${lang}
head -4 ${name}${lang}.fsg

echo "Deploy ${name}.pgf -> $gfserver"
cp $grammars/${name}.pgf $gfserver

echo "Deploy ${name}${lang}.fsg.js -> $outdir"
mv ${name}${lang}.fsg.js $outdir

echo "Deploy ${name}.pgf as Javascript -> $outdir"
gf --make --optimize-pgf --output-format=js --output-dir=${outdir} $grammars/${name}.pgf
