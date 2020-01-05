/**
 * Functional composition examples
 */

// assign the button click handlers
$(document).ready(function() {
	$("#applyfunctions").click(function() {
		applyFunctions();
	});
});

var compose = function(f, g) {
	return function(arguments) {
		return f.call(this, g.apply(this, arguments));
	}
};

// Done: define a function that is the composition of addOne and square
var addOne = function(x) {
	return x + 1;
};

var square = function(y) {
	return y * y;
};

var addSquare = compose(addOne, square);

var trim = function(str) {
	return str.replace(/^\s*|\s*$/g, '');	
};

var capitalize = function(str) {
	return str.toUpperCase();
};

var convert = compose(trim, capitalize);

var displayData = function(data, divid) {
	$("#" + divid).html("<pre>" +  data  + "</pre>");
};

var applyFunctions = function() {
	var str = "      The answer to Life, the Universe and Everything is 42.       ";
	displayData(str, "originalString");
	displayData(trim(str), "trimdiv");
	displayData(capitalize(str), "capitaldiv");
    displayData(convert([str]), "compositiondiv");
    
    // Done: Add code to test your new function
    var num = 7;
    displayData(num, "originalNumber");
    displayData(square(num), "squareNumber");
    displayData(addOne(num), "incrementedNumber");
    displayData(addSquare([num]), "composedResult");
}



