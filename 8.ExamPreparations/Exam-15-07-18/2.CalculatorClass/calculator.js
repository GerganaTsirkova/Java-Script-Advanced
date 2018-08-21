const expect = require('chai').expect;
class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}
describe("Calculator class", function() {
    it("To have property 'toString'", function() {
        let output = new Calculator();
        expect(output).to.have.property("toString");
    });
    it("To have property 'add'", function() {
        let output = new Calculator();
        expect(output).to.have.property("add");
    });
    it("To have property 'divideNums'", function() {
        let output = new Calculator();
        expect(output).to.have.property("divideNums");
    });
    it("To have property 'orderBy'", function() {
        let output = new Calculator();
        expect(output).to.have.property("orderBy");
    });
    it("Calculator must be a class", function() {
        let output = new Calculator();
        expect(output).to.be.an.instanceof(Calculator);
    });
    it("To string should return string", function() {
        let output = new Calculator();
        let result = output.toString();
        expect(result).to.be.a('string');
    });
    it("To string should return empty array", function() {
        let output = new Calculator();
        let result = output.toString();
        expect(result).to.be.equal('empty array');
    });
    it("To string should return 3 members that are joined with '->'", function() {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        let result = output.toString();
        expect(result).to.include('->');
    });
    it("Should add data of passed items", function() {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        let result = output.toString();
        expect(result).to.include('Pesho');
    });
    it("Should add data of passed items", function() {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        let result = output.toString();
        expect(result).to.include('5');
    });
    it("Should add data of passed items", function() {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        let result = output.toString();
        expect(result).to.include('10');
    });
    it("Should return 100", function() {
        let output = new Calculator();
        output.add(100);
        let result = output.toString();
        expect(result).to.be.equal('100');
    });
    it("Should return Error", function() {
        let output = new Calculator();
        output.add("stringOne");
        output.add("stringTwo");
        output.add("stringThree");
        expect(()=>{output.divideNums()}).to.throw('There are no numbers in the array!');
    });
    it("Should return Error", function() {
        let output = new Calculator();
        output.add(100);
        output.add(1000);
        output.add(10000);
        let result = output.divideNums().toString();
        expect(result).to.be.equal('0.00001');
    });
    it("Should return string with joined with ', '", function() {
        let output = new Calculator();
        output.add(100);
        output.add(1000);
        output.add(10000);
        let result = output.orderBy();
        expect(result).to.include(', ');
    });
    it("Should return ordered string", function() {
        let output = new Calculator();
        output.add(100);
        output.add(1000);
        output.add(10000);
        let result = output.orderBy();
        expect(result).to.be.equal('100, 1000, 10000')
    });
    it("Should return ordered string by mixed data", function() {
        let output = new Calculator();
        output.add('a');
        output.add('c');
        output.add(100);
        let result = output.orderBy();
        expect(result).to.be.equal('100, a, c')
    });
    it("Should return can't divide by 0", function() {
        let output = new Calculator();
        output.add(10);
        output.add(0);
        let result = output.divideNums();
        expect(result,toString()).to.be.equal('Cannot divide by zero')
    });
    it("Should throw error", function() {
        let output = new Calculator();
        output.add(undefined);
        expect(() => {output.divideNums()}).to.throw('There are no numbers in the array!');
    });
    it("Should return 'empty'", function() {
        let output = new Calculator();
        let result = output.orderBy();
        expect(result).to.be.equal('empty')
    });
});

