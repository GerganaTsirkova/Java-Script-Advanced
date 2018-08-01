const expect = require("chai").expect;
const jsDom = require("jsdom-global")();
const $ = require("jquery");

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("Dom testing",function () {
    describe("Initial test if DOM exists and if the boxes are with value null",function () {
        it('test that shows if DOM element exists', function () {
            let nameTextBox = $('#name');
            expect(nameTextBox).to.exist;
        });
        it('the object name property must have initial value null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('the object income property must have initial value null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe("Change name tests",function () {
        it('should return same result when invalid parameter is passed', function () {
            sharedObject.name = null;
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('should return same result when invalid parameter is passed', function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Pesho','Name changed!')
        });
        it('should return same result when preexisting parameter is passed', function () {
            sharedObject.name = 'Peter';
            sharedObject.changeName('Peter');
            expect(sharedObject.name).to.be.equal('Peter','Name changed!')
        });

        it("should change the object's property with valid parameter", function () {
            sharedObject.name = null;
            let name = $('#name');
            sharedObject.changeName('Joro');
            expect(name.val()).to.be.equal('Joro',"Name didn't change")
        });
        it("should change the object's property with valid preexisting parameter", function () {
            sharedObject.name = 'Joro';
            let name = $('#name');
            sharedObject.changeName('Joro');
            expect(name.val()).to.be.equal('Joro',"Name didn't change")
        });
        it("should change the name textBox with invalid parameter", function () {
            sharedObject.name = 'Nora';
            let name = $('#name');
            name.val('Stamat');
            sharedObject.changeName('');
            expect(name.val()).to.be.equal('Stamat',"Name text box didn't change")
        });
    });
    describe("Change income tests",function () {
        it('should return same result when empty string parameter is passed', function () {
            sharedObject.income = null;
            sharedObject.changeIncome('');
            expect(sharedObject.income).to.be.null;
        });
        it('should return same result when NaN parameter is passed', function () {
            sharedObject.income = 9000;
            sharedObject.changeIncome(NaN);
            expect(sharedObject.income).to.be.equal(9000);
        });
        it('should return same result when string parameter is passed', function () {
            sharedObject.income = 5000;
            sharedObject.changeIncome('String');
            expect(sharedObject.income).to.be.equal(5000);
        });
        it('should return same result when 0 parameter is passed', function () {
            sharedObject.income = 6000;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(6000);
        });
        it('should return same result when negative parameter is passed', function () {
            sharedObject.income = 5000;
            sharedObject.changeIncome(-1);
            expect(sharedObject.income).to.be.equal(5000);
        });
        it('should return the new valid parameter that is passed', function () {
            sharedObject.income = 5000;
            sharedObject.changeIncome(10);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('should return the same value when existed parameter is passed', function () {
            sharedObject.income = 5000;
            sharedObject.changeIncome(5000);
            expect(sharedObject.income).to.be.equal(5000);
        });

        it('should return same result in income text box when empty string parameter is passed', function () {
            let income = $('#income');
            income.val('');
            sharedObject.changeIncome('');
            expect(income.val()).to.be.equal('');
        });
        it('should return same result in income text box when string parameter is passed', function () {
            let income = $('#income');
            income.val(5000);
            sharedObject.changeIncome('String');
            expect(Number(income.val())).to.be.equal(5000);
        });
        it('should return same result in income text box when 0 parameter is passed', function () {
            let income = $('#income');
            income.val(6000);
            sharedObject.changeIncome(0);
            expect(Number(income.val())).to.be.equal(6000);
        });
        it('should return same result when negative parameter is passed', function () {
            let income = $('#income');
            income.val(5000);
            sharedObject.changeIncome(-1);
            expect(Number(income.val())).to.be.equal(5000);
        });
        it('should return same result when negative parameter is passed', function () {
            let income = $('#income');
            income.val(5000);
            sharedObject.changeIncome(15000);
            expect(Number(income.val())).to.be.equal(15000);
        });
    });
    describe("Update name tests",function () {
        it('should return no changes if text box value is empty string', function () {
            sharedObject.name = "Ana";
            let name = $('#name');
            name.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Ana");
        });
        it('should return same name with valid pre existing input', function () {
            sharedObject.name = 'Turbo';
            let name = $('#name');
            name.val('Turbo');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Turbo')
        });
        it('should return changed name if valid value is passed', function () {
            sharedObject.name = "Ana";
            let name = $('#name');
            name.val('Bruno');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Bruno");
        });
    });
    describe("Update income tests",function () {
        it('should return same result in income text box has empty string as a value', function () {
            sharedObject.income = 5;
            let income = $('#income');
            income.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it('should return same result in income text box when string parameter is passed', function () {
            sharedObject.income = 5000;
            let income = $('#income');
            income.val('string');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5000);
        });
        it('should return same result in income text box when 0 parameter is passed', function () {
            sharedObject.income = 6000;
            let income = $('#income');
            income.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6000);
        });
        it('should return same result when negative parameter is passed', function () {
            sharedObject.income = 5000;
            let income = $('#income');
            income.val(-10);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5000);
        });
        it('should return new value', function () {
            sharedObject.income = 5000;
            let income = $('#income');
            income.val(50);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(50);
        });
    })
});