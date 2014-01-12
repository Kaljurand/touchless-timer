#! /usr/bin/env python

# Converts a 2-column CSV file from STDIN
# into a Javascript array of 2-element arrays to STDOUT.
#
# Author: Kaarel Kaljurand
# Version: 2013-07-10
#
import sys

print "var wordList = ["
for line in sys.stdin:
	(word, pron) = line.split('\t')
	word = word.strip()
	pron = pron.strip()
	if word and pron:
		print "[\"%s\", \"%s\"]," % (word, pron)
print "];"
