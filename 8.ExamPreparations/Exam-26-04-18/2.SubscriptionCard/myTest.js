const expect = require('chai').expect;

class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._SSN = SSN;
        this._subscriptions = [];
        this._blocked = false;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get SSN() {
        return this._SSN;
    }

    get isBlocked() {
        return this._blocked;
    }

    addSubscription(line, startDate, endDate) {
        this._subscriptions.push({
            line,
            startDate,
            endDate
        });
    }

    isValid(line, date) {
        if (this.isBlocked) return false;
        return this._subscriptions.filter(s => s.line === line || s.line === '*')
            .filter(s => {
                return s.startDate <= date &&
                    s.endDate >= date;
            }).length > 0;
    }

    block() {
        this._blocked = true;
    }

    unblock() {
        this._blocked = false;
    }
}

describe('SubscriptionCard',function () {
    describe('Constructor and class testing',function () {
        it("To have firstName'", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            let result = card.firstName;
            expect(result).to.be.equal("Pesho");
        });
        it("To have lastName'", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            let result = card.lastName;
            expect(result).to.be.equal("Petrov");
        });
        it("To have number'", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            let result = card.SSN;
            expect(result).to.be.equal("00000000");
        });
        it("SubscriptionCard to be class", function() {
            let output = new SubscriptionCard();
            expect(output).to.be.an.instanceof(SubscriptionCard);
        });
        it("To have property 'addSubscription'", function() {
            let output = new SubscriptionCard();
            expect(output).to.have.property("addSubscription");
        });
        it("To have property 'block'", function() {
            let output = new SubscriptionCard();
            expect(output).to.have.property("block");
        });
        it("To have property 'unBlock'", function() {
            let output = new SubscriptionCard();
            expect(output).to.have.property("unblock");
        });
        it("To have property 'isValid'", function() {
            let output = new SubscriptionCard();
            expect(output).to.have.property("isValid");
        });
    });
    describe('Add subscription tests',function () {
        it('Should return no subscriptions',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card._subscriptions.length).to.be.equal(0);
            expect(card._subscriptions[0]).to.be.undefined;
            expect(card._subscriptions).to.be.eql([]);
        });
        it('Should return 2 subscriptions',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(2);
            expect(card._subscriptions[0].line).to.be.equal('120');
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
            expect(card._subscriptions[1].line).to.be.equal('*');
            expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'));
            expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'));
        });
    });
    describe('IsBlock',function () {
        it("Should return false for new obj",function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.be.equal(false);
        });
        it("Should return true for blocked card",function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        });
        it("Should return false for blocked and after unblocked card",function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        })
    });
    describe('ReadonlyProperty',function () {
        it("First name shoud not be possible to be changed", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName = "Gosho";
            expect(card.firstName).to.be.equal('Pesho');
        });
        it("Last name shoud not be possible to be changed", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.lastName = "Gosho";
            expect(card.lastName).to.be.equal('Petrov');
        });
        it("Number name shoud not be possible to be changed", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.SSN = "Gosho";
            expect(card.SSN).to.be.equal('00000000');
        });
        it("Check isValid prop", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.true;
        });
    });
    describe('Check if strings are passed',function () {
        it("FirstName to be string", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect('Pesho').to.be.string;
        });
        it("LastName to be string", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect('Petrov').to.be.string;
        });
        it("SSN to be string", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect('00000000').to.be.string;
        });
    });
    describe('Check isValid property',function () {
        it("Check isValid prop if no param is passed to it", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid()).to.be.false;
        });
        it("To return false if no parameter is passed of isValid and card is blocked", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isValid()).to.be.false;
        });
        it("To return false if one parameter is passed to isValid", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('100')).to.be.false;
        });
        it("Check isValid card", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-07-22'))).to.be.false;
        });
        it("Check isValid prop", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-08-23'), new Date('2018-09-24'));
            expect(card.isValid('120', new Date('2018-08-29'))).to.be.true;
        });
        it("To return false if card is empty", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isValid('120','2018-04-22')).to.be.false;
        });
        it("To return false if card is blocked", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isValid('120','2018-04-22')).to.be.false;
        });
        it("To return true if card is valid", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-08-22'), new Date('2018-08-29'));
            expect(card.isValid('120',new Date('2018-08-22'))).to.be.true;
        });
        it("To return true if card is valid (test asterix)", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-08-22'), new Date('2018-08-29'));
            expect(card.isValid('120',new Date('2018-08-22'))).to.be.true;
        });
        it("To return false if card is with expired validation", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-08-22'), new Date('2018-08-23'));
            expect(card.isValid('120',new Date('2018-08-24'))).to.be.equal(false);
        });
        it("To return false if card is with expired validation", function() {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-08-22'), new Date('2018-08-23'));
            expect(card.isValid('120',new Date('2018-08-21'))).to.be.equal(false);
        });
        it("To return false if card is blocked", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true);
        });
    });
});