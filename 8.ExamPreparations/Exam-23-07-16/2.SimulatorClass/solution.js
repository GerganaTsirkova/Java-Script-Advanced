const expect = require("chai").expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}


describe("Sumator function",function () {
    let list;
    beforeEach(function () {
        list = new Sumator();
    });
    it('have all properties', function () {
        expect(list).to.be.an.instanceOf(Sumator)
    });
    it('have all properties', function () {
        expect(list).to.hasOwnProperty('data')
    });
    it('have all properties', function () {
        expect(list).to.hasOwnProperty('add')
    });
    it('have all properties', function () {
        expect(list).to.hasOwnProperty('sumNum')
    });
    it('have all properties', function () {
        expect(list).to.hasOwnProperty('removeByFilter')
    });
    it('have all properties', function () {
        expect(list).to.hasOwnProperty('toString')
    });
    it('have property add that work properly', function () {
        expect(list.data).to.be.an('array').that.is.empty;
        list.add(8);
        list.add('string');
        expect(list.data).to.includes(8);
        expect(list.data).to.includes('string');
        expect(list.toString()).to.equal('8, string')
    });
    it('have property sumNums that work properly', function () {
        expect(list.sumNums()).to.equal(0);
        list.add(8);
        list.add(8);
        list.add(0.1);
        list.add(-1);
        expect(list.sumNums()).to.equal(15.100000000000001);
        list.add('string');
        expect(list.sumNums()).to.equal(15.100000000000001);
    });
    it('have property filterBy that work properly', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add('string');
        list.removeByFilter(x => x % 2 === 0);
        expect(list.toString()).to.equal('1, 3, 5, string');
        expect(list.toString()).to.not.equal('1, 2, 3, 4, 5, string');
        expect(list.sumNums()).to.equal(9);
        list.removeByFilter(x => x % 2 !== 0);
        expect(list.sumNums()).to.equal(0);
        expect(list.toString()).to.equal('(empty)');
        let func = function(){};
        list.removeByFilter(func);
        expect(func).to.be.instanceOf(Function);
    });
    it('have property toString that work properly', function () {
        expect(list.toString()).to.equal('(empty)');
        list.add(8);
        list.add(8);
        list.add(100);
        expect(list.toString()).to.includes(', ');
        expect(list.toString()).to.includes('8, 8, 100');
        list.removeByFilter(x => x % 2 === 0);
        expect(list.toString()).to.equal('(empty)');
    });
});
