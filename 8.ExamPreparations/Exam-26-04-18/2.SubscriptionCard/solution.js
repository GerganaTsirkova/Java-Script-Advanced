const expect = require("chai").expect;

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

describe("Calculator function", function () {
    let card;
    beforeEach(function () {
        card = new SubscriptionCard('Pesho', 'Petrov', '2222card');
    });
    it('basic class checks', function () {
        expect(card).to.be.an.instanceOf(SubscriptionCard);
        expect(card.firstName).to.exist;
        expect(card.lastName).to.exist;
        expect(card.SSN).to.exist;
        expect(card.isBlocked).to.exist;
        expect(card._subscriptions).to.exist;
        expect(card).to.have.property("addSubscription");
        expect(card).to.have.property("isValid");
        expect(card).to.have.property("block");
        expect(card).to.have.property("unblock");
    });
    it('getter firstName', function () {
        expect(card.firstName).to.equals('Pesho');
        expect(card.firstName).to.be.a('string');
        card.firstName = 'Gosho';
        expect(card.firstName).to.equals('Pesho');
    });
    it('getter lastName', function () {
        expect(card.lastName).to.equals('Petrov');
        expect(card.lastName).to.be.a('string');
        card.lastName = 'Gosho';
        expect(card.lastName).to.equals('Petrov');
    });
    it('getter SSN', function () {
        expect(card.SSN).to.equals('2222card');
        expect(card.SSN).to.be.a('string');
        card.SSN = '8888888';
        expect(card.SSN).to.equals('2222card');
    });
    it('block, unblock and isBlocked', function () {
        expect(card._blocked).to.equals(false);
        expect(card.isBlocked).to.equals(false);
        expect(card.isBlocked).to.be.a('boolean');
        card.block();
        expect(card._blocked).to.equals(true);
        expect(card.isBlocked).to.equals(true);
        card.unblock();
        expect(card._blocked).to.equals(false);
        expect(card.isBlocked).to.equals(false);
    });
    it('getter subscriptions', function () {
        expect(card._subscriptions).to.be.an('array');
    });
    it('getter addSubscription', function () {
        let obj = {line: '120', startDate: new Date('2018-04-22'), endDate: new Date('2018-05-21')};
        let objTwo = {line: '*', startDate: new Date('2018-04-22'), endDate: new Date('2018-05-21')};
        card.addSubscription(obj);
        expect(card._subscriptions.length).to.equals(1);
        expect(card._subscriptions[0]).to.be.a('object');
        card.addSubscription(objTwo);
        expect(card._subscriptions.length).to.equals(2);
        expect(card._subscriptions[1]).to.be.a('object');
    });
    it('isValid', function () {
        let obj = {line: '120', startDate: new Date('2018-04-22'), endDate: new Date('2018-05-21')};
        card.addSubscription(obj);
        expect(card.isValid('120', new Date('2018-04-23'))).to.equals(false);
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        card.block();
        card.unblock();
        expect(card.isValid('120', new Date('2018-04-22'))).to.equals(true);
        expect(card.isValid('120', new Date('2018-05-21'))).to.equals(true);
        expect(card.isValid('120', new Date('2018-04-21'))).to.equals(false);
        expect(card.isValid('120', new Date('2018-05-22'))).to.equals(false);
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        expect(card.isValid('120', new Date('2018-05-25'))).to.equals(true);
        expect(card.isValid('120', new Date('2018-05-24'))).to.equals(false);
        expect(card.isValid('120', new Date('2018-06-24'))).to.equals(true);
        expect(card.isValid('120', new Date('2018-06-25'))).to.equals(false);
        expect(card.isValid('129', new Date('2018-05-25'))).to.equals(true);
        expect(card.isValid('129', new Date('2018-05-24'))).to.equals(false);
        expect(card.isValid('129', new Date('2018-06-24'))).to.equals(true);
        expect(card.isValid('129', new Date('2018-06-25'))).to.equals(false);
        card.block();
        expect(card.isValid('129', new Date('2018-06-24'))).to.equals(false);
        expect(card.isValid('120', new Date('2018-06-01'))).to.equals(false);
        card.unblock();
        expect(card.isValid('129', new Date('2018-06-24'))).to.equals(true);
        expect(card.isValid('120', new Date('2018-06-01'))).to.equals(true);
    });
});
