let expect = require('chai').expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("Math enforcer function",function () {
    it('should return 5', function () {
        //1.Arrange
        let number = 0;
        //2.Act
        let result = mathEnforcer.addFive(number);
        //3.Assert
        expect(result).to.be.equal(5);
    });
    it('should return -5', function () {
        //1.Arrange
        let number = -10;
        //2.Act
        let result = mathEnforcer.addFive(number);
        //3.Assert
        expect(result).to.be.equal(-5);
    });
    it('should return 15.25', function () {
        //1.Arrange
        let number = 10.25;
        //2.Act
        let result = mathEnforcer.addFive(number);
        //3.Assert
        expect(result).to.be.equal(15.25);
    });
    it('should return undefined if parameter is not a number', function () {
        //1.Arrange
        let number = "sum";
        //2.Act
        let result = mathEnforcer.addFive(number);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if there is not a parameter', function () {
        //1.Arrange
        //2.Act
        let result = mathEnforcer.addFive();
        //3.Assert
        expect(result).to.be.undefined;
    });


    it('should return 10', function () {
        //1.Arrange
        let number = 20;
        //2.Act
        let result = mathEnforcer.subtractTen(number);
        //3.Assert
        expect(result).to.be.equal(10);
    });
    it('should return -20', function () {
        //1.Arrange
        let number = -10;
        //2.Act
        let result = mathEnforcer.subtractTen(number);
        //3.Assert
        expect(result).to.be.equal(-20);
    });
    it('should return -20.25', function () {
        //1.Arrange
        let number = -10.25;
        //2.Act
        let result = mathEnforcer.subtractTen(number);
        //3.Assert
        expect(result).to.be.equal(-20.25);
    });
    it('should return undefined if parameter is not a number', function () {
        //1.Arrange
        let number = "subtract";
        //2.Act
        let result = mathEnforcer.subtractTen(number);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if there is not a parameter', function () {
        //1.Arrange
        //2.Act
        let result = mathEnforcer.subtractTen();
        //3.Assert
        expect(result).to.be.undefined;
    });


    it('should return undefined if one of the parameters is not a number', function () {
        //1.Arrange
        let number1 = "sum";
        let number2 = 2;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if one of the parameters is not a number', function () {
        //1.Arrange
        let number1 = 5;
        let number2 = 'b';
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if one of the parameters is not a number', function () {
        //1.Arrange
        let number1 = "sum";
        //2.Act
        let result = mathEnforcer.sum(number1);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if one of the parameters is not a number', function () {
        //1.Arrange
        let number1 = "sum";
        let number2 = "a";
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined if there are no parameters at all', function () {
        //1.Arrange
        //2.Act
        let result = mathEnforcer.sum();
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return 25', function () {
        //1.Arrange
        let number1 = 20;
        let number2 = 5;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.equal(25);
    });
    it('should return -25', function () {
        //1.Arrange
        let number1 = -20;
        let number2 = -5;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.equal(-25);
    });
    it('should return 7.80', function () {
        //1.Arrange
        let number1 = 2.80;
        let number2 = 5;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.equal(7.80);
    });
    it('should return 8', function () {
        //1.Arrange
        let number1 = 2.80;
        let number2 = 5.20;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.equal(8);
    });
    it('should return NaN', function () {
        //1.Arrange
        let number1 = NaN;
        let number2 = 5.20;
        //2.Act
        let result = mathEnforcer.sum(number1,number2);
        //3.Assert
        expect(result).to.be.NaN;
    });
});
