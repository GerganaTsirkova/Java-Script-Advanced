const expect = require('chai').expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe("Calculator function",function () {
    describe("Basic class cheecks",function () {
        let output;
        beforeEach(function () {
            output = new PaymentPackage('whateverName',100)
        });
        it('should be instance of a class', function () {
            expect(output).to.be.instanceOf(PaymentPackage)
        });
        it('should have properties, getters and setters',function () {
            expect(output).to.have.property('toString');
            expect(output).to.have.property('name');
            expect(output).to.have.property('value');
            expect(output).to.have.property('VAT');
            expect(output).to.have.property('active');
            expect(output.active).to.be.true;
            expect(output._active).to.be.true;
        });
    });
    describe("Cheecks parameters passed to the constructor",function () {
        it('first should be a string', function () {
            let output = new PaymentPackage("Pesho",1000);
            expect(output.name).to.be.a('string');
            expect(output.name).to.equals('Pesho')
        });
        it('second should be a number', function () {
            let output = new PaymentPackage("Pesho",1000);
            expect(output.value).to.be.a('number');
            expect(output.value).to.equals(1000);
            expect(output.value).to.be.closeTo(1000,0.01);
        });
        it('should throw error when wrong input', function () {
            expect(()=>{let output = new PaymentPackage()}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage('string')}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage('string',-8)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(8)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage('string','string')}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(8,8)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(8,'string')}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(-8)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(0)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(null)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(undefined)}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage(function () {})}).to.throw(Error);
            expect(()=>{let output = new PaymentPackage([])}).to.throw(Error);
        });
    });
    describe("Cheeck VAT",function () {
        it('should be passed correct VAT num', function () {
            let output = new PaymentPackage("Pesho",1000);
            expect(output.VAT).to.equals(20);
            expect(()=>{output.VAT=-5}).to.throw(Error);
            expect(()=>{output.VAT='string'}).to.throw(Error);
            expect(()=>{output.VAT={}}).to.throw(Error);
            expect(()=>{output.VAT=true}).to.throw(Error);
            expect(()=>{output.VAT=false}).to.throw(Error);
            expect(()=>{output.VAT=null}).to.throw(Error);
            expect(()=>{output.VAT=undefined}).to.throw(Error);
            expect(()=>{output.VAT=function () {}}).to.throw(Error);
            expect(()=>{output.VAT=[]}).to.throw(Error);

        });
        it('should add new value of VAT and not only...',function () {
            let output = new PaymentPackage("Pesho",1000);
            output.VAT=30;
            expect(output.toString()).to.be.a('string').that.equals('Package: Pesho\n' +
                '- Value (excl. VAT): 1000\n' +
                '- Value (VAT 30%): 1300');
            output.active=false;
            expect(output.toString()).to.be.a('string').that.equals('Package: Pesho (inactive)\n' +
                '- Value (excl. VAT): 1000\n' +
                '- Value (VAT 30%): 1300');
        })
    });
    describe("Cheeck active",function () {
        it('should return correct string', function () {
            let output = new PaymentPackage("Pesho",1000);
            expect(output.active).to.equals(true);
            expect(()=>{output.active=-5}).to.throw(Error);
            expect(()=>{output.active='string'}).to.throw(Error);
            expect(()=>{output.active={}}).to.throw(Error);
            expect(()=>{output.active=5}).to.throw(Error);
            expect(()=>{output.active=null}).to.throw(Error);
            expect(()=>{output.active=undefined}).to.throw(Error);
            expect(()=>{output.active=function () {}}).to.throw(Error);
            expect(()=>{output.active=[]}).to.throw(Error);
        });
    });
    describe("Cheeck toString",function () {
        it('should be passed correct VAT num', function () {
            let output = new PaymentPackage('HR Services', 1500);
            expect(output.toString()).to.be.a('string').that.equals('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should be passed correct VAT num', function () {
            let packages = [
                new PaymentPackage('HR Services', 1500),
                new PaymentPackage('Consultation', 800),
                new PaymentPackage('Partnership Fee', 7000),
            ];
            expect(packages.toString()).to.be.a('string').that.equals('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800,' +
                'Package: Consultation\n' +
                '- Value (excl. VAT): 800\n' +
                '- Value (VAT 20%): 960,' +
                'Package: Partnership Fee\n' +
                '- Value (excl. VAT): 7000\n' +
                '- Value (VAT 20%): 8400');
            expect(packages.toString()).to.be.a('string').that.include('\n')
        });
    })

});
