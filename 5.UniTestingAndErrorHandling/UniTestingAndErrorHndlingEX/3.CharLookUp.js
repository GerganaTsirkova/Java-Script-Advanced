const expect = require("chai").expect;
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('LookUpChar function',function () {
    it('should return undefined with no parameter at all', function () {
        //1.Arrange
        lookupChar();
        //2.Act
        let result = lookupChar();
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined with only one parameter as input (int)', function () {
        //1.Arrange
        let int = 13;
        //2.Act
        let result = lookupChar(int);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined with only one parameter as input (string)', function () {
        //1.Arrange
        let str = "Bruno";
        //2.Act
        let result = lookupChar(str);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined with index which is not an integer', function () {
        //1.Arrange
        let str = "Bruno";
        let index = "dog";
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined with index which is not an integer', function () {
        //1.Arrange
        let str = "Bruno";
        let index = 2.568;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined with first input which is not a string type', function () {
        //1.Arrange
        let str = 15;
        let index = 8;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.undefined;
    });
    it('should return Incorrect index with index out of the boundaries of the string', function () {
        //1.Arrange
        let str = "This is my string";
        let index = -1;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index with index out of the boundaries of the string', function () {
        //1.Arrange
        let str = "This is my string";
        let index = 100;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index with index out of the boundaries of the string', function () {
        //1.Arrange
        let str = "This is my string";
        let index = 17;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.equal('Incorrect index');
    });
    //If everything above works:
    it('should return "T"', function () {
        //1.Arrange
        let str = "This is my string";
        let index = 0;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.equal('T');
    });
    it('should return "i"', function () {
        //1.Arrange
        let str = "This is my string";
        let index = 5;
        //2.Act
        let result = lookupChar(str,index);
        //3.Assert
        expect(result).to.be.equal('i');
    });
});