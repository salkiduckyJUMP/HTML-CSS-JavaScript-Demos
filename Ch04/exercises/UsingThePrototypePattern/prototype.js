var calculator = function(sum, difference, product, quotient) {
    this.sum = sum;
    this.difference = difference;
    this.product = product;
    this.quotient = quotient;
}


calculator.prototype = {
    add: function (x,y) {
        var val = x + y;
        this.sum = val;
    },
    subtract: function(x,y) {
        var val = x - y;
        this.difference = val;
    },
    multiply: function(x,y) {
        var val = x * y;
        this.product = val;
    },
    divide: function(x,y) {
        var val = x / y;
        this.quotient = val;
    }
};

