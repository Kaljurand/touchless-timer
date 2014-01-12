var grammarFsa = {
numStates: 51,
start: 0,
end: 50, transitions: [
{from: 0, to: 3, word: "please"},
{from: 0, to: 2, word: "set"},
{from: 0, to: 1, word: "wake"},
{from: 1, to: 4, word: "me"},
{from: 2, to: 12, word: "alarm"},
{from: 2, to: 10, word: "timer"},
{from: 2, to: 10, word: "alarm"},
{from: 2, to: 6, word: "the"},
{from: 3, to: 8, word: "set"},
{from: 3, to: 7, word: "wake"},
{from: 4, to: 5, word: "up"},
{from: 5, to: 23, word: "in"},
{from: 5, to: 9, word: "at"},
{from: 6, to: 10, word: "timer"},
{from: 6, to: 13, word: "alarm"},
{from: 7, to: 11, word: "me"},
{from: 8, to: 18, word: "alarm"},
{from: 8, to: 20, word: "timer"},
{from: 8, to: 20, word: "alarm"},
{from: 8, to: 15, word: "the"},
{from: 9, to: 22, word: "four"},
{from: 9, to: 22, word: "five"},
{from: 9, to: 22, word: "six"},
{from: 9, to: 22, word: "seven"},
{from: 9, to: 22, word: "eight"},
{from: 9, to: 22, word: "nine"},
{from: 9, to: 22, word: "ten"},
{from: 9, to: 22, word: "eleven"},
{from: 9, to: 22, word: "twelve"},
{from: 9, to: 22, word: "thirteen"},
{from: 9, to: 22, word: "fourteen"},
{from: 9, to: 22, word: "fifteen"},
{from: 9, to: 22, word: "sixteen"},
{from: 9, to: 22, word: "seventeen"},
{from: 9, to: 22, word: "eighteen"},
{from: 9, to: 22, word: "nineteen"},
{from: 9, to: 22, word: "one"},
{from: 9, to: 22, word: "two"},
{from: 9, to: 22, word: "three"},
{from: 9, to: 21, word: "twenty"},
{from: 9, to: 40, word: "four"},
{from: 9, to: 40, word: "five"},
{from: 9, to: 40, word: "six"},
{from: 9, to: 40, word: "seven"},
{from: 9, to: 40, word: "eight"},
{from: 9, to: 40, word: "nine"},
{from: 9, to: 40, word: "ten"},
{from: 9, to: 40, word: "eleven"},
{from: 9, to: 40, word: "twelve"},
{from: 9, to: 40, word: "thirteen"},
{from: 9, to: 40, word: "fourteen"},
{from: 9, to: 40, word: "fifteen"},
{from: 9, to: 40, word: "sixteen"},
{from: 9, to: 40, word: "seventeen"},
{from: 9, to: 40, word: "eighteen"},
{from: 9, to: 40, word: "nineteen"},
{from: 9, to: 40, word: "one"},
{from: 9, to: 40, word: "two"},
{from: 9, to: 40, word: "three"},
{from: 9, to: 17, word: "twenty"},
{from: 10, to: 33, word: "for"},
{from: 10, to: 33, word: "in"},
{from: 10, to: 33, word: "to"},
{from: 10, to: 33, word: "at"},
{from: 11, to: 14, word: "up"},
{from: 12, to: 16, word: "for"},
{from: 12, to: 16, word: "in"},
{from: 12, to: 16, word: "to"},
{from: 12, to: 16, word: "at"},
{from: 13, to: 33, word: "for"},
{from: 13, to: 33, word: "in"},
{from: 13, to: 33, word: "to"},
{from: 13, to: 33, word: "at"},
{from: 13, to: 16, word: "for"},
{from: 13, to: 16, word: "in"},
{from: 13, to: 16, word: "to"},
{from: 13, to: 16, word: "at"},
{from: 14, to: 32, word: "in"},
{from: 14, to: 16, word: "at"},
{from: 15, to: 20, word: "timer"},
{from: 15, to: 19, word: "alarm"},
{from: 16, to: 17, word: "twenty"},
{from: 16, to: 40, word: "three"},
{from: 16, to: 40, word: "two"},
{from: 16, to: 40, word: "one"},
{from: 16, to: 40, word: "nineteen"},
{from: 16, to: 40, word: "eighteen"},
{from: 16, to: 40, word: "seventeen"},
{from: 16, to: 40, word: "sixteen"},
{from: 16, to: 40, word: "fifteen"},
{from: 16, to: 40, word: "fourteen"},
{from: 16, to: 40, word: "thirteen"},
{from: 16, to: 40, word: "twelve"},
{from: 16, to: 40, word: "eleven"},
{from: 16, to: 40, word: "ten"},
{from: 16, to: 40, word: "nine"},
{from: 16, to: 40, word: "eight"},
{from: 16, to: 40, word: "seven"},
{from: 16, to: 40, word: "six"},
{from: 16, to: 40, word: "five"},
{from: 16, to: 40, word: "four"},
{from: 16, to: 21, word: "twenty"},
{from: 16, to: 22, word: "three"},
{from: 16, to: 22, word: "two"},
{from: 16, to: 22, word: "one"},
{from: 16, to: 22, word: "nineteen"},
{from: 16, to: 22, word: "eighteen"},
{from: 16, to: 22, word: "seventeen"},
{from: 16, to: 22, word: "sixteen"},
{from: 16, to: 22, word: "fifteen"},
{from: 16, to: 22, word: "fourteen"},
{from: 16, to: 22, word: "thirteen"},
{from: 16, to: 22, word: "twelve"},
{from: 16, to: 22, word: "eleven"},
{from: 16, to: 22, word: "ten"},
{from: 16, to: 22, word: "nine"},
{from: 16, to: 22, word: "eight"},
{from: 16, to: 22, word: "seven"},
{from: 16, to: 22, word: "six"},
{from: 16, to: 22, word: "five"},
{from: 16, to: 22, word: "four"},
{from: 17, to: 40, word: "four"},
{from: 17, to: 40, word: "one"},
{from: 17, to: 40, word: "two"},
{from: 17, to: 40, word: "three"},
{from: 17, to: 50, word: ""},
{from: 18, to: 24, word: "for"},
{from: 18, to: 24, word: "in"},
{from: 18, to: 24, word: "to"},
{from: 18, to: 24, word: "at"},
{from: 19, to: 27, word: "for"},
{from: 19, to: 27, word: "in"},
{from: 19, to: 27, word: "to"},
{from: 19, to: 27, word: "at"},
{from: 19, to: 24, word: "for"},
{from: 19, to: 24, word: "in"},
{from: 19, to: 24, word: "to"},
{from: 19, to: 24, word: "at"},
{from: 20, to: 27, word: "for"},
{from: 20, to: 27, word: "in"},
{from: 20, to: 27, word: "to"},
{from: 20, to: 27, word: "at"},
{from: 21, to: 30, word: "oh"},
{from: 21, to: 28, word: "thirty"},
{from: 21, to: 28, word: "forty"},
{from: 21, to: 28, word: "fifty"},
{from: 21, to: 29, word: "ten"},
{from: 21, to: 29, word: "eleven"},
{from: 21, to: 29, word: "twelve"},
{from: 21, to: 29, word: "thirteen"},
{from: 21, to: 29, word: "fourteen"},
{from: 21, to: 29, word: "fifteen"},
{from: 21, to: 29, word: "sixteen"},
{from: 21, to: 29, word: "seventeen"},
{from: 21, to: 29, word: "eighteen"},
{from: 21, to: 29, word: "nineteen"},
{from: 21, to: 28, word: "twenty"},
{from: 21, to: 22, word: "four"},
{from: 21, to: 22, word: "one"},
{from: 21, to: 22, word: "two"},
{from: 21, to: 22, word: "three"},
{from: 22, to: 30, word: "oh"},
{from: 22, to: 28, word: "thirty"},
{from: 22, to: 28, word: "forty"},
{from: 22, to: 28, word: "fifty"},
{from: 22, to: 29, word: "ten"},
{from: 22, to: 29, word: "eleven"},
{from: 22, to: 29, word: "twelve"},
{from: 22, to: 29, word: "thirteen"},
{from: 22, to: 29, word: "fourteen"},
{from: 22, to: 29, word: "fifteen"},
{from: 22, to: 29, word: "sixteen"},
{from: 22, to: 29, word: "seventeen"},
{from: 22, to: 29, word: "eighteen"},
{from: 22, to: 29, word: "nineteen"},
{from: 22, to: 28, word: "twenty"},
{from: 23, to: 47, word: "four"},
{from: 23, to: 47, word: "five"},
{from: 23, to: 47, word: "six"},
{from: 23, to: 47, word: "seven"},
{from: 23, to: 47, word: "eight"},
{from: 23, to: 47, word: "nine"},
{from: 23, to: 47, word: "two"},
{from: 23, to: 47, word: "three"},
{from: 23, to: 46, word: "sixty"},
{from: 23, to: 46, word: "seventy"},
{from: 23, to: 46, word: "eighty"},
{from: 23, to: 46, word: "ninety"},
{from: 23, to: 46, word: "thirty"},
{from: 23, to: 46, word: "forty"},
{from: 23, to: 46, word: "fifty"},
{from: 23, to: 31, word: "four"},
{from: 23, to: 31, word: "five"},
{from: 23, to: 31, word: "six"},
{from: 23, to: 31, word: "seven"},
{from: 23, to: 31, word: "eight"},
{from: 23, to: 31, word: "nine"},
{from: 23, to: 49, word: "twelve"},
{from: 23, to: 49, word: "thirteen"},
{from: 23, to: 49, word: "fourteen"},
{from: 23, to: 49, word: "fifteen"},
{from: 23, to: 49, word: "sixteen"},
{from: 23, to: 49, word: "seventeen"},
{from: 23, to: 49, word: "eighteen"},
{from: 23, to: 49, word: "nineteen"},
{from: 23, to: 49, word: "one"},
{from: 23, to: 31, word: "two"},
{from: 23, to: 31, word: "three"},
{from: 23, to: 46, word: "twenty"},
{from: 23, to: 26, word: "sixty"},
{from: 23, to: 26, word: "seventy"},
{from: 23, to: 26, word: "eighty"},
{from: 23, to: 26, word: "ninety"},
{from: 23, to: 26, word: "thirty"},
{from: 23, to: 26, word: "forty"},
{from: 23, to: 26, word: "fifty"},
{from: 23, to: 48, word: "ten"},
{from: 23, to: 48, word: "eleven"},
{from: 23, to: 38, word: "twelve"},
{from: 23, to: 38, word: "thirteen"},
{from: 23, to: 38, word: "fourteen"},
{from: 23, to: 38, word: "fifteen"},
{from: 23, to: 38, word: "sixteen"},
{from: 23, to: 38, word: "seventeen"},
{from: 23, to: 38, word: "eighteen"},
{from: 23, to: 38, word: "nineteen"},
{from: 23, to: 25, word: "one"},
{from: 23, to: 26, word: "twenty"},
{from: 23, to: 37, word: "ten"},
{from: 23, to: 37, word: "eleven"},
{from: 24, to: 22, word: "four"},
{from: 24, to: 22, word: "five"},
{from: 24, to: 22, word: "six"},
{from: 24, to: 22, word: "seven"},
{from: 24, to: 22, word: "eight"},
{from: 24, to: 22, word: "nine"},
{from: 24, to: 22, word: "ten"},
{from: 24, to: 22, word: "eleven"},
{from: 24, to: 22, word: "twelve"},
{from: 24, to: 22, word: "thirteen"},
{from: 24, to: 22, word: "fourteen"},
{from: 24, to: 22, word: "fifteen"},
{from: 24, to: 22, word: "sixteen"},
{from: 24, to: 22, word: "seventeen"},
{from: 24, to: 22, word: "eighteen"},
{from: 24, to: 22, word: "nineteen"},
{from: 24, to: 22, word: "one"},
{from: 24, to: 22, word: "two"},
{from: 24, to: 22, word: "three"},
{from: 24, to: 21, word: "twenty"},
{from: 24, to: 40, word: "four"},
{from: 24, to: 40, word: "five"},
{from: 24, to: 40, word: "six"},
{from: 24, to: 40, word: "seven"},
{from: 24, to: 40, word: "eight"},
{from: 24, to: 40, word: "nine"},
{from: 24, to: 40, word: "ten"},
{from: 24, to: 40, word: "eleven"},
{from: 24, to: 40, word: "twelve"},
{from: 24, to: 40, word: "thirteen"},
{from: 24, to: 40, word: "fourteen"},
{from: 24, to: 40, word: "fifteen"},
{from: 24, to: 40, word: "sixteen"},
{from: 24, to: 40, word: "seventeen"},
{from: 24, to: 40, word: "eighteen"},
{from: 24, to: 40, word: "nineteen"},
{from: 24, to: 40, word: "one"},
{from: 24, to: 40, word: "two"},
{from: 24, to: 40, word: "three"},
{from: 24, to: 17, word: "twenty"},
{from: 25, to: 34, word: "hours"},
{from: 25, to: 43, word: "hundred"},
{from: 26, to: 34, word: "hours"},
{from: 26, to: 36, word: "four"},
{from: 26, to: 36, word: "five"},
{from: 26, to: 36, word: "six"},
{from: 26, to: 36, word: "seven"},
{from: 26, to: 36, word: "eight"},
{from: 26, to: 36, word: "nine"},
{from: 26, to: 36, word: "two"},
{from: 26, to: 36, word: "three"},
{from: 26, to: 38, word: "one"},
{from: 27, to: 37, word: "eleven"},
{from: 27, to: 37, word: "ten"},
{from: 27, to: 26, word: "twenty"},
{from: 27, to: 25, word: "one"},
{from: 27, to: 38, word: "nineteen"},
{from: 27, to: 38, word: "eighteen"},
{from: 27, to: 38, word: "seventeen"},
{from: 27, to: 38, word: "sixteen"},
{from: 27, to: 38, word: "fifteen"},
{from: 27, to: 38, word: "fourteen"},
{from: 27, to: 38, word: "thirteen"},
{from: 27, to: 38, word: "twelve"},
{from: 27, to: 48, word: "eleven"},
{from: 27, to: 48, word: "ten"},
{from: 27, to: 26, word: "fifty"},
{from: 27, to: 26, word: "forty"},
{from: 27, to: 26, word: "thirty"},
{from: 27, to: 26, word: "ninety"},
{from: 27, to: 26, word: "eighty"},
{from: 27, to: 26, word: "seventy"},
{from: 27, to: 26, word: "sixty"},
{from: 27, to: 46, word: "twenty"},
{from: 27, to: 31, word: "three"},
{from: 27, to: 31, word: "two"},
{from: 27, to: 49, word: "one"},
{from: 27, to: 49, word: "nineteen"},
{from: 27, to: 49, word: "eighteen"},
{from: 27, to: 49, word: "seventeen"},
{from: 27, to: 49, word: "sixteen"},
{from: 27, to: 49, word: "fifteen"},
{from: 27, to: 49, word: "fourteen"},
{from: 27, to: 49, word: "thirteen"},
{from: 27, to: 49, word: "twelve"},
{from: 27, to: 31, word: "nine"},
{from: 27, to: 31, word: "eight"},
{from: 27, to: 31, word: "seven"},
{from: 27, to: 31, word: "six"},
{from: 27, to: 31, word: "five"},
{from: 27, to: 31, word: "four"},
{from: 27, to: 46, word: "fifty"},
{from: 27, to: 46, word: "forty"},
{from: 27, to: 46, word: "thirty"},
{from: 27, to: 46, word: "ninety"},
{from: 27, to: 46, word: "eighty"},
{from: 27, to: 46, word: "seventy"},
{from: 27, to: 46, word: "sixty"},
{from: 27, to: 47, word: "three"},
{from: 27, to: 47, word: "two"},
{from: 27, to: 47, word: "nine"},
{from: 27, to: 47, word: "eight"},
{from: 27, to: 47, word: "seven"},
{from: 27, to: 47, word: "six"},
{from: 27, to: 47, word: "five"},
{from: 27, to: 47, word: "four"},
{from: 28, to: 29, word: "four"},
{from: 28, to: 29, word: "five"},
{from: 28, to: 29, word: "six"},
{from: 28, to: 29, word: "seven"},
{from: 28, to: 29, word: "eight"},
{from: 28, to: 29, word: "nine"},
{from: 28, to: 29, word: "one"},
{from: 28, to: 29, word: "two"},
{from: 28, to: 29, word: "three"},
{from: 28, to: 50, word: ""},
{from: 29, to: 50, word: ""},
{from: 30, to: 29, word: "clock"},
{from: 30, to: 29, word: "four"},
{from: 30, to: 29, word: "five"},
{from: 30, to: 29, word: "six"},
{from: 30, to: 29, word: "seven"},
{from: 30, to: 29, word: "eight"},
{from: 30, to: 29, word: "nine"},
{from: 30, to: 29, word: "one"},
{from: 30, to: 29, word: "two"},
{from: 30, to: 29, word: "three"},
{from: 31, to: 43, word: "hundred"},
{from: 31, to: 34, word: "hours"},
{from: 32, to: 37, word: "eleven"},
{from: 32, to: 37, word: "ten"},
{from: 32, to: 26, word: "twenty"},
{from: 32, to: 25, word: "one"},
{from: 32, to: 38, word: "nineteen"},
{from: 32, to: 38, word: "eighteen"},
{from: 32, to: 38, word: "seventeen"},
{from: 32, to: 38, word: "sixteen"},
{from: 32, to: 38, word: "fifteen"},
{from: 32, to: 38, word: "fourteen"},
{from: 32, to: 38, word: "thirteen"},
{from: 32, to: 38, word: "twelve"},
{from: 32, to: 48, word: "eleven"},
{from: 32, to: 48, word: "ten"},
{from: 32, to: 26, word: "fifty"},
{from: 32, to: 26, word: "forty"},
{from: 32, to: 26, word: "thirty"},
{from: 32, to: 26, word: "ninety"},
{from: 32, to: 26, word: "eighty"},
{from: 32, to: 26, word: "seventy"},
{from: 32, to: 26, word: "sixty"},
{from: 32, to: 46, word: "twenty"},
{from: 32, to: 31, word: "three"},
{from: 32, to: 31, word: "two"},
{from: 32, to: 49, word: "one"},
{from: 32, to: 49, word: "nineteen"},
{from: 32, to: 49, word: "eighteen"},
{from: 32, to: 49, word: "seventeen"},
{from: 32, to: 49, word: "sixteen"},
{from: 32, to: 49, word: "fifteen"},
{from: 32, to: 49, word: "fourteen"},
{from: 32, to: 49, word: "thirteen"},
{from: 32, to: 49, word: "twelve"},
{from: 32, to: 31, word: "nine"},
{from: 32, to: 31, word: "eight"},
{from: 32, to: 31, word: "seven"},
{from: 32, to: 31, word: "six"},
{from: 32, to: 31, word: "five"},
{from: 32, to: 31, word: "four"},
{from: 32, to: 46, word: "fifty"},
{from: 32, to: 46, word: "forty"},
{from: 32, to: 46, word: "thirty"},
{from: 32, to: 46, word: "ninety"},
{from: 32, to: 46, word: "eighty"},
{from: 32, to: 46, word: "seventy"},
{from: 32, to: 46, word: "sixty"},
{from: 32, to: 47, word: "three"},
{from: 32, to: 47, word: "two"},
{from: 32, to: 47, word: "nine"},
{from: 32, to: 47, word: "eight"},
{from: 32, to: 47, word: "seven"},
{from: 32, to: 47, word: "six"},
{from: 32, to: 47, word: "five"},
{from: 32, to: 47, word: "four"},
{from: 33, to: 47, word: "four"},
{from: 33, to: 47, word: "five"},
{from: 33, to: 47, word: "six"},
{from: 33, to: 47, word: "seven"},
{from: 33, to: 47, word: "eight"},
{from: 33, to: 47, word: "nine"},
{from: 33, to: 47, word: "two"},
{from: 33, to: 47, word: "three"},
{from: 33, to: 46, word: "sixty"},
{from: 33, to: 46, word: "seventy"},
{from: 33, to: 46, word: "eighty"},
{from: 33, to: 46, word: "ninety"},
{from: 33, to: 46, word: "thirty"},
{from: 33, to: 46, word: "forty"},
{from: 33, to: 46, word: "fifty"},
{from: 33, to: 31, word: "four"},
{from: 33, to: 31, word: "five"},
{from: 33, to: 31, word: "six"},
{from: 33, to: 31, word: "seven"},
{from: 33, to: 31, word: "eight"},
{from: 33, to: 31, word: "nine"},
{from: 33, to: 49, word: "twelve"},
{from: 33, to: 49, word: "thirteen"},
{from: 33, to: 49, word: "fourteen"},
{from: 33, to: 49, word: "fifteen"},
{from: 33, to: 49, word: "sixteen"},
{from: 33, to: 49, word: "seventeen"},
{from: 33, to: 49, word: "eighteen"},
{from: 33, to: 49, word: "nineteen"},
{from: 33, to: 49, word: "one"},
{from: 33, to: 31, word: "two"},
{from: 33, to: 31, word: "three"},
{from: 33, to: 46, word: "twenty"},
{from: 33, to: 26, word: "sixty"},
{from: 33, to: 26, word: "seventy"},
{from: 33, to: 26, word: "eighty"},
{from: 33, to: 26, word: "ninety"},
{from: 33, to: 26, word: "thirty"},
{from: 33, to: 26, word: "forty"},
{from: 33, to: 26, word: "fifty"},
{from: 33, to: 48, word: "ten"},
{from: 33, to: 48, word: "eleven"},
{from: 33, to: 38, word: "twelve"},
{from: 33, to: 38, word: "thirteen"},
{from: 33, to: 38, word: "fourteen"},
{from: 33, to: 38, word: "fifteen"},
{from: 33, to: 38, word: "sixteen"},
{from: 33, to: 38, word: "seventeen"},
{from: 33, to: 38, word: "eighteen"},
{from: 33, to: 38, word: "nineteen"},
{from: 33, to: 25, word: "one"},
{from: 33, to: 26, word: "twenty"},
{from: 33, to: 37, word: "ten"},
{from: 33, to: 37, word: "eleven"},
{from: 34, to: 39, word: "from"},
{from: 34, to: 35, word: "and"},
{from: 34, to: 50, word: ""},
{from: 35, to: 47, word: "four"},
{from: 35, to: 47, word: "five"},
{from: 35, to: 47, word: "six"},
{from: 35, to: 47, word: "seven"},
{from: 35, to: 47, word: "eight"},
{from: 35, to: 47, word: "nine"},
{from: 35, to: 47, word: "two"},
{from: 35, to: 47, word: "three"},
{from: 35, to: 46, word: "sixty"},
{from: 35, to: 46, word: "seventy"},
{from: 35, to: 46, word: "eighty"},
{from: 35, to: 46, word: "ninety"},
{from: 35, to: 46, word: "thirty"},
{from: 35, to: 46, word: "forty"},
{from: 35, to: 46, word: "fifty"},
{from: 35, to: 41, word: "four"},
{from: 35, to: 41, word: "five"},
{from: 35, to: 41, word: "six"},
{from: 35, to: 41, word: "seven"},
{from: 35, to: 41, word: "eight"},
{from: 35, to: 41, word: "nine"},
{from: 35, to: 49, word: "twelve"},
{from: 35, to: 49, word: "thirteen"},
{from: 35, to: 49, word: "fourteen"},
{from: 35, to: 49, word: "fifteen"},
{from: 35, to: 49, word: "sixteen"},
{from: 35, to: 49, word: "seventeen"},
{from: 35, to: 49, word: "eighteen"},
{from: 35, to: 49, word: "nineteen"},
{from: 35, to: 49, word: "one"},
{from: 35, to: 41, word: "two"},
{from: 35, to: 41, word: "three"},
{from: 35, to: 46, word: "twenty"},
{from: 35, to: 48, word: "ten"},
{from: 35, to: 48, word: "eleven"},
{from: 35, to: 42, word: "one"},
{from: 36, to: 34, word: "hours"},
{from: 37, to: 34, word: "hours"},
{from: 38, to: 34, word: "hours"},
{from: 39, to: 40, word: "now"},
{from: 40, to: 50, word: ""},
{from: 41, to: 43, word: "hundred"},
{from: 42, to: 43, word: "hundred"},
{from: 43, to: 45, word: "minutes"},
{from: 43, to: 44, word: "and"},
{from: 44, to: 47, word: "four"},
{from: 44, to: 47, word: "five"},
{from: 44, to: 47, word: "six"},
{from: 44, to: 47, word: "seven"},
{from: 44, to: 47, word: "eight"},
{from: 44, to: 47, word: "nine"},
{from: 44, to: 47, word: "two"},
{from: 44, to: 47, word: "three"},
{from: 44, to: 46, word: "sixty"},
{from: 44, to: 46, word: "seventy"},
{from: 44, to: 46, word: "eighty"},
{from: 44, to: 46, word: "ninety"},
{from: 44, to: 46, word: "thirty"},
{from: 44, to: 46, word: "forty"},
{from: 44, to: 46, word: "fifty"},
{from: 44, to: 49, word: "twelve"},
{from: 44, to: 49, word: "thirteen"},
{from: 44, to: 49, word: "fourteen"},
{from: 44, to: 49, word: "fifteen"},
{from: 44, to: 49, word: "sixteen"},
{from: 44, to: 49, word: "seventeen"},
{from: 44, to: 49, word: "eighteen"},
{from: 44, to: 49, word: "nineteen"},
{from: 44, to: 49, word: "one"},
{from: 44, to: 46, word: "twenty"},
{from: 44, to: 48, word: "ten"},
{from: 44, to: 48, word: "eleven"},
{from: 45, to: 39, word: "from"},
{from: 45, to: 50, word: ""},
{from: 46, to: 45, word: "minutes"},
{from: 46, to: 47, word: "four"},
{from: 46, to: 47, word: "five"},
{from: 46, to: 47, word: "six"},
{from: 46, to: 47, word: "seven"},
{from: 46, to: 47, word: "eight"},
{from: 46, to: 47, word: "nine"},
{from: 46, to: 47, word: "two"},
{from: 46, to: 47, word: "three"},
{from: 46, to: 49, word: "one"},
{from: 47, to: 45, word: "minutes"},
{from: 48, to: 45, word: "minutes"},
{from: 49, to: 45, word: "minutes"},
]};
