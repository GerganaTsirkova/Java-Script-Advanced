const expect = require("chai").expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("function",function () {
    let list;
    beforeEach(function () {
        list = createList();
    });
    it('basic checks', function () {
        expect(list).to.be.instanceOf(Object);
        expect(list).to.haveOwnProperty('add');
        expect(list).to.haveOwnProperty('shiftLeft');
        expect(list).to.haveOwnProperty('shiftRight');
        expect(list).to.haveOwnProperty('swap');
        expect(list).to.haveOwnProperty('toString');
        expect(list.toString()).to.equals('')
    });
    it('check add property and toString property ', function () {
        list.add(5);
        list.add(10);
        expect(list.toString()).to.include(', ');
        expect(list.toString()).to.include('5');
        expect(list.toString()).to.include('10');
        expect(list.toString()).to.equal('5, 10');
    });
    it('check shiftLeft property ', function () {
        list.add(5);
        list.shiftLeft();
        expect(list.toString()).to.equal('5');
        list.add('string');
        list.shiftLeft();
        expect(list.toString()).to.equal('string, 5');
        expect(list.toString()).to.not.equal('5, string');
    });
    it('check shiftRight property ', function () {
        list.add(5);
        list.shiftRight();
        expect(list.toString()).to.equal('5');
        list.add('string');
        list.add(10);
        list.shiftRight();
        expect(list.toString()).to.equal('10, 5, string');
        expect(list.toString()).to.not.equal('5, string, 10');
    });
    it('check swap property ', function () {
        list.add(5);
        list.add('string');
        list.add(10);
        list.swap(0,2);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(1,2)).to.equal(true);
    });
    it('check swap property returns false', function () {
        list.add(5);
        expect(list.swap(0,2)).to.equals(false);
        list.add('string');
        list.add(10);
        list.swap(0,2);
        expect(list.swap(-1,2)).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(0,3)).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(0,0)).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(0.2,0)).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(0,0.3)).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
        expect(list.swap(0,"string")).to.equal(false);
        expect(list.toString()).to.equal('10, string, 5');
    });
    it('check all properties combined', function () {
        list.add(5);
        list.add('string');
        list.add(10);
        list.shiftRight();
        list.shiftRight();
        list.shiftLeft();
        list.swap(0,2);
        expect(list.toString()).to.equals('string, 5, 10')
    });

});
