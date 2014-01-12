#! /usr/bin/env python

# Converts OpenFst format from STDIN
# into pocketsphinx.js FSA representation to STDOUT.
#
# Author: Kaarel Kaljurand
# Version: 2013-09-16
#
import sys
import re

count = 0
name = "grammarFsa"

print "var " + name + " = {"
for line in sys.stdin:
	if re.match("^NUM_STATES ", line):
		(tag, num) = line.split(' ')
		num = num.strip()
		print "numStates: %s," % (num)
	elif re.match("^START_STATE ", line):
		(tag, num) = line.split(' ')
		num = num.strip()
		print "start: %s," % (num)
	elif re.match("^FINAL_STATE ", line):
		(tag, num) = line.split(' ')
		num = num.strip()
		print "end: %s, transitions: [" % (num)
	elif re.match("^TRANSITION ", line):
		(tag, frm, to, prob, word) = line.split(' ')
		word = word.strip()
		print "{from: %s, to: %s, word: \"%s\"}," % (frm, to, word)
		#print >> sys.stderr, 'Transition: %s' % (word)
		count = count + 1
print "]};"

print >> sys.stderr, 'Number of transitions: %d' % (count)
