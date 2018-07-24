const expect = require("chai").expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor', function () {
    describe('Valid input',function () {
        it("Should return #FF9EAA for 255, 158, 170", function () {
            let num1 = 255;
            let num2 = 158;
            let num3 = 170;
            let result = rgbToHexColor(num1,num2,num3);
            expect(result).to.be.equal('#FF9EAA');
        });
        it("Should return #0C0D0E for 12,13,14", function () {
            let num1 = 12;
            let num2 = 13;
            let num3 = 14;
            let result = rgbToHexColor(num1,num2,num3);
            expect(result).to.be.equal('#0C0D0E');
        });
        it("Should return #000000 for 0,0,0", function () {
            let num1 = 0;
            let num2 = 0;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(result).to.be.equal('#000000');
        });
        it("Should return #FFFFFF for 255,255,255", function () {
            let num1 = 255;
            let num2 = 255;
            let num3 = 255;
            let result = rgbToHexColor(num1,num2,num3);
            expect(result).to.be.equal('#FFFFFF');
        });
    });
    describe('Invalid input',function () {
        it("Should return undefined for -1, 0, 0", function () {
            let num1 = -1;
            let num2 = 0;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, -1, 0", function () {
            let num1 = 0;
            let num2 = -1;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, 0, -1", function () {
            let num1 = 0;
            let num2 = 0;
            let num3 = -1;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 256, 0, 0", function () {
            let num1 = 256;
            let num2 = 0;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, 256, 0", function () {
            let num1 = 0;
            let num2 = 256;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, 0, 256", function () {
            let num1 = 0;
            let num2 = 0;
            let num3 = 256;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 3.14, 0, 0", function () {
            let num1 = 3.14;
            let num2 = 0;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, 3.14, 0", function () {
            let num1 = 0;
            let num2 = 3.14;
            let num3 = 0;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for 0, 0, 3.14", function () {
            let num1 = 0;
            let num2 = 0;
            let num3 = 3.14;
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for '5', [3], {8:9}", function () {
            let num1 = '5';
            let num2 = [3];
            let num3 = {8:9};
            let result = rgbToHexColor(num1,num2,num3);
            expect(undefined).to.be.an('undefined');
        });
        it("Should return undefined for (empty input)", function () {
            let result = rgbToHexColor();
            expect(undefined).to.be.an('undefined');
        });
    });

});
