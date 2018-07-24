const expect = require("chai").expect;
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
describe("Calculator function",function () {
    let calc;
    beforeEach(function () {
        //1.Arrange
        calc = createCalculator();
    });
    it('should return 0', function () {
        //2.Act
        let result = calc.get();
        //3.Assert
        expect(result).to.be.equal(0);
    });
    it ('should return 5 after add(2),add(3)',function () {
        //Act
        calc.add(2);
        calc.add(3);
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(5)
    });
    it('should return -5 after subtract(2), subtract(3)',function () {
        //Act
        calc.subtract(2);
        calc.subtract(3);
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(-5);
    });
    it('should return 4.2 after subtract(1.1), add(5.3)',function () {
        //Act
        calc.subtract(1.1);
        calc.add(5.3);
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(5.3-1.1);
    });
    it('should return 1 after add(10), subtract("7"), add("-2")',function () {
        //Act
        calc.add(10);
        calc.subtract("7");
        calc.add("-2");
        let result = calc.get();
        //Assert
        expect(result).to.be.equal(1);
    });
    it('should return NaN after add("Hello")',function () {
        //Act
        calc.add("Hello");
        let result = calc.get();
        //Assert
        expect(result).to.be.NaN;
    });
    it('should return NaN after subtract("Hello")',function () {
        //Act
        calc.subtract("Hello");
        let result = calc.get();
        //Assert
        expect(result).to.be.NaN;
    });
});


