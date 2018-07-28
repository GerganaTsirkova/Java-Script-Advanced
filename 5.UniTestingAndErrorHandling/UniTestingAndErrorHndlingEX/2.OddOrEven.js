const expect = require("chai").expect;
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe("Is odd or even",function () {
    it('should return undefined', function () {
        //1.Arrange
        isOddOrEven();
        //2.Act
        let result = isOddOrEven();
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined', function () {
        //1.Arrange
        isOddOrEven();
        //2.Act
        let result = isOddOrEven(13);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return odd', function () {
        //1.Arrange
        let string = 'aba';
        //2.Act
        let result = isOddOrEven(string);
        //3.Assert
        expect(result).to.be.equal("odd");
    });
    it('should return even', function () {
        //1.Arrange
        let string = 'ab';
        //2.Act
        let result = isOddOrEven(string);
        //3.Assert
        expect(result).to.be.equal("even");
    });
    it('should return even', function () {
        //1.Arrange
        let string = 'Pesho';
        //2.Act
        let result = isOddOrEven(string);
        //3.Assert
        expect(result).to.be.equal("odd");
    });
});
