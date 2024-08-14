
const Calculator = {

    result: 0,


    add: function(a, b) {
        this.result = a + b;
        return this.result;
    },


    subtract: function(a, b) {
        this.result = a - b;
        return this.result;
    },


    multiply: function(a, b) {
        this.result = a * b;
        return this.result;
    },


    divide: function(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result = a / b;
        return this.result;
    },


    reset: function() {
        this.result = 0;
        return this.result;
    }
};


console.log(Calculator.add(10, 5));      
console.log(Calculator.subtract(10, 5)); 
console.log(Calculator.multiply(10, 5)); 
console.log(Calculator.divide(10, 5));  
console.log(Calculator.reset());