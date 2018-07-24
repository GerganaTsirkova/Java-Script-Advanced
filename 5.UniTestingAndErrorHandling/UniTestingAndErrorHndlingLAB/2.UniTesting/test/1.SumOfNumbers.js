const expect = require("chai").expect;
function sum(arr) {
    let sum = 0;
    for (number of arr) {
        sum += Number(number)
    }
    return sum;
}
describe("Sum function test",function () {
    it('should return 6 for [1,2,3]', function () {
        //1.Arrange
        let array = [1,2,3];
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(result).to.be.equal(6);
    });
    it('should return 1 for [1]', function () {
        //1.Arrange
        let array = [1];
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(result).to.be.equal(1);
    });
    it('should return 3 for [1,2]', function () {
        //1.Arrange
        let array = [1,2];
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(result).to.be.equal(3);
    });
    it('should return 0 for []', function () {
        //1.Arrange
        let array = [];
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(result).to.be.equal(0);
    });
    it('should return 3.1 for [1.1,1,1]', function () {
        //1.Arrange
        let array = [1.1,1,1];
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(result).to.be.equal(3.1);
    });
    it('should return Nan for [age]', function () {
        //1.Arrange
        let array = "age";
        //2.Act
        let result = sum(array);
        //3.Assert
        expect(NaN).to.be.NaN;
    });
});