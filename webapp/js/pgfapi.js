
function PgfApi(grammar) {
	this.grammar = grammar;
	if (grammar instanceof GFGrammar) {
		this.langs = Object.keys(grammar.concretes);
		this.isWebService = false;
	} else {
		this.langs = undefined;
		this.isWebService = true;
	}
}

/*
Returns the linearizations of the first parse tree for the given language.
*/
PgfApi.prototype.translateSimple = function(input, from) {
	var trans = this.grammar.translate(input, from, '');
	if (trans && trans[from] && trans[from][0]) {
		return trans[from][0];
	}
	return {};
};
