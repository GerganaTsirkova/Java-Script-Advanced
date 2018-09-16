const expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}


describe("StringBuilder tests", function () {
    describe("Basic class tests", function () {
        it("The result to be an instance of class StringBuilder", function () {
            let result = new StringBuilder('hello');
            expect(result).to.be.an.instanceOf(StringBuilder);
        });
        it('has all properties in the constructor', function () {
            let builder = new StringBuilder('test');
            expect(builder.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
        });
        it('the prop in the constructor makes an empty arr', function () {
            let builder = new StringBuilder();
            expect(builder._stringArray.length).to.equal(0);
        });
        it("To have property 'toString'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("toString");
        });
        it("To have property 'append'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("append");
        });
        it("To have property 'prepend'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("prepend");
        });
        it("To have property 'insertAt'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("insertAt");
        });
        it("To have property 'remove'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("remove");
        });
        it("To have property 'toString'", function () {
            let result = new StringBuilder('hello');
            expect(result).to.have.property("toString");
        });

    });
    describe("Initialization", function () {
        let builder;
        it('initialization does not throw', function () {
            let initEmpty = () => builder = new StringBuilder();
            expect(initEmpty).to.not.throw();
            let initParamCorrect = () => builder = new StringBuilder('hello');
            expect(initParamCorrect).to.not.throw();
        });
        it('initialization throws', function () {
            let init = () => builder = new StringBuilder(5);
            expect(init).to.throw();
            let initParamCorrect = () => builder = new StringBuilder({});
            expect(initParamCorrect).to.throw();
            let initial = ()=>builder = new StringBuilder(()=>{});
            expect(initial).to.throw();
        });
    });
    describe("Test functions", function () {
        describe('Append',function () {
            it('append string to throw error when wrong arg passed to append function', function () {
                let test = new StringBuilder('test');
                let appendedString = 8;
                let resultFirst = () => test.append(appendedString);
                expect(resultFirst).to.throw();
                let obj = {};
                let resultSecond = () => test.append(appendedString);
                expect(resultSecond).to.throw();
            });
            it('append to appends a string', function () {
                let test = new StringBuilder('test');
                expect(test._stringArray instanceof Array).to.be.equal(true);
                let addedString = 'Me';
                test.append(addedString);
                let result = test.toString();
                expect(result).to.be.equal('testMe');
            });
            it('invalid insertAt parameter', function () {
                let builder = new  StringBuilder('hello');
                let willThrow = () => builder.insertAt(5, 1);
                expect(willThrow).to.throw();
            });
        });
        describe('Prepend',function () {
            it('"Prepend" string to throw error when wrong arg passed to append function', function () {
                let test = new StringBuilder('test');
                let str = 8;
                let resultFirst = () => test.prepend(str);
                expect(resultFirst).to.throw();
                let obj = {};
                let resultSecond = () => test.prepend(str);
                expect(resultSecond).to.throw();
            });
            it('"Prepend" to inserts a string at the begging', function () {
                let test = new StringBuilder('test');
                expect(test._stringArray instanceof Array).to.be.equal(true);
                test.prepend('My');
                let result = test.toString();
                expect(result).to.be.equal('Mytest');
            });
        });
        describe('toString',function () {
            it('"toString" to inserts a string at the begging', function () {
                let test = new StringBuilder('test');
                expect(test._stringArray instanceof Array).to.be.equal(true);
                let result = test.toString();
                expect(result).to.be.equal('test');
            });
        });
        describe('insertAt',function () {
            it('"insertAt" string to throw error when wrong arg passed to append function', function () {
                let test = new StringBuilder('test');
                let str = 8;
                let index = 0;
                let resultFirst = () => test.insertAt(str,index);
                expect(resultFirst).to.throw();
                let obj = {};
                let resultSecond = () => test.insertAt(str,index);
                expect(resultSecond).to.throw();
            });
            it('"insertAt" to inserts a string at given index', function () {
                let test = new StringBuilder('Test');
                expect(test._stringArray instanceof Array).to.be.equal(true);
                let stringToInsert = 'OOO';
                let result = test.insertAt(stringToInsert,1);
                expect(test.toString()).to.be.equal('TOOOest');
            });
        });
        describe('Remove',function () {
            it('Removes', function () {
                let testAppend = new StringBuilder('test');
                let result = testAppend.remove(1,2);
                expect(testAppend.toString()).to.be.equal('tt');
            });
            it('Removes', function () {
                let testAppend = new StringBuilder('0123456test');
                let result = testAppend.remove(7,20);
                expect(testAppend.toString()).to.be.equal('0123456');
            });
        });
    });
});
